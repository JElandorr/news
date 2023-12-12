import { transliterate } from "transliteration";
import { v4 as uuidv4 } from "uuid";

export const createSlug = (cyrillicText) => {
    // Transliterate Cyrillic text to Latin characters
    const latinText = transliterate(cyrillicText);

    // Generate a unique ID
    const id = uuidv4();

    // Replace spaces and special characters to create a slug
    const slug = latinText
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[^a-z0-9-]/g, ""); // Remove special characters

    // Add the ID to the end of the slug
    const slugWithId = `${slug}-${id}`;

    return slugWithId;
};
