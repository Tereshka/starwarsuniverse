import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className="pa2">
			<input 
				className="form-control mr-sm-2" 
				type='search' 
				placeholder="search character" 
				onChange={searchChange} />
		</div>
	);
}

export default SearchBox;