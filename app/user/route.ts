import { db } from "@/app/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    console.log("user hit")
    const data = await req.json();
    console.log(data);
    const [rows] = await db.query("INSERT INTO users (name,email,password) VALUES (?,?,?)", [
        data.name,
        data.email,
        data.password
    ])

    return NextResponse.json({ data })
}

