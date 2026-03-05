import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
	const { subscribe, set, update } = writable<string>('dark');

	if (browser) {
		const stored = localStorage.getItem('theme');
		if (stored) {
			set(stored);
			document.documentElement.classList.toggle('dark', stored === 'dark');
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const initial = prefersDark ? 'dark' : 'light';
			set(initial);
			document.documentElement.classList.toggle('dark', initial === 'dark');
		}
	}

	return {
		subscribe,
		toggle: () => {
			update((current) => {
				const next = current === 'dark' ? 'light' : 'dark';
				if (browser) {
					localStorage.setItem('theme', next);
					document.documentElement.classList.toggle('dark', next === 'dark');
				}
				return next;
			});
		},
		set: (value: string) => {
			set(value);
			if (browser) {
				localStorage.setItem('theme', value);
				document.documentElement.classList.toggle('dark', value === 'dark');
			}
		}
	};
}

export const theme = createThemeStore();
