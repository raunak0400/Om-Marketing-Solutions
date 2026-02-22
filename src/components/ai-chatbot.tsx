'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { sendChatMessage, type ChatMessage } from '@/app/chat-action';

// ─── TRUE 3D ROBOT ────────────────────────────────────────────────────────────
//
// Technique: every "face" of the robot is a CSS div/span positioned in 3D space
// using transform-style:preserve-3d + perspective on the parent. This gives
// genuine 3-dimensional depth that reacts to the rocking animation, unlike a
// flat SVG with gradient tricks.

function Robot3D({ size = 56 }: { size?: number }) {
    const scale = size / 56;
    return (
        <div
            style={{
                width: size,
                height: size * 1.15,
                perspective: `${size * 5}px`,
                perspectiveOrigin: '50% 40%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                className="robot-3d-scene"
                style={{
                    width: size,
                    height: size * 1.15,
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* ── ANTENNA ─────────────────────────────────────── */}
                <div style={{
                    position: 'absolute',
                    left: '50%', top: 0,
                    transform: `translateX(-50%) translateZ(${4 * scale}px)`,
                    width: 5 * scale, height: 12 * scale,
                    background: 'linear-gradient(180deg,#e0f2fe,#bae6fd)',
                    borderRadius: 3 * scale,
                    boxShadow: `0 -1px ${4 * scale}px rgba(34,211,238,0.4)`,
                }} />
                {/* Antenna tip sphere */}
                <div style={{
                    position: 'absolute',
                    left: '50%', top: 0,
                    transform: `translate(-50%, -40%) translateZ(${6 * scale}px)`,
                    width: 10 * scale, height: 10 * scale,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 30%, #7ffbff, #06b6d4)',
                    boxShadow: `0 0 ${10 * scale}px ${4 * scale}px rgba(34,211,238,0.8)`,
                }} />

                {/* ── HEAD BOX — front face ──────────────────────── */}
                {/* Back face */}
                <div style={{
                    position: 'absolute',
                    top: 10 * scale, left: 5 * scale,
                    width: 46 * scale, height: 30 * scale,
                    background: 'linear-gradient(180deg,#b0cfe8,#8ab0cc)',
                    borderRadius: 10 * scale,
                    transform: `translateZ(${-8 * scale}px)`,
                }} />
                {/* Left side */}
                <div style={{
                    position: 'absolute',
                    top: 10 * scale, left: 5 * scale,
                    width: 8 * scale, height: 30 * scale,
                    background: 'linear-gradient(90deg,#8ab0cc,#a8ccde)',
                    borderRadius: `${10 * scale}px 0 0 ${10 * scale}px`,
                    transform: `rotateY(90deg) translateZ(${5 * scale}px)`,
                    transformOrigin: 'left center',
                }} />
                {/* Right side */}
                <div style={{
                    position: 'absolute',
                    top: 10 * scale, right: 5 * scale,
                    width: 8 * scale, height: 30 * scale,
                    background: 'linear-gradient(90deg,#a8ccde,#8ab0cc)',
                    borderRadius: `0 ${10 * scale}px ${10 * scale}px 0`,
                    transform: `rotateY(-90deg) translateZ(${5 * scale}px)`,
                    transformOrigin: 'right center',
                }} />
                {/* Top face */}
                <div style={{
                    position: 'absolute',
                    top: 10 * scale, left: 5 * scale,
                    width: 46 * scale, height: 8 * scale,
                    background: 'linear-gradient(180deg,#f0f9ff,#dbeafe)',
                    borderRadius: `${10 * scale}px ${10 * scale}px 0 0`,
                    transform: `rotateX(90deg) translateZ(${8 * scale}px)`,
                    transformOrigin: 'bottom center',
                }} />
                {/* Bottom face */}
                <div style={{
                    position: 'absolute',
                    top: 37 * scale, left: 5 * scale,
                    width: 46 * scale, height: 8 * scale,
                    background: '#8ab0cc',
                    transform: `rotateX(-90deg) translateZ(${0}px)`,
                    transformOrigin: 'top center',
                }} />
                {/* FRONT face */}
                <div style={{
                    position: 'absolute',
                    top: 10 * scale, left: 5 * scale,
                    width: 46 * scale, height: 30 * scale,
                    background: 'linear-gradient(160deg,#ffffff 0%,#dbeafe 60%,#bae6fd 100%)',
                    borderRadius: 10 * scale,
                    transform: `translateZ(${8 * scale}px)`,
                    boxShadow: `0 ${2 * scale}px ${12 * scale}px rgba(0,0,0,0.25)`,
                    overflow: 'hidden',
                }}>
                    {/* Gloss highlight */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: '45%',
                        background: 'linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0))',
                        borderRadius: `${10 * scale}px ${10 * scale}px 0 0`,
                    }} />
                    {/* ── VISOR (face screen) ─────────────────────── */}
                    <div style={{
                        position: 'absolute',
                        top: 5 * scale, left: 4 * scale,
                        width: 38 * scale, height: 19 * scale,
                        background: 'linear-gradient(160deg,#0c2a4a,#061220)',
                        borderRadius: 7 * scale,
                        boxShadow: `inset 0 ${2 * scale}px ${6 * scale}px rgba(0,0,0,0.6), 0 0 ${6 * scale}px rgba(34,211,238,0.3)`,
                        overflow: 'hidden',
                    }}>
                        {/* Visor inner glow */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'radial-gradient(ellipse at 50% 100%,rgba(34,211,238,0.15),transparent 70%)',
                        }} />
                        {/* Visor gloss top */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, height: '45%',
                            background: 'linear-gradient(180deg,rgba(255,255,255,0.12),transparent)',
                            borderRadius: `${7 * scale}px ${7 * scale}px 0 0`,
                        }} />
                        {/* Scan line (animated via CSS class) */}
                        <div className="robot-scan" style={{
                            position: 'absolute', left: 0, right: 0,
                            height: 1.5 * scale, background: 'rgba(34,211,238,0.5)',
                        }} />
                        {/* ── Left eye ──────────────────────────────── */}
                        <div className="robot-eye-l" style={{
                            position: 'absolute',
                            top: 4 * scale, left: 6 * scale,
                            width: 10 * scale, height: 8 * scale,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle at 35% 30%,#7ffbff,#06b6d4)',
                            boxShadow: `0 0 ${8 * scale}px ${3 * scale}px rgba(34,211,238,0.9)`,
                        }}>
                            {/* pupil */}
                            <div style={{
                                position: 'absolute', inset: '25%',
                                borderRadius: '50%', background: '#001830',
                            }} />
                            {/* shine */}
                            <div style={{
                                position: 'absolute', top: '10%', left: '15%',
                                width: '28%', height: '28%',
                                borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
                            }} />
                        </div>
                        {/* ── Right eye ─────────────────────────────── */}
                        <div className="robot-eye-r" style={{
                            position: 'absolute',
                            top: 4 * scale, right: 6 * scale,
                            width: 10 * scale, height: 8 * scale,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle at 35% 30%,#7ffbff,#06b6d4)',
                            boxShadow: `0 0 ${8 * scale}px ${3 * scale}px rgba(34,211,238,0.9)`,
                        }}>
                            <div style={{
                                position: 'absolute', inset: '25%',
                                borderRadius: '50%', background: '#001830',
                            }} />
                            <div style={{
                                position: 'absolute', top: '10%', left: '15%',
                                width: '28%', height: '28%',
                                borderRadius: '50%', background: 'rgba(255,255,255,0.9)',
                            }} />
                        </div>
                        {/* ── Smile ──────────────────────────────────── */}
                        <svg
                            width={26 * scale} height={8 * scale}
                            viewBox="0 0 26 8"
                            style={{
                                position: 'absolute',
                                bottom: 3 * scale, left: '50%',
                                transform: 'translateX(-50%)',
                                filter: `drop-shadow(0 0 ${3 * scale}px #22d3ee)`,
                            }}
                        >
                            <path d="M2 2 Q13 9 24 2" stroke="#22d3ee" strokeWidth="2.5"
                                strokeLinecap="round" fill="none" />
                        </svg>
                    </div>
                </div>

                {/* ── NECK ──────────────────────────────────────── */}
                <div style={{
                    position: 'absolute',
                    top: 38 * scale, left: '50%',
                    transform: `translateX(-50%) translateZ(${5 * scale}px)`,
                    width: 14 * scale, height: 9 * scale,
                    background: 'linear-gradient(180deg,#dbeafe,#bae6fd)',
                    borderRadius: 3 * scale,
                    boxShadow: `0 ${2 * scale}px ${4 * scale}px rgba(0,0,0,0.15)`,
                }} />

                {/* ── BODY ─────────────────────────────────────── */}
                {/* Body back */}
                <div style={{
                    position: 'absolute',
                    top: 46 * scale, left: 7 * scale,
                    width: 42 * scale, height: 32 * scale,
                    background: '#8ab0cc',
                    borderRadius: 10 * scale,
                    transform: `translateZ(${-7 * scale}px)`,
                }} />
                {/* Body left side */}
                <div style={{
                    position: 'absolute',
                    top: 46 * scale, left: 7 * scale,
                    width: 7 * scale, height: 32 * scale,
                    background: 'linear-gradient(90deg,#8ab0cc,#a8ccde)',
                    borderRadius: `${10 * scale}px 0 0 ${10 * scale}px`,
                    transform: `rotateY(90deg) translateZ(${7 * scale}px)`,
                    transformOrigin: 'left center',
                }} />
                {/* Body right side */}
                <div style={{
                    position: 'absolute',
                    top: 46 * scale, right: 7 * scale,
                    width: 7 * scale, height: 32 * scale,
                    background: 'linear-gradient(90deg,#a8ccde,#8ab0cc)',
                    borderRadius: `0 ${10 * scale}px ${10 * scale}px 0`,
                    transform: `rotateY(-90deg) translateZ(${7 * scale}px)`,
                    transformOrigin: 'right center',
                }} />
                {/* Body front */}
                <div style={{
                    position: 'absolute',
                    top: 46 * scale, left: 7 * scale,
                    width: 42 * scale, height: 32 * scale,
                    background: 'linear-gradient(160deg,#ffffff 0%,#dbeafe 55%,#bae6fd 100%)',
                    borderRadius: 10 * scale,
                    transform: `translateZ(${7 * scale}px)`,
                    boxShadow: `0 ${3 * scale}px ${14 * scale}px rgba(0,0,0,0.2)`,
                    overflow: 'hidden',
                }}>
                    {/* Gloss */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
                        background: 'linear-gradient(180deg,rgba(255,255,255,0.65),transparent)',
                        borderRadius: `${10 * scale}px ${10 * scale}px 0 0`,
                    }} />
                    {/* Chest accent stripe */}
                    <div style={{
                        position: 'absolute',
                        top: 8 * scale, left: 6 * scale, right: 6 * scale, height: 3 * scale,
                        background: 'linear-gradient(90deg,rgba(34,211,238,0.0),rgba(34,211,238,0.5),rgba(34,211,238,0.0))',
                        borderRadius: 2 * scale,
                    }} />
                    {/* Chest dots row */}
                    {[0, 1, 2].map(i => (
                        <div key={i} style={{
                            position: 'absolute',
                            top: 17 * scale,
                            left: (11 + i * 9) * scale,
                            width: 6 * scale, height: 6 * scale,
                            borderRadius: '50%',
                            background: i === 1 ? 'radial-gradient(circle,#818cf8,#4f46e5)' : 'radial-gradient(circle,#22d3ee,#0891b2)',
                            boxShadow: `0 0 ${5 * scale}px ${i === 1 ? '#818cf8' : '#22d3ee'}`,
                        }} />
                    ))}
                </div>

                {/* ── ARMS ─────────────────────────────────────── */}
                {/* Left arm */}
                <div style={{
                    position: 'absolute',
                    top: 47 * scale, left: -3 * scale,
                    width: 10 * scale, height: 22 * scale,
                    background: 'linear-gradient(180deg,#dbeafe,#bae6fd)',
                    borderRadius: 5 * scale,
                    transform: `translateZ(${4 * scale}px)`,
                    boxShadow: `${-2 * scale}px ${3 * scale}px ${6 * scale}px rgba(0,0,0,0.2)`,
                }} />
                {/* Left hand */}
                <div style={{
                    position: 'absolute',
                    top: 68 * scale, left: -1 * scale,
                    width: 7 * scale, height: 7 * scale,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 30%,#7ffbff,#06b6d4)',
                    transform: `translateZ(${5 * scale}px)`,
                    boxShadow: `0 0 ${8 * scale}px rgba(34,211,238,0.9)`,
                }} />
                {/* Right arm */}
                <div style={{
                    position: 'absolute',
                    top: 47 * scale, right: -3 * scale,
                    width: 10 * scale, height: 22 * scale,
                    background: 'linear-gradient(180deg,#dbeafe,#bae6fd)',
                    borderRadius: 5 * scale,
                    transform: `translateZ(${4 * scale}px)`,
                    boxShadow: `${2 * scale}px ${3 * scale}px ${6 * scale}px rgba(0,0,0,0.2)`,
                }} />
                {/* Right hand */}
                <div style={{
                    position: 'absolute',
                    top: 68 * scale, right: -1 * scale,
                    width: 7 * scale, height: 7 * scale,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 30%,#7ffbff,#06b6d4)',
                    transform: `translateZ(${5 * scale}px)`,
                    boxShadow: `0 0 ${8 * scale}px rgba(34,211,238,0.9)`,
                }} />

                {/* ── Drop shadow on ground ─────────────────────── */}
                <div style={{
                    position: 'absolute',
                    bottom: -4 * scale, left: '50%',
                    transform: 'translateX(-50%) rotateX(90deg)',
                    width: 34 * scale, height: 8 * scale,
                    borderRadius: '50%',
                    background: 'radial-gradient(ellipse,rgba(34,211,238,0.25),transparent 70%)',
                    filter: `blur(${3 * scale}px)`,
                }} />
            </div>
        </div>
    );
}

// ─── Small flat robot for message avatars ─────────────────────────────────────

function RobotMini() {
    return (
        <svg width="20" height="24" viewBox="0 0 56 68" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(0 0 3px rgba(34,211,238,0.6))' }}>
            <defs>
                <linearGradient id="mhg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fff" /><stop offset="100%" stopColor="#dbeafe" />
                </linearGradient>
                <linearGradient id="mbg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f0f9ff" /><stop offset="100%" stopColor="#bae6fd" />
                </linearGradient>
                <radialGradient id="meg" cx="35%" cy="30%" r="65%">
                    <stop offset="0%" stopColor="#7ffbff" /><stop offset="100%" stopColor="#06b6d4" />
                </radialGradient>
            </defs>
            {/* antenna */}
            <rect x="26" y="0" width="4" height="7" rx="2" fill="url(#mhg)" />
            <circle cx="28" cy="0" r="3.5" fill="#22d3ee" style={{ filter: 'drop-shadow(0 0 3px #22d3ee)' }} />
            {/* head */}
            <rect x="4" y="6" width="48" height="24" rx="10" fill="url(#mhg)" />
            <ellipse cx="28" cy="10" rx="16" ry="5" fill="rgba(255,255,255,0.55)" />
            {/* visor */}
            <rect x="8" y="10" width="40" height="16" rx="6" fill="#0c2a4a" />
            <rect x="9" y="11" width="36" height="6" rx="4" fill="rgba(255,255,255,0.1)" />
            {/* eyes */}
            <ellipse cx="18" cy="18" rx="6" ry="5" fill="url(#meg)" style={{ filter: 'drop-shadow(0 0 4px #22d3ee)' }} />
            <ellipse cx="38" cy="18" rx="6" ry="5" fill="url(#meg)" style={{ filter: 'drop-shadow(0 0 4px #22d3ee)' }} />
            <circle cx="20" cy="16" r="1.5" fill="rgba(255,255,255,0.9)" />
            <circle cx="40" cy="16" r="1.5" fill="rgba(255,255,255,0.9)" />
            {/* smile */}
            <path d="M20 24 Q28 30 36 24" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* neck */}
            <rect x="23" y="30" width="10" height="7" rx="3" fill="url(#mhg)" />
            {/* body */}
            <rect x="8" y="36" width="40" height="28" rx="10" fill="url(#mbg)" />
            <ellipse cx="28" cy="40" rx="12" ry="4" fill="rgba(255,255,255,0.5)" />
            <line x1="12" y1="50" x2="44" y2="50" stroke="rgba(34,211,238,0.35)" strokeWidth="2" />
            {/* chest dots */}
            <circle cx="20" cy="56" r="3" fill="#22d3ee" style={{ filter: 'drop-shadow(0 0 3px #22d3ee)' }} />
            <circle cx="28" cy="56" r="3" fill="#818cf8" style={{ filter: 'drop-shadow(0 0 3px #818cf8)' }} />
            <circle cx="36" cy="56" r="3" fill="#22d3ee" style={{ filter: 'drop-shadow(0 0 3px #22d3ee)' }} />
            {/* arms */}
            <rect x="0" y="37" width="8" height="18" rx="4" fill="url(#mbg)" />
            <circle cx="4" cy="57" r="4" fill="#22d3ee" style={{ filter: 'drop-shadow(0 0 4px #22d3ee)' }} />
            <rect x="48" y="37" width="8" height="18" rx="4" fill="url(#mbg)" />
            <circle cx="52" cy="57" r="4" fill="#22d3ee" style={{ filter: 'drop-shadow(0 0 4px #22d3ee)' }} />
        </svg>
    );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

const SendIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
);

const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const MinimizeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
);

// ─── Typing Indicator ──────────────────────────────────────────────────────────

function TypingIndicator() {
    return (
        <div className="flex items-end gap-2 mb-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 flex items-center justify-center overflow-hidden">
                <RobotMini />
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 backdrop-blur-sm">
                <div className="flex gap-1.5 items-center h-4">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
            </div>
        </div>
    );
}

// ─── Message Bubble ────────────────────────────────────────────────────────────

function MessageBubble({ msg }: { msg: ChatMessage }) {
    const isUser = msg.role === 'user';
    return (
        <div className={`flex items-end gap-2 mb-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
            {!isUser && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 flex items-center justify-center overflow-hidden shadow-md shadow-cyan-500/20">
                    <RobotMini />
                </div>
            )}
            <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words ${isUser
                    ? 'bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-br-sm shadow-lg shadow-blue-600/30'
                    : 'bg-white/5 border border-white/10 text-gray-200 rounded-bl-sm backdrop-blur-sm'
                }`}>
                {msg.content}
            </div>
        </div>
    );
}

// ─── Suggested Questions ───────────────────────────────────────────────────────

const SUGGESTIONS = [
    'What services do you offer?',
    'How much does a website cost?',
    'Can you automate my WhatsApp?',
    'Tell me about digital marketing',
];

// ─── Main Chatbot Component ────────────────────────────────────────────────────

export function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => { scrollToBottom(); }, [messages, isLoading, scrollToBottom]);

    useEffect(() => {
        if (isOpen && inputRef.current)
            setTimeout(() => inputRef.current?.focus(), 300);
    }, [isOpen]);

    const handleSend = useCallback(async (text?: string) => {
        const messageText = (text ?? input).trim();
        if (!messageText || isLoading) return;
        const userMsg: ChatMessage = { role: 'user', content: messageText };
        setMessages((prev) => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);
        setShowSuggestions(false);
        const { success, response, error } = await sendChatMessage(messages, messageText);
        setIsLoading(false);
        if (success && response) {
            setMessages((prev) => [...prev, { role: 'model', content: response }]);
        } else {
            setMessages((prev) => [...prev, { role: 'model', content: error ?? 'Something went wrong.' }]);
        }
    }, [input, isLoading, messages]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
    };

    return (
        <>
            <style>{`
        /* ── 3D rocking animation ─────────────────────────── */
        @keyframes robot-rock {
          0%,100% { transform: rotateY(-18deg) rotateX(6deg) rotateZ(-2deg); }
          25%      { transform: rotateY(0deg)  rotateX(4deg) rotateZ(0deg);  }
          50%      { transform: rotateY(18deg) rotateX(6deg) rotateZ(2deg);  }
          75%      { transform: rotateY(0deg)  rotateX(4deg) rotateZ(0deg);  }
        }
        /* ── Float bob ──────────────────────────────────────── */
        @keyframes robot-float {
          0%,100% { transform: translateY(0px);  }
          50%      { transform: translateY(-6px); }
        }
        /* ── Eye blink ──────────────────────────────────────── */
        @keyframes eye-blink {
          0%,88%,100% { transform: scaleY(1);   }
          93%          { transform: scaleY(0.08); }
        }
        /* ── Visor scan line ────────────────────────────────── */
        @keyframes robot-scan {
          0%   { top: 10%; opacity: 0.8; }
          100% { top: 90%; opacity: 0;   }
        }
        /* ── Pulse rings ────────────────────────────────────── */
        @keyframes fab-ring1 {
          0%   { transform: scale(1);    opacity: 0.8; }
          100% { transform: scale(1.9);  opacity: 0;   }
        }
        @keyframes fab-ring2 {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(1.6); opacity: 0;   }
        }
        /* ── Orbit dots ─────────────────────────────────────── */
        @keyframes orbit-cw  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes orbit-ccw { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
        /* ── Chat panel slide up ────────────────────────────── */
        @keyframes panel-in {
          from { opacity:0; transform:translateY(24px) scale(0.95); }
          to   { opacity:1; transform:translateY(0)    scale(1);    }
        }
        /* ── Grid scroll ────────────────────────────────────── */
        @keyframes grid-scroll {
          0%   { background-position:0 0;    }
          100% { background-position:0 40px; }
        }
        /* ── Header gentle sway ─────────────────────────────── */
        @keyframes head-sway {
          0%,100% { transform: rotateY(-10deg) rotateX(4deg); }
          50%      { transform: rotateY(10deg)  rotateX(4deg); }
        }

        .r3d-rock  { animation: robot-rock  4s ease-in-out infinite; }
        .r3d-float { animation: robot-float 3s ease-in-out infinite; }
        .r3d-scene { transform-style: preserve-3d; }
        .eye-blink { animation: eye-blink 4.5s ease-in-out infinite; }
        .robot-scan { animation: robot-scan 2.4s linear infinite; }

        .fab-ring1 {
          position:absolute; inset:-5px; border-radius:50%;
          border:2px solid rgba(34,211,238,0.7);
          animation: fab-ring1 2.1s ease-out infinite;
        }
        .fab-ring2 {
          position:absolute; inset:-10px; border-radius:50%;
          border:1.5px solid rgba(99,102,241,0.45);
          animation: fab-ring2 2.1s ease-out 0.6s infinite;
        }
        .orbit-a {
          position:absolute; inset:0; border-radius:50%;
          animation: orbit-cw 5s linear infinite;
        }
        .orbit-b {
          position:absolute; inset:6px; border-radius:50%;
          animation: orbit-ccw 8s linear infinite;
        }
        .orbit-dot-a {
          position:absolute; top:-3px; left:50%; transform:translateX(-50%);
          width:6px; height:6px; border-radius:50%;
          background:#22d3ee; box-shadow:0 0 8px #22d3ee;
        }
        .orbit-dot-b {
          position:absolute; bottom:-3px; left:50%; transform:translateX(-50%);
          width:5px; height:5px; border-radius:50%;
          background:#818cf8; box-shadow:0 0 6px #818cf8;
        }
        .chat-panel-open { animation: panel-in 0.32s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .chat-grid-bg {
          background-image:
            linear-gradient(rgba(34,211,238,0.04) 1px,transparent 1px),
            linear-gradient(90deg,rgba(34,211,238,0.04) 1px,transparent 1px);
          background-size:20px 20px;
          animation: grid-scroll 3s linear infinite;
        }
        .chat-scrollbar::-webkit-scrollbar { width:4px; }
        .chat-scrollbar::-webkit-scrollbar-track { background:transparent; }
        .chat-scrollbar::-webkit-scrollbar-thumb { background:rgba(99,179,237,0.3); border-radius:4px; }
        .chat-scrollbar::-webkit-scrollbar-thumb:hover { background:rgba(99,179,237,0.6); }
        .chat-input-glow:focus { box-shadow:0 0 0 2px rgba(34,211,238,0.4),0 0 20px rgba(34,211,238,0.2); }
        .chat-send-btn:hover { box-shadow:0 0 16px rgba(34,211,238,0.5); }
        .r3d-head { animation: head-sway 4s ease-in-out infinite; }
      `}</style>

            {/* ── FAB Button ─────────────────────────────────────────────────────────── */}
            <button
                onClick={() => setIsOpen(v => !v)}
                aria-label="Open AI Chat Assistant"
                className="fixed bottom-6 left-6 z-50 flex items-center justify-center focus:outline-none"
                style={{
                    width: 76, height: 76,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 30%, #1a3a6e, #0a0e1c)',
                    boxShadow: '0 0 28px rgba(34,211,238,0.4), 0 6px 24px rgba(0,0,0,0.6)',
                    transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s',
                    position: 'fixed',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.12)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.95)')}
                onMouseUp={e => (e.currentTarget.style.transform = 'scale(1.12)')}
            >
                {/* Pulse rings */}
                {!isOpen && <span className="fab-ring1" />}
                {!isOpen && <span className="fab-ring2" />}

                {/* Orbit dots */}
                {!isOpen && (
                    <>
                        <span className="orbit-a" style={{ position: 'absolute', inset: 0 }}>
                            <span className="orbit-dot-a" />
                        </span>
                        <span className="orbit-b" style={{ position: 'absolute', inset: 6 }}>
                            <span className="orbit-dot-b" />
                        </span>
                    </>
                )}

                {/* Robot / Close */}
                <span style={{
                    position: 'relative', zIndex: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'opacity 0.25s',
                }}>
                    {isOpen
                        ? <span className="text-cyan-300"><CloseIcon /></span>
                        : (
                            // The true-3D rocking + floating robot
                            <span className="r3d-float" style={{ display: 'block' }}>
                                <span className="r3d-scene" style={{ display: 'block' }}>
                                    <span className="r3d-rock" style={{ display: 'block' }}>
                                        <Robot3D size={52} />
                                    </span>
                                </span>
                            </span>
                        )
                    }
                </span>
            </button>

            {/* ── Chat Panel ─────────────────────────────────────────────────────────── */}
            {isOpen && (
                <div
                    className="chat-panel-open fixed bottom-28 left-6 z-50 w-[90vw] sm:w-[400px] flex flex-col overflow-hidden"
                    style={{
                        height: 'min(540px, calc(100vh - 130px))',
                        borderRadius: 20,
                        background: 'rgba(10,14,28,0.93)',
                        border: '1px solid rgba(34,211,238,0.2)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        boxShadow: '0 8px 64px rgba(34,211,238,0.15), 0 2px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(34,211,238,0.1)',
                    }}
                >
                    <div className="absolute inset-0 chat-grid-bg opacity-50 pointer-events-none rounded-[20px]" />

                    {/* ── Header ──────────────────────────────────────────────────────────── */}
                    <div className="relative flex items-center gap-3 px-4 py-3 flex-shrink-0" style={{
                        borderBottom: '1px solid rgba(34,211,238,0.15)',
                        background: 'linear-gradient(135deg,rgba(34,211,238,0.07) 0%,rgba(99,102,241,0.07) 100%)',
                    }}>
                        <div className="relative flex-shrink-0" style={{
                            width: 42, height: 42,
                            borderRadius: '50%',
                            background: 'radial-gradient(circle at 35% 30%,#1e3a5f,#0a0e1c)',
                            boxShadow: '0 0 14px rgba(34,211,238,0.4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            perspective: 220,
                        }}>
                            <span className="r3d-head r3d-scene" style={{ display: 'block' }}>
                                <Robot3D size={34} />
                            </span>
                            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#0a0e1c]"
                                style={{ background: '#22d3ee', boxShadow: '0 0 6px #22d3ee' }} />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-white tracking-wide text-sm">OM AI</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded-full font-medium tracking-widest uppercase"
                                    style={{ background: 'rgba(34,211,238,0.15)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.3)' }}>
                                    Gemini
                                </span>
                            </div>
                            <p className="text-[11px] text-gray-400 truncate">Your digital growth assistant</p>
                        </div>

                        <button onClick={() => setIsOpen(false)}
                            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            aria-label="Close chat">
                            <MinimizeIcon />
                        </button>
                    </div>

                    {/* ── Messages ──────────────────────────────────────────────────────────── */}
                    <div className="relative flex-1 overflow-y-auto p-4 chat-scrollbar">
                        {messages.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-2">
                                <div className="relative mb-2" style={{ perspective: 300 }}>
                                    {/* Orbit ring decoration */}
                                    <div className="orbit-a absolute rounded-full"
                                        style={{ inset: -16, border: '1.5px dashed rgba(34,211,238,0.35)' }} />
                                    <div className="orbit-b absolute rounded-full"
                                        style={{ inset: -8, border: '1px dashed rgba(99,102,241,0.3)' }} />
                                    {/* Glow halo */}
                                    <div className="absolute inset-0 rounded-full" style={{
                                        background: 'radial-gradient(circle,rgba(34,211,238,0.2) 0%,transparent 70%)',
                                        transform: 'scale(1.8)', filter: 'blur(8px)',
                                    }} />
                                    <span className="r3d-float r3d-scene" style={{ display: 'block' }}>
                                        <span className="r3d-rock" style={{ display: 'block' }}>
                                            <Robot3D size={80} />
                                        </span>
                                    </span>
                                </div>
                                <h3 className="text-white font-bold text-lg">Hello! I&apos;m OM AI</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    I can help you explore our digital marketing, web development, and automation services!
                                </p>
                            </div>
                        )}

                        {messages.map((msg, i) => <MessageBubble key={i} msg={msg} />)}
                        {isLoading && <TypingIndicator />}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* ── Suggestions ─────────────────────────────────────────────────────── */}
                    {showSuggestions && messages.length === 0 && (
                        <div className="relative flex-shrink-0 px-4 pb-3 flex flex-wrap gap-2">
                            {SUGGESTIONS.map((s) => (
                                <button key={s} onClick={() => handleSend(s)}
                                    className="text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                                    style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.25)', color: '#a5f3fc' }}>
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* ── Input ───────────────────────────────────────────────────────────── */}
                    <div className="relative flex-shrink-0 px-3 pb-3 pt-2"
                        style={{ borderTop: '1px solid rgba(34,211,238,0.1)' }}>
                        <div className="flex items-end gap-2 rounded-2xl px-3 py-2"
                            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(34,211,238,0.2)' }}>
                            <textarea
                                ref={inputRef}
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask me anything…"
                                rows={1}
                                disabled={isLoading}
                                className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 resize-none outline-none leading-relaxed chat-input-glow transition-all"
                                style={{ maxHeight: 96, minHeight: 24 }}
                                onInput={e => {
                                    const el = e.currentTarget;
                                    el.style.height = 'auto';
                                    el.style.height = Math.min(el.scrollHeight, 96) + 'px';
                                }}
                            />
                            <button
                                onClick={() => handleSend()}
                                disabled={!input.trim() || isLoading}
                                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 chat-send-btn disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                                style={{ background: 'linear-gradient(135deg,#22d3ee,#6366f1)' }}
                                aria-label="Send message">
                                <SendIcon />
                            </button>
                        </div>
                        <p className="text-center text-[10px] text-gray-600 mt-1.5">
                            Powered by Gemini · OM Marketing Solutions
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
