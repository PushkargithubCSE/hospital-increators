export async function POST(req) {
  const data = await req.json();
  if (!data.email) return Response.json({ error: "Email is required" }, { status: 400 });
  // TODO: send to your CRM / email / Google Sheet here
  console.log("New consultation request:", data);
  return Response.json({ ok: true });
}
