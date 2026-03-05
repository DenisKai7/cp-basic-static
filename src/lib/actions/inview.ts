/** Svelte action for detecting when an element enters the viewport */
export function inview(node: HTMLElement, params: { threshold?: number; once?: boolean } = {}) {
	const { threshold = 0.2, once = false } = params;
	let hasEntered = false;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					hasEntered = true;
					node.dispatchEvent(new CustomEvent('inview', { detail: { inView: true } }));
					if (once) {
						observer.unobserve(node);
					}
				} else if (!once || !hasEntered) {
					node.dispatchEvent(new CustomEvent('inview', { detail: { inView: false } }));
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
