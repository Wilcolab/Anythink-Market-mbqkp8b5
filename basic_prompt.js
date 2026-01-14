function toCamelCase(text) {
    return text
        .toLowerCase()
        .replace(/[_\s](.)/g, (match, char) => char.toUpperCase())
        .replace(/^(.)/, (match) => match.toLowerCase());
}

module.exports = toCamelCase;