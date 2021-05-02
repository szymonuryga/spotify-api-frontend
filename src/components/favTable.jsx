import React from 'react';

export default function FavTable({ data, onDelete }) {
	return (
		<div className="trackList">
			<table>
				<tbody>
					{data.map((item) => (
						<tr key={item.id}>
							<td>{item.trackName}</td>
							<td>
								<i
									style={{ cursor: 'pointer' }}
									className="fa fa-trash-o"
									aria-hidden="true"
									onClick={() => onDelete(item)}
								></i>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
