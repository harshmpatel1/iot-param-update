// const BACKEND =
//   process.env.NODE_ENV === "development"
//     ? "http://localhost:3001"
//     : "http://eastmanone.com:3001";
    const BACKEND = "http://eastmanone.com:3001";

export async function POST(request) {
  const {
    filename,
    url,
    port,
    macId,
    inv,
    type
  } = await request.json();

  console.log("type is for write ", type)

  const variables = inv
    ? [
        {
          variable: "OTA_FILE",
          value: filename,
        },
      ]
    : [
        {
          variable: "FILE_NAME",
          value: filename,
        },
        {
          variable: "HTTP_URL",
          value: url,
        },
        {
          variable: "HTTP_PORT",
          value: port,
        },
      ];

  try {
    const res = await fetch(`${BACKEND}/process-variables`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        macId,
        variables,
        type
      }),
    });

    const data = await res.json();

    return Response.json({
      success: data.success,
      filename,
      ...(inv
        ? {}
        : {
            url,
            port,
          }),
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Failed to write variables",
      },
      {
        status: 500,
      }
    );
  }
}