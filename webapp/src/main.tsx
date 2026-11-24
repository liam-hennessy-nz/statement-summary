import './main.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { App } from './App.tsx';

const rootElement = document.getElementById('root');
if (rootElement === null) throw new Error('Failed to find root element');

createRoot(rootElement).render(
	<StrictMode>
		<BrowserRouter>
			<CssBaseline>
				<App />
			</CssBaseline>
		</BrowserRouter>
	</StrictMode>
);
