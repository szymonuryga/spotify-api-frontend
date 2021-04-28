import React, { Fragment, useState } from 'react';
import Input from './input';
import Table from './Table';
import { getTracks, saveTrack } from './../service/trackService';

export default function TrackList() {
	const [artistName, setArtistName] = useState('');
	const [trackList, setTrackList] = useState([]);

	const handleChange = (e) => {
		setArtistName(e.currentTarget.value);
	};

	const handleClick = async (e) => {
		const result = await getTracks(artistName);
		setTrackList(result.data);
	};

	const handleLikeEvent = (track) => {
		const tracks = [...trackList];
		const index = tracks.indexOf(track);
		tracks[index] = { ...tracks[index] };
		tracks[index].liked = !tracks[index].liked;
		setTrackList(tracks);

		saveTrack(track);
	};
	return (
		<Fragment>
			<Input
				artistName={artistName}
				onHandleChange={handleChange}
				handleClick={handleClick}
			/>
			<Table trackList={trackList} onClick={handleLikeEvent} />
		</Fragment>
	);
}
