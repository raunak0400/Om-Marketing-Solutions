'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const videoDemos = [
  {
    id: 'calling-agent',
    title: 'AI Calling Agent',
    description:
      'Intelligent voice AI that handles customer calls with natural conversations, appointment scheduling, and real-time information retrieval.',
    videoUrl: '/calling-agent.mp4',
    thumbnailUrl: '/ai-calling-agent.jpg',
    gradient: 'from-blue-500 to-cyan-500',
    tags: ['Voice AI', 'NLP', 'Twilio', 'Real-time'],
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    description:
      'Smart conversational AI chatbot with context awareness, multi-language support, and seamless integration with your business systems.',
    videoUrl: '/ai-chatbot.mp4',
    thumbnailUrl: '/ai-chat.jpg',
    gradient: 'from-purple-500 to-pink-500',
    tags: ['GPT-4', 'React', 'WebSocket', 'MongoDB'],
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Automation',
    description:
      'Automated WhatsApp messaging system for customer engagement, order updates, and marketing campaigns with rich media support.',
    videoUrl: '/whatsapp-automation.mp4',
    thumbnailUrl: '/whatsup.jpeg',
    gradient: 'from-green-500 to-emerald-500',
    tags: ['WhatsApp API', 'Automation', 'CRM', 'Analytics'],
  },
];

function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-7xl flex flex-col items-center justify-center">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-50"
          aria-label={`Close ${title} video`}
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

export function VideoDemos() {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Live Demos
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              See our AI automation solutions in action. Click any demo to watch
              the full video.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videoDemos.map((demo, index) => (
              <div
                key={demo.id}
                className={`group relative overflow-hidden rounded-xl bg-card border border-border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up stagger-${index + 1}`}
                onClick={() =>
                  setSelectedVideo({ url: demo.videoUrl, title: demo.title })
                }
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={demo.thumbnailUrl}
                    alt={demo.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="scale-0 group-hover:scale-100 transition-transform duration-300">
                      <div className="bg-white/90 rounded-full p-4">
                        <Play className="h-8 w-8 text-black fill-black" />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${demo.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {demo.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {demo.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${demo.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}
    </>
  );
}
