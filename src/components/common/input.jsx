import React from 'react';

export default function Input({ artistName, onHandleChange, handleClick }) {
	return (
		<div className="inputData">
			<input
				type="text"
				className="artist"
				placeholder="Artist"
				value={artistName}
				onChange={onHandleChange}
			/>
			<button onClick={handleClick}>Search</button>
		</div>
	);
}
