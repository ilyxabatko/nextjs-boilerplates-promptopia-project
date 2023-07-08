import { Schema, model, models } from "mongoose"; 

const PromptSchema = new Schema({
    creator: {
        // basically, a creator is a document in the database, a user type more specifically
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    prompt: {
        type: String,
        required: [true, "Prompt is required."],
    },
    tag: {
        type: String,
        required: [true, "Tag is required."],
    }
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;