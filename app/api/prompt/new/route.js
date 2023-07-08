import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
    // extract date that was passed through the POST request
    const { prompt, userId, tag } = await req.json();

    try {
        // we call this function every time because our db isn't connected constantly
        // it will go in peace after some work
        await connectToDB();

        // creates a new DB according to the schema
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        // save in DB
        await newPrompt.save();

        return new Response (JSON.stringify(newPrompt), {
            status: 201,
        });
    } catch (error) {
        return new Response ("Failed to create a new prompt", {
            status: 500
        });
    }

}