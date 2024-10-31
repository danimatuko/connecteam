// utils/iconLoader.js
export const loadIcon = async (iconName) => {
    try {
        const icon = await import(`../assets/icons/sections/${iconName}.svg`);
        return icon.default; // Return the default export of the SVG
    } catch (error) {
        console.error(`Error loading icon: ${iconName}`, error);
        return null; // Handle error gracefully
    }
};

