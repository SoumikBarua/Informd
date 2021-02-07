const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ab809e49e19143dba9b9f8157eac256f";

export async function getNews() {
    let news = await fetch(url).then(response => response.json());
    return news.articles;
}