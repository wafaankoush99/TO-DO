import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import SettingsContext from './components/todo/setting-context'

// class Main extends React.Component {
//   render() {

function Main(props) {

    return (
        <SettingsContext>
            <App />
        </SettingsContext>
    )


}
//   }
// }

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
