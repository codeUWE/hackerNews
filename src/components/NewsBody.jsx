import newsData from "./newsData.json"
import NewsArticle from "./NewsArticle"

export default function NewsBody() {
console.log(newsData)
    return (
        <div className="bodyNews">
            <div>
                {newsData.hits.map((newsItem) => {
                return <NewsArticle key={newsData.id} title={newsItem.title} author={newsItem.author} url={newsItem.url}/> })}
            </div>
        </div>
    )
}