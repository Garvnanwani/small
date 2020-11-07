module.exports = function small(string) {
    if (typeof string !== "string") throw new TypeError("Small wants a string!");
    return string.replace(/\s/g, "");
};
