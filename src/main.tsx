import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ContextProvider } from './context/index.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './index.css';
import 'react-toastify/ReactToastify.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
	<React.StrictMode>
		<AnimatePresence mode='wait'>
			<ContextProvider>
				<HelmetProvider>
					<QueryClientProvider client={queryClient}>
						<App />
					</QueryClientProvider>
				</HelmetProvider>
			</ContextProvider>
		</AnimatePresence>
	</React.StrictMode>
);
