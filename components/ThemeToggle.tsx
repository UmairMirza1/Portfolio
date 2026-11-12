"use client";

import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
    >
      <FiMoon className="block dark:hidden" size={18} aria-hidden />
      <FiSun className="hidden dark:block" size={18} aria-hidden />
    </button>
  );
};

export default ThemeToggle;
