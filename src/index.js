import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
