import { Resend } from "resend";
import { NextResponse, NextRequest } from "next/server";
import { WelcomeTemplate } from "@/templates/welcome";

type ContactForm = {
    name: string;
    email: string;
    message: string;
};
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
    const body: ContactForm = await req.json();
    try {
        console.log(body);
        const data = await resend.emails.send({
            from: "Netcraft <onboarding@resend.dev>",
            to: [body.email],
            subject: "We have received your message!",
            text: `We have received your message, ${body.name}! We will get back to you as soon as possible.`,
            react: WelcomeTemplate({ name: body.name }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
