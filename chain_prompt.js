function toKebabCase(str) {
    return str
        .toLowerCase()
        .replace(/[\s_]+/g, '-');
}