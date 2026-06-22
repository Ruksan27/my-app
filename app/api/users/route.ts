export async function GET() {
  return Response.json({Hello: "World"});
}
export async function POST() {
  return Response.json(
    {"goodbye": "world"},
    {
         status: 200,
    },
);
}

export async function PUT() {
  return Response.json(
    {"goodbye": "earth"},
    {
         status: 200,
    },
);
}
export  async function DELETE() {
    return Response.json(
        {"goodbye": "universe"},

        {
             status: 200,
        },
    );
}


