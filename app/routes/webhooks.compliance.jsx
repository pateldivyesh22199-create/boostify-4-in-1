import { authenticate } from "../shopify.server";

export const action = async ({ request }) => {
  // આ લાઈન આપમેળે Shopify ની અસલ HMAC Signature સિક્યોરિટી વેરિફાઈ કરશે!
  const { topic, shop, payload } = await authenticate.webhook(request);

  console.log(`Received mandatory compliance webhook: ${topic} for ${shop}`);

  // Shopify ને ફરજિયાત 200 OK રિસ્પોન્સ આપવો પડે
  return new Response(null, { status: 200 });
};