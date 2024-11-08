// utils/getFinancialAdvice.js
import OpenAI from "openai";

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

// Function to fetch user-specific data (mocked for this example)

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD 
      - Expenses: ${totalSpend} USD 
      - Incomes: ${totalIncome} USD
      Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively.
    `;

    // Send the prompt to the OpenAI API
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: userPrompt }],
    });

    // Process and return the response
    const advice = chatCompletion.choices[0].message.content;

    console.log(advice);
    return advice;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
