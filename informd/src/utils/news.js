const endpoint = "https://newsapi.org/v2/top-headlines?country=us&pageSize=50";
const apikey = "&apiKey=";
export async function getNews(category) {
    var url = "";

    if(category !== "default"){
        url = endpoint + `&category=${category}` + apikey;
    }
    else{
        url = endpoint + apikey;
    }

    let news = await fetch(url).then(response => response.json());
    return news.articles;
}


export async function searchNews(searchInput) {
    var url = `https://newsapi.org/v2/everything?q=${searchInput}&pageSize=50` + apikey;

    let news = await fetch(url).then(response => response.json());
    return news.articles;
}