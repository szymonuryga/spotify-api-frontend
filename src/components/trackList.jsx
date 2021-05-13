import React, { Fragment, useState, useEffect } from 'react';
import Input from './input';
import {
	deleteTrack,
	getFavourite,
	getTracks,
	saveTrack,
} from './../service/trackService';
import Like from './like';
import TableBody from './tableBody';

export default function TrackList() {
	const [artistName, setArtistName] = useState('');
	const [trackList, setTrackList] = useState([]);
	const [favouriteTracks, setFavouriteTracks] = useState([]);
	const columns = [
		{
			path: 'trackName',
		},
		{
			key: 'like',
			content: (track) => (
				<Like liked={track.liked} onClick={() => handleLikeEvent(track)} />
			),
		},
	];

	useEffect(() => {
		async function getData() {
			const result = await getFavourite();
			setFavouriteTracks(result.data);
		}

		getData();
	}, [favouriteTracks]);

	const handleChange = (e) => {
		setArtistName(e.currentTarget.value);
	};

	const handleClick = async (e) => {
		const result = await getTracks(artistName);
		const nameSet = new Set(favouriteTracks.map((o) => o.trackName));

		const list = result.data.map((o) => ({
			...o,
			liked: nameSet.has(o.trackName) ? true : o.liked,
		}));
		setTrackList(list);
	};

	const handleLikeEvent = async (track) => {
		const tracks = [...trackList];
		const index = tracks.indexOf(track);
		tracks[index] = { ...tracks[index] };
		tracks[index].liked = !tracks[index].liked;
		tracks[index].liked === false
			? await deleteTrack(tracks[index].trackName)
			: await saveTrack(tracks[index]);

		setTrackList(tracks);
	};

	return (
		<Fragment>
			<div className="header m-4">
				<h1>Spotify App</h1>
			</div>
			<Input
				artistName={artistName}
				onHandleChange={handleChange}
				handleClick={handleClick}
			/>
			<TableBody data={trackList} columns={columns} />
		</Fragment>
	);
}
