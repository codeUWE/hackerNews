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
				console.log(response.data.hits);
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
			<div className="sectionHero">
				<h1>Welcome here</h1>
				<p>Scroll down to learn more about Tech!</p>
			</div>
			<div className="bodyNews">
				{results.map((newsItem) => {
					return (
						<NewsArticle
							key={results.story_id}
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
