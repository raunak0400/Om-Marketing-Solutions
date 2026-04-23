'use server';

const API_KEY = process.env.GOOGLE_GENAI_API_KEY;

// gemini-2.5-flash — confirmed available with this API key
const MODEL = 'gemini-1.5-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

export interface ChatMessage {
    role: 'user' | 'model';
    content: string;
}

const SYSTEM_INSTRUCTION = `You are OM AI, the intelligent assistant for OM Marketing Solutions — a digital agency helping Indian SMEs (small and medium businesses) modernize their traditional businesses with affordable digital solutions.

Your expertise covers:
- Website design & development (modern, responsive, affordable)
- WhatsApp Business automation & chatbots
- Digital marketing (SEO, social media, Google Ads)
- Inventory management systems
- Business automation & workflow optimization
- E-commerce solutions

Speak in a friendly, professional tone. You can mix Hindi and English (Hinglish is fine). Keep responses concise and helpful. For pricing or project-specific queries, encourage users to contact via WhatsApp: +91 98252 47312.

IMPORTANT: Always write complete, finished responses. Never cut off a sentence, list, or explanation mid-way. Every response must have a clear beginning and a clear ending.

FORMATTING: Never use markdown formatting — no asterisks, no bold, no italics, no bullet dashes, no hashtags, no backticks. Write in plain text only. Use numbered lists (1. 2. 3.) or bullet points with • if needed.`;

export async function sendChatMessage(
    history: ChatMessage[],
    userMessage: string
): Promise<{ success: boolean; response?: string; error?: string }> {
    if (!API_KEY) {
        console.error('[OM AI] GOOGLE_GENAI_API_KEY is not set in environment');
        return { success: false, error: 'API key not configured on the server.' };
    }

    try {
        const contents = [
            ...history.map((msg) => ({
                role: msg.role,
                parts: [{ text: msg.content }],
            })),
            {
                role: 'user' as const,
                parts: [{ text: userMessage }],
            },
        ];

        const body = {
            system_instruction: {
                parts: [{ text: SYSTEM_INSTRUCTION }],
            },
            contents,
            generationConfig: {
                maxOutputTokens: 2048,
                temperature: 0.7,
            },
        };

        const res = await fetch(GEMINI_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const data = await res.json();

        if (!res.ok) {
            console.error('[OM AI] Gemini API error response:', JSON.stringify(data));
            const apiMsg = data?.error?.message ?? 'Unknown API error';
            return { success: false, error: `API error: ${apiMsg}` };
        }

        const raw: string =
            data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

        if (!raw) {
            console.error('[OM AI] Empty response from Gemini:', JSON.stringify(data));
            return { success: false, error: 'No response from AI. Please try again.' };
        }

        const text = raw
            .replace(/\*\*(.*?)\*\*/g, '$1')   // **bold**
            .replace(/\*(.*?)\*/g, '$1')         // *italic*
            .replace(/__(.*?)__/g, '$1')         // __bold__
            .replace(/_(.*?)_/g, '$1')           // _italic_
            .replace(/`{1,3}(.*?)`{1,3}/g, '$1') // `code` / ```code```
            .replace(/^#{1,6}\s+/gm, '')         // # headings
            .replace(/^\s*[-*+]\s+/gm, '• ')     // - bullets → •
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'); // [link](url) → text

        return { success: true, response: text };
    } catch (err) {
        console.error('[OM AI] Fetch error:', err);
        return { success: false, error: 'Network error reaching AI. Please check your connection.' };
    }
}
