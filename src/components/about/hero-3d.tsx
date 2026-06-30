'use client';

import { Canvas, useFrame, type ThreeElements } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';

/* deterministic PRNG so the network layout is stable on every load */
function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const NODE_COLORS = ['#818cf8', '#22d3ee', '#a855f7', '#38bdf8', '#6366f1'];

/* ── Connected network / constellation ─────────────────────────────────────
   Represents the digital systems & connections we build for clients —
   glowing nodes (services/touchpoints) linked into one working network. */
function NetworkGraph({ animate }: { animate: boolean }) {
  const group = useRef<THREE.Group>(null);
  const nodeRefs = useRef<(THREE.Mesh | null)[]>([]);

  const nodes = useMemo(() => {
    const rng = mulberry32(20260630);
    const pts: THREE.Vector3[] = [];
    const N = 20;
    for (let i = 0; i < N; i++) {
      // irregular ellipsoid cloud (wider than tall) — NOT a sphere/globe
      pts.push(
        new THREE.Vector3(
          (rng() * 2 - 1) * 2.7,
          (rng() * 2 - 1) * 1.5,
          (rng() * 2 - 1) * 1.3
        )
      );
    }
    return pts;
  }, []);

  const lineGeo = useMemo(() => {
    const threshold = 1.95;
    const verts: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < threshold) {
          verts.push(nodes[i].x, nodes[i].y, nodes[i].z, nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    return g;
  }, [nodes]);

  useFrame((state) => {
    if (!animate) return;
    if (group.current) group.current.rotation.y += 0.0016;
    const t = state.clock.elapsedTime;
    nodeRefs.current.forEach((m, i) => {
      if (m) m.scale.setScalar(1 + Math.sin(t * 1.4 + i * 0.7) * 0.2);
    });
  });

  return (
    <group ref={group}>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.22} />
      </lineSegments>
      {nodes.map((p, i) => {
        const color = NODE_COLORS[i % NODE_COLORS.length];
        const hub = i % 5 === 0;
        return (
          <mesh key={i} position={p} ref={(el) => { nodeRefs.current[i] = el; }}>
            <sphereGeometry args={[hub ? 0.12 : 0.075, 18, 18]} />
            <meshStandardMaterial
              color={color}
              emissive={color}
              emissiveIntensity={0.9}
              roughness={0.3}
              metalness={0.3}
            />
          </mesh>
        );
      })}
    </group>
  );
}

/* ── Subtle drifting accent shapes (periphery) ─────────────────────────── */
type Shape = { pos: [number, number, number]; color: string; scale: number; geo: 'octa' | 'tetra' | 'dodeca' };
const SHAPES: Shape[] = [
  { pos: [-3.4, 1.5, -1.2], color: '#22d3ee', scale: 0.34, geo: 'octa' },
  { pos: [3.5, -1.3, -1], color: '#818cf8', scale: 0.4, geo: 'dodeca' },
  { pos: [3.0, 1.8, -1.8], color: '#a855f7', scale: 0.28, geo: 'tetra' },
  { pos: [-3.1, -1.7, -1.4], color: '#38bdf8', scale: 0.3, geo: 'octa' },
];

function ShapeMesh({ shape, animate }: { shape: Shape; animate: boolean }) {
  return (
    <Float speed={animate ? 1.6 : 0} rotationIntensity={animate ? 1 : 0} floatIntensity={animate ? 1.2 : 0}>
      <mesh position={shape.pos} scale={shape.scale}>
        {shape.geo === 'octa' && <octahedronGeometry args={[1, 0]} />}
        {shape.geo === 'tetra' && <tetrahedronGeometry args={[1, 0]} />}
        {shape.geo === 'dodeca' && <dodecahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial
          color={shape.color}
          emissive={shape.color}
          emissiveIntensity={0.5}
          roughness={0.35}
          metalness={0.4}
          transparent
          opacity={0.85}
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
    const tx = state.pointer.x * 0.3;
    const ty = state.pointer.y * 0.22;
    group.current.rotation.y += (tx - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (-ty - group.current.rotation.x) * 0.05;
  });
  return (
    <group ref={group}>
      <NetworkGraph animate={animate} />
      {SHAPES.map((s, i) => (
        <ShapeMesh key={i} shape={s} animate={animate} />
      ))}
      <Sparkles count={70} scale={10} size={2.2} speed={animate ? 0.35 : 0} color="#a5b4fc" opacity={0.7} />
    </group>
  );
}

export default function Hero3D() {
  const reduce = useReducedMotion();
  const animate = !reduce;
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={60} color="#818cf8" />
      <pointLight position={[-5, -3, 2]} intensity={50} color="#22d3ee" />
      <pointLight position={[0, 3, -4]} intensity={30} color="#a855f7" />
      <Suspense fallback={null}>
        <Scene animate={animate} />
      </Suspense>
    </Canvas>
  );
}

// keep the JSX namespace augmentation from @react-three/fiber in scope
export type _ThreeElements = ThreeElements;
