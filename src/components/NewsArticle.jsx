export default function NewsArticle({ title, author, url }) {
	return (
		<div className="cardNews">
			<h4 className="newsTitle">{title}</h4>
			<p className="newsAuthor"> - {author}</p>
			<button>
				<a href={url} target="_blank">
					Show it!
				</a>
			</button>
		</div>
	);
}
