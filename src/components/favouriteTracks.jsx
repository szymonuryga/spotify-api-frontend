import React, { useEffect, useState, useContext } from 'react';
import { deleteTrack, getFavourite } from '../service/trackService';
import SearchContext from './../context/searchContext';
import { toast } from 'react-toastify';
import TableBody from './common/tableBody';

export default function FavouriteTracks() {
	const currentQuery = useContext(SearchContext);
	const [favTrack, setFavTrack] = useState([]);
	const columns = [
		{
			path: 'trackName',
		},
		{
			key: 'delete',
			content: (item) => (
				<i
					style={{ cursor: 'pointer' }}
					className="fa fa-trash-o"
					aria-hidden="true"
					onClick={() => handleDelete(item)}
				></i>
			),
		},
	];

	useEffect(() => {
		async function getData() {
			const result = await getFavourite();
			setFavTrack(result.data);
		}

		getData();
	});

	const getInforamtion = () => {
		const count = filtered.length;
		if (count === 0) return <p>You don't have any favourite songs :(</p>;
		else if (count === 1) return <p>There is one song</p>;
		else return <p>There are {count} songs</p>;
	};

	const handleDelete = async (track) => {
		const originalTrack = favTrack;
		const tracks = originalTrack.filter((t) => t.trackName !== track.trackName);
		setFavTrack(tracks);
		try {
			await deleteTrack(track.trackName);
		} catch (ex) {
			if (ex.response && ex.response === 404)
				toast.error('This song has already been deleted');

			setFavTrack(originalTrack);
		}
	};

	let filtered = favTrack;
	if (currentQuery)
		filtered = favTrack.filter((t) =>
			t.trackName.toLowerCase().startsWith(currentQuery.toLowerCase())
		);
	return (
		<div>
			<div className="header">
				<h1 className="m-5">Your Favourite Songs</h1>
				{getInforamtion()}
			</div>
			<TableBody data={filtered} columns={columns} />
		</div>
	);
}
