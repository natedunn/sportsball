"use client";

import { ExtendedComponentProps } from "@/lib/utils/types";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

type ThemeSwitchButtonProps = ExtendedComponentProps<
	"button",
	{
		fallback?: React.ReactNode;
	}
>;

export const ThemeSwitchButton = (props: ThemeSwitchButtonProps) => {
	const [mounted, setMounted] = useState(false);

	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return props.fallback ?? null;
	}

	const handleToggle = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button {...props} onClick={handleToggle}>
			{props.children}
		</button>
	);
};
