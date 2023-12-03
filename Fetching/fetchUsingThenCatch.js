// fetch the word of the day using 'then' and 'catch'

fetch("https://words.dev-apis.com/word-of-the-day?random=1")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error fetching: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const wordOfTheDay = data.word;
    console.log(wordOfTheDay);
  })
  .catch((error) => {
    console.error(error);
  });