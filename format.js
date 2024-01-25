

module.exports.JS = 0;

const tokenizers = {};
tokenizers[module.exports.JS] = code => {
    const jsTokens = require("js-tokens");
    const out = [];
    for (const token of jsTokens(code))
        if (["WhiteSpace", "LineTerminatorSequence", "SingleLineComment", "MultiLineComment"].indexOf(token.type) === -1)
            out.push({
                value: token.value,
                spaced: ["IdentifierName", "NumericLiteral"].indexOf(token.type) !== -1 }
            );
    return out;
};

module.exports.format = (lang, code, mask) => {
    if (!tokenizers[lang]) throw "Not a valid lang";
    const tokens = Array.from(tokenizers[lang](code));
    console.log(mask)
    let out = "";
    let i = 0;
    for (const token of tokens) {
        for (const char of token.value) {
        }
    }
    return out;
}