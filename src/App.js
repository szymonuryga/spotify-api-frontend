import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import TrackList from './components/trackList';
import FavouriteTracks from './components/favouriteTracks';
import NotFound from './components/notFound';
import NavBar from './components/navbar';
import SearchContext from './context/searchContext';
import { ToastContainer } from 'react-toastify';
import React, { useState, Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';

function App() {
	const [searchQuery, setSearchQuery] = useState('');

	const handleChange = (e) => {
		setSearchQuery(e.currentTarget.value);
	};
	return (
		<Fragment>
			<ToastContainer />
			<SearchContext.Provider value={searchQuery}>
				<NavBar searchQuery={searchQuery} handleChange={handleChange} />
				<main className="main">
					<Switch>
						<Route path="/home" component={TrackList}></Route>
						<Route path="/favourite" component={FavouriteTracks}></Route>
						<Route path="/not-found" component={NotFound}></Route>
						<Redirect from="/" exact to="/home" />
						<Redirect to="/not-found" />
					</Switch>
				</main>
			</SearchContext.Provider>
		</Fragment>
	);
}

export default App;
