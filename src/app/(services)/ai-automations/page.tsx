'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Phone, MessageSquare, Send, Play, X } from 'lucide-react';
import Image from 'next/image';
import { ContactSection } from '@/components/contact-section';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const features = [
    '24/7 AI-powered customer support chatbots.',
    'WhatsApp, email, and SMS automation.',
    'Intelligent lead qualification and routing.',
    'Automated data entry and processing.',
    'Natural language processing for better engagement.',
    'Integration with CRM and business tools.',
];

const aiImage = PlaceHolderImages.find(
    (img) => img.id === 'service-integrations'
);

const videoDemos = [
    {
        id: 'calling-agent',
        title: 'AI Calling Agent',
        description: 'Intelligent voice AI that handles customer calls with natural conversations, appointment scheduling, and real-time information retrieval.',
        videoUrl: '/calling-agent.mp4',
        thumbnailUrl: '/ai-calling-agent.jpg',
        icon: Phone,
        gradient: 'from-blue-500 to-cyan-500',
        tags: ['Voice AI', 'NLP', 'Twilio', 'Real-time'],
    },
    {
        id: 'ai-chatbot',
        title: 'AI Chatbot',
        description: 'Smart conversational AI chatbot with context awareness, multi-language support, and seamless integration with your business systems.',
        videoUrl: '/ai-chatbot.mp4',
        thumbnailUrl: '/ai-chat.jpg',
        icon: MessageSquare,
        gradient: 'from-purple-500 to-pink-500',
        tags: ['GPT-4', 'React', 'WebSocket', 'MongoDB'],
    },
    {
        id: 'whatsapp-automation',
        title: 'WhatsApp Automation',
        description: 'Automated WhatsApp messaging system for customer engagement, order updates, and marketing campaigns with rich media support.',
        videoUrl: '/whatsapp-automation.mp4',
        thumbnailUrl: '/whatsup.jpeg',
        icon: Send,
        gradient: 'from-green-500 to-emerald-500',
        tags: ['WhatsApp API', 'Automation', 'CRM', 'Analytics'],
    },
];

function VideoModal({ isOpen, onClose, videoUrl, title }: { isOpen: boolean; onClose: () => void; videoUrl: string; title: string }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-300 p-4"
            onClick={onClose}
        >
            <div className="relative w-full max-w-7xl flex flex-col items-center justify-center animate-in zoom-in-95 duration-300">
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-50"
                >
                    <X className="h-8 w-8" />
                </button>
                <div className="relative w-full flex items-center justify-center rounded-lg overflow-hidden shadow-2xl">
                    <video
                        src={videoUrl}
                        controls
                        autoPlay
                        className="max-w-full max-h-[85vh] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default function AIAutomationsPage() {
    const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

    return (
        <>
            <section className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="animate-fade-in">
                        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
                            AI Automation Solutions
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                            Transform your business with intelligent automation powered by AI. Streamline operations, enhance customer engagement, and boost productivity with our cutting-edge automation solutions.
                        </p>
                        <ul className="mt-8 space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className={`flex items-start animate-slide-in-left stagger-${index + 1}`}>
                                    <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {aiImage && (
                        <div className="flex items-center justify-center relative">
                            {/* Glow effect - Violet/Purple */}
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 opacity-20 blur-3xl animate-image-glow" />

                            <div className="relative animate-fade-in-up">
                                <Image
                                    src={aiImage.imageUrl}
                                    alt="AI Automations"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                                    data-ai-hint="ai automation"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Live Demos Section */}
            <section className="container py-16 md:py-24 bg-muted/30">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Live Demos
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        See our AI automation solutions in action. Click on any demo to watch the full video.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videoDemos.map((demo, index) => {
                        const Icon = demo.icon;
                        return (
                            <div
                                key={demo.id}
                                className={`group relative overflow-hidden rounded-xl bg-card border cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up stagger-${index + 1}`}
                                onClick={() => setSelectedVideo({ url: demo.videoUrl, title: demo.title })}
                            >
                                {/* Thumbnail Image */}
                                <div className={`relative h-48 overflow-hidden`}>
                                    {/* Background Image */}
                                    <Image
                                        src={demo.thumbnailUrl}
                                        alt={demo.title}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black/20" />

                                    {/* Play button overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                        <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                            <div className="bg-white/90 rounded-full p-4">
                                                <Play className="h-8 w-8 text-black fill-black" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Glow effect on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {demo.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                        {demo.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {demo.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom accent line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${demo.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Video Modal */}
            {selectedVideo && (
                <VideoModal
                    isOpen={!!selectedVideo}
                    onClose={() => setSelectedVideo(null)}
                    videoUrl={selectedVideo.url}
                    title={selectedVideo.title}
                />
            )}

            <ContactSection />
        </>
    );
}
