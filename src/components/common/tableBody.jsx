import React from 'react';
import _ from 'lodash';

function TableBody({ data, columns }) {
	const renderData = (item, column) => {
		if (column.content) return column.content(item);

		return _.get(item, column.path);
	};
	const createKey = (item, column) => {
		return item.id + (column.path || column.key);
	};
	return (
		<div className="trackList">
			<table>
				<tbody>
					{data.map((item) => (
						<tr key={item.id}>
							{columns.map((column) => (
								<td key={createKey(item, column)}>
									{renderData(item, column)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default TableBody;
