import { HfInference } from '@huggingface/inference';
const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_KEY || process.env.VITE_HF_ACCESS_KEY);

let SYSTEM_PROMPT=`
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.You Must  Format your response in markdown to make it easier to render to a web page .
`

async function retryRequest(fn, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn();
        } catch (err) {
            if (err.response && err.response.status === 503) {
                console.warn(`Service Unavailable. Retrying in ${delay}ms...`);
            } else if (i === retries - 1) {
                throw err;
            }
            await new Promise(res => setTimeout(res, delay));
        }
    }
}

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await retryRequest(() => hf.chatCompletion({
            model: "mistralai/Mistral-Nemo-Instruct-2407", 

            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        }));
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}
