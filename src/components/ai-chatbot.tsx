'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { sendChatMessage, type ChatMessage } from '@/app/chat-action';

// ─── Icons ───────────────────────────────────────────────────────────────────

const BotIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.499.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.499.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
);

const SparkleIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
);

const SendIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
    </svg>
);

const CloseIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

const MinimizeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
);

// ─── Typing Indicator ─────────────────────────────────────────────────────────

function TypingIndicator() {
    return (
        <div className="flex items-end gap-2 mb-3">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <BotIcon />
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

// ─── Message Bubble ───────────────────────────────────────────────────────────

function MessageBubble({ msg }: { msg: ChatMessage }) {
    const isUser = msg.role === 'user';
    return (
        <div className={`flex items-end gap-2 mb-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
            {!isUser && (
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <BotIcon />
                </div>
            )}
            <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap break-words ${isUser
                        ? 'bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-br-sm shadow-lg shadow-blue-600/30'
                        : 'bg-white/5 border border-white/10 text-gray-200 rounded-bl-sm backdrop-blur-sm'
                    }`}
            >
                {msg.content}
            </div>
        </div>
    );
}

// ─── Suggested Questions ──────────────────────────────────────────────────────

const SUGGESTIONS = [
    'What services do you offer?',
    'How much does a website cost?',
    'Can you automate my WhatsApp?',
    'Tell me about digital marketing',
];

// ─── Main Chatbot Component ───────────────────────────────────────────────────

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

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading, scrollToBottom]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const handleSend = useCallback(
        async (text?: string) => {
            const messageText = (text ?? input).trim();
            if (!messageText || isLoading) return;

            const userMsg: ChatMessage = { role: 'user', content: messageText };
            const updatedHistory = [...messages, userMsg];
            setMessages(updatedHistory);
            setInput('');
            setIsLoading(true);
            setShowSuggestions(false);

            const { success, response, error } = await sendChatMessage(messages, messageText);

            setIsLoading(false);
            if (success && response) {
                setMessages((prev) => [...prev, { role: 'model', content: response }]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    { role: 'model', content: error ?? 'Something went wrong. Please try again.' },
                ]);
            }
        },
        [input, isLoading, messages]
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* ── Styles ─────────────────────────────────────────────────────────── */}
            <style>{`
        @keyframes chat-fab-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,211,238,0.4), 0 0 20px rgba(34,211,238,0.3); }
          50% { box-shadow: 0 0 0 12px rgba(34,211,238,0), 0 0 40px rgba(34,211,238,0.5); }
        }
        @keyframes chat-panel-in {
          from { opacity: 0; transform: translateY(24px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes chat-panel-out {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(24px) scale(0.95); }
        }
        .chat-fab-pulse { animation: chat-fab-pulse 2.5s ease-in-out infinite; }
        .chat-panel-open { animation: chat-panel-in 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .chat-panel-close { animation: chat-panel-out 0.2s ease-in forwards; }
        .chat-scrollbar::-webkit-scrollbar { width: 4px; }
        .chat-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .chat-scrollbar::-webkit-scrollbar-thumb { background: rgba(99,179,237,0.3); border-radius: 4px; }
        .chat-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(99,179,237,0.6); }
        .chat-input-glow:focus { box-shadow: 0 0 0 2px rgba(34,211,238,0.4), 0 0 20px rgba(34,211,238,0.2); }
        .chat-send-btn:hover { box-shadow: 0 0 16px rgba(34,211,238,0.5); }
        @keyframes grid-scan {
          0% { background-position: 0 0; }
          100% { background-position: 0 40px; }
        }
        .chat-grid-bg {
          background-image: linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px);
          background-size: 20px 20px;
          animation: grid-scan 3s linear infinite;
        }
      `}</style>

            {/* ── Floating Action Button ─────────────────────────────────────────── */}
            <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label="Open AI Chat Assistant"
                className={`fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full flex items-center justify-center
          bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600
          text-white transition-transform duration-300 hover:scale-110 active:scale-95
          ${!isOpen ? 'chat-fab-pulse' : ''}
          ${isOpen ? 'rotate-[360deg] scale-90' : ''}`}
                style={{ transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s' }}
            >
                {isOpen ? <CloseIcon /> : <SparkleIcon />}
            </button>

            {/* ── Chat Panel ────────────────────────────────────────────────────── */}
            {isOpen && (
                <div
                    className="chat-panel-open fixed bottom-24 left-6 z-50 w-[90vw] sm:w-[400px] flex flex-col overflow-hidden"
                    style={{
                        height: 'min(540px, calc(100vh - 120px))',
                        borderRadius: '20px',
                        background: 'rgba(10, 14, 28, 0.92)',
                        border: '1px solid rgba(34,211,238,0.2)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        boxShadow: '0 8px 64px rgba(34,211,238,0.15), 0 2px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(34,211,238,0.1)',
                    }}
                >
                    {/* Decorative grid overlay */}
                    <div className="absolute inset-0 chat-grid-bg opacity-60 pointer-events-none rounded-[20px]" />

                    {/* Header */}
                    <div
                        className="relative flex items-center gap-3 px-4 py-3 flex-shrink-0"
                        style={{
                            borderBottom: '1px solid rgba(34,211,238,0.15)',
                            background: 'linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(99,102,241,0.08) 100%)',
                        }}
                    >
                        {/* Bot Avatar */}
                        <div className="relative flex-shrink-0">
                            <div
                                className="w-9 h-9 rounded-full flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)',
                                    boxShadow: '0 0 16px rgba(34,211,238,0.5)',
                                }}
                            >
                                <SparkleIcon />
                            </div>
                            <span
                                className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-[#0a0e1c]"
                                style={{ background: '#22d3ee', boxShadow: '0 0 6px #22d3ee' }}
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-white tracking-wide text-sm">OM AI</span>
                                <span
                                    className="text-[10px] px-1.5 py-0.5 rounded-full font-medium tracking-widest uppercase"
                                    style={{
                                        background: 'rgba(34,211,238,0.15)',
                                        color: '#22d3ee',
                                        border: '1px solid rgba(34,211,238,0.3)',
                                    }}
                                >
                                    Gemini
                                </span>
                            </div>
                            <p className="text-[11px] text-gray-400 truncate">Your digital growth assistant</p>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            aria-label="Close chat"
                        >
                            <MinimizeIcon />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="relative flex-1 overflow-y-auto p-4 chat-scrollbar">
                        {/* Welcome state */}
                        {messages.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-2">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mb-1"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(99,102,241,0.15))',
                                        border: '1px solid rgba(34,211,238,0.3)',
                                        boxShadow: '0 0 32px rgba(34,211,238,0.2)',
                                    }}
                                >
                                    <SparkleIcon />
                                </div>
                                <h3 className="text-white font-bold text-lg">Hello! I&apos;m OM AI</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    I can help you explore our digital marketing, web development, and automation services!
                                </p>
                            </div>
                        )}

                        {/* Message list */}
                        {messages.map((msg, i) => (
                            <MessageBubble key={i} msg={msg} />
                        ))}

                        {isLoading && <TypingIndicator />}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestions */}
                    {showSuggestions && messages.length === 0 && (
                        <div className="relative flex-shrink-0 px-4 pb-3 flex flex-wrap gap-2">
                            {SUGGESTIONS.map((s) => (
                                <button
                                    key={s}
                                    onClick={() => handleSend(s)}
                                    className="text-xs px-3 py-1.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                                    style={{
                                        background: 'rgba(34,211,238,0.08)',
                                        border: '1px solid rgba(34,211,238,0.25)',
                                        color: '#a5f3fc',
                                    }}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input Area */}
                    <div
                        className="relative flex-shrink-0 px-3 pb-3 pt-2"
                        style={{ borderTop: '1px solid rgba(34,211,238,0.1)' }}
                    >
                        <div
                            className="flex items-end gap-2 rounded-2xl px-3 py-2"
                            style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(34,211,238,0.2)',
                            }}
                        >
                            <textarea
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask me anything…"
                                rows={1}
                                disabled={isLoading}
                                className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 resize-none outline-none leading-relaxed chat-input-glow transition-all"
                                style={{ maxHeight: '96px', minHeight: '24px' }}
                                onInput={(e) => {
                                    const el = e.currentTarget;
                                    el.style.height = 'auto';
                                    el.style.height = Math.min(el.scrollHeight, 96) + 'px';
                                }}
                            />
                            <button
                                onClick={() => handleSend()}
                                disabled={!input.trim() || isLoading}
                                className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 chat-send-btn disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                                style={{
                                    background: 'linear-gradient(135deg, #22d3ee, #6366f1)',
                                }}
                                aria-label="Send message"
                            >
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
