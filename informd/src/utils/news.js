const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";

export async function getNews() {
    let news = await fetch(url).then(response => response.json());
    return news.articles;
}