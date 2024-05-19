import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './theme';
import { AuthProvider } from './auth';
import App from './App';
import './globals.css';

export const QUERY_CACHE_TIME: number = 1000 * 60 * 5;

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			staleTime: QUERY_CACHE_TIME
		}
	}
});

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme='system' storageKey='fish_theme'>
				<AuthProvider>
					<App />
				</AuthProvider>
			</ThemeProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
