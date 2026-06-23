import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET (req: NextRequest){
    const cookie_get = req.cookies.get("hello")
    const cookie = await cookies()
    cookie.set("hello","ruksan")
    return Response.json({message: "hello world"});

}


export async function POST() {
  return Response.json(
    {"goodbye": "world"},
    {
         status: 200,
    },
);
}
