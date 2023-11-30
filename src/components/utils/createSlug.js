import { transliterate } from "transliteration";

export const createSlug = (cyrillicText) => {
    // Transliterate Cyrillic text to Latin characters
    const latinText = transliterate(cyrillicText);

    // Replace spaces and special characters to create a slug
    const slug = latinText
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, ""); // Remove special characters

    return slug;
};
