// helpers.js

/**
 * Converts a title string into a section ID by making it lowercase
 * and replacing spaces with hyphens.
 *
 * @param {string} title - The title to convert.
 * @returns {string} - The generated section ID.
 */
export const generateSectionId = (title) => {
    if (!title) return ''; // Handle cases where title might be undefined or empty
    return title.toLowerCase().replace(/\s+/g, '-'); // Convert title to lowercase and replace spaces with hyphens
};

