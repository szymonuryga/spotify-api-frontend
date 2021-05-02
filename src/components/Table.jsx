import React from 'react';
import Like from './like';

export default function Table({ trackList, onClick }) {
	return (
		<div className="trackList">
			<table>
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
