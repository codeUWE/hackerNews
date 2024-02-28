import NewsArticle from './NewsArticle';
import { SearchBar } from './SearchBar';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function NewsBody() {
	const [results, setResults] = useState([]);
	const getArticles = () => {
		axios
			.get('http://hn.algolia.com/api/v1/search?query=')
			.then((response) => {
				setResults(response.data.hits);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		getArticles();
	}, []);

	return (
		<>
			<div className="bodyNews">
				{results.map((newsItem) => {
					return (
						<NewsArticle
							key={results.id}
							title={newsItem.title}
							author={newsItem.author}
							url={newsItem.url}
						/>
					);
				})}
			</div>
			<div className="searchBarContainer">
				<SearchBar setResults={setResults} />
			</div>
		</>
	);
}
