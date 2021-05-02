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

export function deleteTrack(trackName) {
	return http.delete(apiEndpoint + 'delete/selectedTrack/' + trackName + '/');
}

export function getFavourite() {
	return http.get(apiEndpoint + 'favourite/');
}
