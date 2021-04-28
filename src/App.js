import './App.css';
import TrackList from './components/trackList';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
	return (
		<main className="main">
			<div className="header">
				<h1>Spotify App</h1>
			</div>
			<TrackList />
		</main>
	);
}

export default App;
