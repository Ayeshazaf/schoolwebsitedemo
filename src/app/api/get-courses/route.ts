import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

export async function GET() {
  try {
    const products = await stripe.products.list({
      active: true,
      limit: 12,
      expand: ["data.default_price"],
    });
    // For each product, fetch its default price
    const productsWithPrice = await Promise.all(
      products.data.map(async (product) => {
        let default_price = null;
        if (product.default_price) {
          default_price = typeof product.default_price === "string"
            ? await stripe.prices.retrieve(product.default_price)
            : product.default_price;
        }
        return {
          id: product.id,
          name: product.name,
          description: product.description,
          default_price,
        };
      })
    );
    return NextResponse.json({ products: productsWithPrice });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
