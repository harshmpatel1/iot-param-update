import { NextResponse } from "next/server";
const { executeQuery } = require("@/lib/db");

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const macId = searchParams.get("macId");
    console.log("MAC FROM FRONTEND:", macId);

    if (!macId) {
      return NextResponse.json({
        success: false,
        message: "MAC ID required",
      });
    }

    const query = `
      SELECT TOP (1)
        [INVMSTRFWVR],
        [MODSOFTVER],
        [server_datetime]
      FROM [eastmenone].[dbo].[EastmenGTILAlloggerData]
      WHERE [MAC] = @mac
      ORDER BY [server_datetime] DESC
    `;

    const result = await executeQuery(query, {
      mac: macId,
    });

    if (!result.length) {
      return NextResponse.json({
        success: false,
        message: "No data found",
      });
    }

    return NextResponse.json({
      success: true,
      firmware: result[0],
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Server error",
    });
  }
}