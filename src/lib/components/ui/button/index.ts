import type { WithElementRef } from 'bits-ui';
import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';

import { tv } from 'tailwind-variants';

import Root from './button.svelte';

const buttonVariants = tv({
	base: 'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	variants: {
		variant: {
			default: 'bg-primary text-primary-foreground hover:bg-primary/90',
			destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
			outline: 'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
			secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
			ghost: 'hover:bg-accent hover:text-accent-foreground',
			link: 'text-primary underline-offset-4 hover:underline'
		},
		size: {
			default: 'h-10 px-4 py-2',
			sm: 'h-9 rounded-md px-3',
			lg: 'h-11 rounded-md px-8',
			icon: 'h-10 w-10'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
type ButtonSize = VariantProps<typeof buttonVariants>['size'];

type ButtonProps = WithElementRef<HTMLButtonAttributes> &
	WithElementRef<HTMLAnchorAttributes> & {
		variant?: ButtonVariant;
		size?: ButtonSize;
	};

export {
	Root,
	type ButtonProps as Props,
	//
	Root as Button,
	buttonVariants,
	type ButtonProps,
	type ButtonSize,
	type ButtonVariant
};
