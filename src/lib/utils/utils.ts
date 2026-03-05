import { base } from '$app/paths';

export function getImagePrefix(): string {
	return base ? base + '/' : '/';
}
