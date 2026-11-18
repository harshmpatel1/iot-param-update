// const BACKEND =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:3001"
//     : "http://eastmanone.com:3001";
const BACKEND = "http://eastmanone.com:3001";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  console.log("searchParams", searchParams);

  const macId = searchParams.get("macId");
  const type = searchParams.get("type");
  console.log("type is", type);
  const isInv = searchParams.get("inv") === "true";

  try {
    const variables = isInv
      ? [{ variable: "OTA_FILE" }]
      : [
          { variable: "FILE_NAME" },
          { variable: "HTTP_URL" },
          { variable: "HTTP_PORT" },
        ];

     

    const res = await fetch(`${BACKEND}/process-variables`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        macId,
        type,
        variables,
      }),
    });

    const data = await res.json();

    const result = {};

    for (const d of data.details ?? []) {
      if (d.status === "success") {
        Object.assign(result, d.response);
      }
    }

    if (isInv) {
      return Response.json({
        filename: result.OTA_FILE ?? "",
      });
    }

    return Response.json({
      filename: result.FILE_NAME ?? "",
      url: result.HTTP_URL ?? "",
      port: result.HTTP_PORT ?? "",
    });
  } catch (err) {
    console.error(err);

    return Response.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}