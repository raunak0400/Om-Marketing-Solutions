'use client';

import { Canvas, useFrame, type ThreeElements } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';

/* ── Central distorted "brand orb" ─────────────────────────────────────── */
function Orb({ animate }: { animate: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current || !animate) return;
    ref.current.rotation.y += delta * 0.18;
    ref.current.rotation.x += delta * 0.06;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.45, 14]} />
      <MeshDistortMaterial
        color="#6366f1"
        emissive="#4338ca"
        emissiveIntensity={0.45}
        roughness={0.25}
        metalness={0.45}
        distort={animate ? 0.38 : 0.2}
        speed={animate ? 2.2 : 0}
      />
    </mesh>
  );
}

/* ── Cyan wireframe shell that counter-rotates ─────────────────────────── */
function WireShell({ animate }: { animate: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current && animate) ref.current.rotation.y -= delta * 0.12;
  });
  return (
    <mesh ref={ref} scale={1.55}>
      <icosahedronGeometry args={[1.45, 1]} />
      <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.18} />
    </mesh>
  );
}

/* ── Drifting low-poly shapes ──────────────────────────────────────────── */
type Shape = {
  pos: [number, number, number];
  color: string;
  scale: number;
  geo: 'octa' | 'tetra' | 'dodeca' | 'torus';
};
const SHAPES: Shape[] = [
  { pos: [-3.1, 1.4, -1], color: '#22d3ee', scale: 0.42, geo: 'octa' },
  { pos: [3.2, -1.1, -0.5], color: '#818cf8', scale: 0.5, geo: 'dodeca' },
  { pos: [2.7, 1.7, -1.6], color: '#a855f7', scale: 0.34, geo: 'tetra' },
  { pos: [-2.9, -1.6, -1.2], color: '#38bdf8', scale: 0.4, geo: 'torus' },
  { pos: [0.2, 2.5, -2], color: '#6366f1', scale: 0.3, geo: 'octa' },
];

function ShapeMesh({ shape, animate }: { shape: Shape; animate: boolean }) {
  const geo = shape.geo;
  return (
    <Float speed={animate ? 2 : 0} rotationIntensity={animate ? 1.2 : 0} floatIntensity={animate ? 1.4 : 0}>
      <mesh position={shape.pos} scale={shape.scale}>
        {geo === 'octa' && <octahedronGeometry args={[1, 0]} />}
        {geo === 'tetra' && <tetrahedronGeometry args={[1, 0]} />}
        {geo === 'dodeca' && <dodecahedronGeometry args={[1, 0]} />}
        {geo === 'torus' && <torusGeometry args={[0.8, 0.32, 16, 32]} />}
        <meshStandardMaterial
          color={shape.color}
          emissive={shape.color}
          emissiveIntensity={0.55}
          roughness={0.3}
          metalness={0.4}
        />
      </mesh>
    </Float>
  );
}

/* ── Parallax group that leans toward the pointer ──────────────────────── */
function Scene({ animate }: { animate: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current || !animate) return;
    const tx = state.pointer.x * 0.35;
    const ty = state.pointer.y * 0.25;
    group.current.rotation.y += (tx - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-ty - group.current.rotation.x) * 0.05;
  });
  return (
    <group ref={group}>
      <Orb animate={animate} />
      <WireShell animate={animate} />
      {SHAPES.map((s, i) => (
        <ShapeMesh key={i} shape={s} animate={animate} />
      ))}
      <Sparkles count={60} scale={9} size={2.5} speed={animate ? 0.4 : 0} color="#a5b4fc" opacity={0.7} />
    </group>
  );
}

export default function Hero3D() {
  const reduce = useReducedMotion();
  const animate = !reduce;
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={60} color="#818cf8" />
      <pointLight position={[-5, -3, 2]} intensity={50} color="#22d3ee" />
      <pointLight position={[0, 3, -4]} intensity={30} color="#a855f7" />
      <Suspense fallback={null}>
        <Scene animate={animate} />
      </Suspense>
    </Canvas>
  );
}

// silence unused import warning for the JSX namespace augmentation
export type _ThreeElements = ThreeElements;
