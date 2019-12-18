import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
	

	
	render() {
		return (
				<div className="border red"> Hi There </div>
		);
	}
	

}


ReactDOM.render(<App />, document.getElementById('root'));