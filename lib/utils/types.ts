import { ComponentPropsWithoutRef } from "react";

export type ArrayType<T> = T extends (infer U)[] ? U : T;
export type Truthy<T> = T extends false | "" | 0 | null | undefined ? never : T;
export type Promised<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
export type ExtendedComponentProps<T extends React.ElementType, P> = Omit<
	ComponentPropsWithoutRef<T>,
	keyof P
> &
	P;

export type FilterUnion<Union, Type extends Partial<Union>> = Extract<
	Union,
	Type
>;
