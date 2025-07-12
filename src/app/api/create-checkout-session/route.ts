import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

export async function POST(req: NextRequest) {
  const { courseName, price, currency } = await req.json();
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: currency || "usd",
            product_data: {
              name: courseName,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/thankyou`,
      cancel_url: `${req.nextUrl.origin}/enroll?course=${encodeURIComponent(courseName)}`,
    });
    return NextResponse.json({ url: session.url });
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
