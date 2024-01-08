import { Stripe } from "stripe";
const DOMAIN = process.env.DOMAIN || "http://localhost:3000";
export async function POST(req: Request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
    const body = await req.json();
    const session = await stripe.checkout.sessions.create({
        billing_address_collection: "auto",
        line_items: [
            {
                price: body?.lookup_key,
                // For metered billing, do not pass quantity
                quantity: 1,
            },
        ],
        mode: "subscription",
        success_url: `${DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${DOMAIN}?canceled=true`,
    });

    return Response.json({ url: session.url }, { status: 201 });
}
