import { NextResponse } from "next/server";
import addToSheet from "../../utils/googleSheetsService";

export const POST = async (request: Request) => {
  try {
    const data = await request.json(); // Correct way to access request body

    console.log(data);

    await addToSheet(data);

    return new NextResponse(
      JSON.stringify({ message: "Data added successfully!" }),
      { status: 201 } // 201: Created
    );
  } catch (error: any) {
    console.error("Error adding data:", error);
    return new NextResponse(
      JSON.stringify({ message: error.message || "An error occurred." }),
      { status: 500 } // 500: Internal Server Error
    );
  }
};
