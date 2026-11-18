// const BACKEND = "http://localhost:3001" || "http://eastmanone.com:3001";

const BACKEND = "http://eastmanone.com:3001";
export async function POST(request) {
  const { macId, startCommand, inv, type } = await request.json();

  const variable = inv
    ? startCommand // "1OTA" or "2OTA"
    : "START_FOTA";

  const res = await fetch(`${BACKEND}/process-variables`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      macId,
      type,
      variables: [
        {
          variable,
          value: "1",
        },
      ],
    }),
  });

  const data = await res.json();

  return Response.json({
    success: data.success,
  });
}