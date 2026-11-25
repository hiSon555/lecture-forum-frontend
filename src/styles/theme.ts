import type { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
    color: {
        background: {
            default: "#f3f4f6",
            paper: "#fff",
        },
        text: {
            default: "#1f2937",
            disabled: "#9ca3af",
        },
        divider: "#e5e7e8",
        primary: "#2563eb",
        secondary: "#4b5563",
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        info: "#3b82f6"
    }
}

export const darkTheme: DefaultTheme = {
    color: {
        background: {
            default: "#111827",
            paper: "#1f2937",
        },
        text: {
            default: "#f9fafb",
            disabled: "#6b7280",
        },
        divider: "#374151",
        primary: "#3b82f6",
        secondary: "#9ca3af",
        success: "#34d399",
        error: "#f87171",
        warning: "#fbbf24",
        info: "#60a5fa",
    },
};