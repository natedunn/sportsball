import { env } from '../env/client';

// export function getBaseUrl(withProtocol: boolean | undefined = true) {
// 	if (typeof window !== 'undefined') return '';

// 	if (!!env.NEXT_PUBLIC_ROOT_DOMAIN) {
// 		const getProtocol = () => {
// 			if (!withProtocol) return '';
// 			return 'http://';
// 		};
// 		return `${getProtocol()}${env.NEXT_PUBLIC_ROOT_DOMAIN}`;
// 	}

// 	if (!!env.VERCEL_URL) {
// 		return `${withProtocol ?? 'https://'}${env.VERCEL_URL}`;
// 	}

// 	return `${withProtocol ?? 'http://'}localhost:${process.env?.PORT ?? 3000}`;
// }

export function getBaseUrl() {
	if (typeof window !== 'undefined') {
		return '';
	}

	if (!!env.NEXT_PUBLIC_ROOT_DOMAIN) {
		return `http://${env.NEXT_PUBLIC_ROOT_DOMAIN}`;
	}

	if (!!env.VERCEL_URL) {
		return `https://${env.VERCEL_URL}`;
	}

	return `http://localhost:${process.env.PORT ?? 3000}`;
}
