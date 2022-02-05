import './App.css';

import Footer from './Footer';

import settings from './settings.json';



function App () {
	const links = settings.links;
	let footerProps = {
		links
	};

	return (
		<div className="App">
			<header className="p-8 bg-slate-300 min-h-screen flex">
				<h2 className="text-4xl text-slate-900 text-center m-auto">codeshot</h2>
			</header>
			<Footer {...footerProps} />
		</div>
	);
}

export default App;
