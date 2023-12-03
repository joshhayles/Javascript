// fetch the word of the day using Async / Await

async function fetchWordOfTheDay() {
  try {
    const response = await fetch(
      "https://words.dev-apis.com/word-of-the-day?random=1"
    );
    if (!response.ok) {
      throw new Error(`Error fetching: ${response.status}`);
    }
    const data = await response.json();
    const wordOfTheDay = data.word;
    console.log(wordOfTheDay);
  } catch (error) {
    console.error(error);
  }

}

fetchWordOfTheDay();