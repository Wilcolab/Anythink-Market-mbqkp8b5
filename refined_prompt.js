function camelCase(text) {
    if (typeof text !== 'string') {
        throw new TypeError('Input must be a string');
    }
    
    return text
        .split(/[\s_-]+/)
        .map((word, index) => {
            if (index === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}