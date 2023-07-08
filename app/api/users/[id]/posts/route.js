import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
    try {
        // we call this function every time because our db isn't connected constantly
        // it will go in peace after some work
        await connectToDB();

        // finds all the posts
        const prompts = await Prompt.find({
            creator: params.id,
        }).populate("creator");

        return new Response(JSON.stringify(prompts), {
            status: 201,
        });
    } catch (error) {
        return new Response("Failed to fetch all prompts", {
            status: 500
        });
    }
}