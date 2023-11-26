import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request){
try {
    const body = await req.json();
    const {model, date,  quantity, license,comments} = body

    const newBatch = await db.batch.create({
        data:{
            model, 
            date,  
            quantity, 
            license,
            comments
        }
    })

    return NextResponse.json({batch: newBatch, message:"Batch created successfully"},{status:201});
} catch (error) {
     return NextResponse.json({message:"something went wrong"},{status:500});
}
}