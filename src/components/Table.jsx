import React from 'react';
import Like from './like';

export default function Table({ trackList, onClick }) {
	return (
		<div className="trackList">
			<table>
				<thead>
					<tr>
						<th>{trackList.length > 0 ? 'Track Name' : ''}</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{trackList.map((track) => (
						<tr key={track.id}>
							<td>{track.trackName}</td>
							<td>
								<Like liked={track.liked} onClick={() => onClick(track)} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
