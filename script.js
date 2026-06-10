const url = "https://api.api-ninjas.com/v2/randomquotes";
const quoteText = document.querySelector(".quote_text")
const author = document.querySelector(".author")
const btn = document.querySelector("#btn")

quoteText.textContent = "Fetching a new quote...";
author.textContent = "";

async function getQuote(){
    // console.log("fetching quote...")
    const response = await fetch(url, {
        headers: {
            "X-Api-Key": API_KEY
        }
    })

    const data = await response.json();
    console.log(data[0].quote);
    console.log(data[0].author);

    quoteText.textContent = `"${data[0].quote}"`;
    author.textContent = `~ ${data[0].author}`;
}

getQuote()

btn.addEventListener('click', getQuote)