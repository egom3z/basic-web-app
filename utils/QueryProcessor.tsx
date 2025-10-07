export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  
  if (query.toLowerCase().includes("andrew")) {
    return (
      "exg"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Rohan";
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const maxNumber = Math.max(...numbers.map(Number));
      return maxNumber.toString();
    }
  }

  // Handle addition queries like "What is 32 plus 34?"
  const additionMatch = query.match(/what is (\d+) plus (\d+)/i);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1]);
    const num2 = parseInt(additionMatch[2]);
    return (num1 + num2).toString();
  }

  return "";
}
