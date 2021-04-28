import http from './httpService';

const apiEndpoint = 'http://localhost:8080/album/';

export function getTracks(artistName) {
	return http.get(apiEndpoint + artistName + '/');
}

export function saveTrack(track) {
	if (track.id) {
		const body = { ...track };
		delete body.id;
		return http.put(apiEndpoint + 'add-track/', body);
	}

	return http.post(apiEndpoint + 'add-track/', track);
}

export function deleteTrack(trackId) {
	return http.delete(apiEndpoint + 'delete-track/' + trackId + '/');
}
