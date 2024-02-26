

export default function NewsArticle({title, author, url}) {

    return (
            <div className="cardNews">
                <div className="titleNews">
                    <h4 className="newsTitle">{title}</h4>
                    <p className="newsAuthor"> - {author}</p>
                </div>
                <button><a href={url} target="_blank">Show it!</a></button>
            </div>
    )
}