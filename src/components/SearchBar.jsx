import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

export const SearchBar = ({ setResults }) => {
	const [input, setInput] = useState('');

	const fetchData = (value) => {
		axios
			.get(`http://hn.algolia.com/api/v1/search?query=${value}`)
			.then((response) => {
				setResults(response.data.hits);
				console.log(response.data.hits);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	const handleChange = (value) => {
		setInput(value);
	};
	const handleClick = () => {
		fetchData(input);
	};
	return (
		<div className="inputWrapper">
			<input
				id="searchInput"
				placeholder="Type to search..."
				type="text"
				value={input}
				onChange={(e) => handleChange(e.target.value)}
			/>
			<FaSearch id="searchIcon" onClick={handleClick} />
		</div>
	);
};
