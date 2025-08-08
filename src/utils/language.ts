// Set language and reload page
export const setLanguage = (lang: string): void => {
    localStorage.setItem("language", lang);
    window.location.reload();
};

// Get current language
export const getLanguage = (): string => {
    return localStorage.getItem("language") || "da";
};