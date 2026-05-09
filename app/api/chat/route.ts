import { NextRequest, NextResponse } from "next/server";
import { openRouter, OPENROUTER_AI_MODEL } from "@/lib/openrouter";



export async function POST(req: NextRequest) {
    const { message } = await req.json();

    const response = await openRouter.chat.completions.create({
        model: OPENROUTER_AI_MODEL!,
        messages: [{
            role: "user",
            content: message
        }],
    });

    const reply = response.choices[0].message.content;
    return NextResponse.json({ reply });
}