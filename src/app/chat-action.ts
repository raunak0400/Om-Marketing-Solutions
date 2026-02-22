'use server';

const API_KEY = process.env.GOOGLE_GENAI_API_KEY;

// gemini-2.5-flash — confirmed available with this API key
const MODEL = 'gemini-2.5-flash';
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

Speak in a friendly, professional tone. You can mix Hindi and English (Hinglish is fine). Keep responses concise and helpful. For pricing or project-specific queries, encourage users to contact via WhatsApp: +91 98252 47312.`;

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
                maxOutputTokens: 512,
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

        const text: string =
            data?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

        if (!text) {
            console.error('[OM AI] Empty response from Gemini:', JSON.stringify(data));
            return { success: false, error: 'No response from AI. Please try again.' };
        }

        return { success: true, response: text };
    } catch (err) {
        console.error('[OM AI] Fetch error:', err);
        return { success: false, error: 'Network error reaching AI. Please check your connection.' };
    }
}
