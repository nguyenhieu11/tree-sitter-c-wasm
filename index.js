const fs = require('fs');
const Parser = require('web-tree-sitter');

async function parseCCode() {
    await Parser.init();
    const treeSitter = await Parser.Language.load('D:/work/fpt/file-from-tree-sitter/tree-sitter-c.wasm');
    const parser = new Parser();
    parser.setLanguage(treeSitter);

    const code = fs.readFileSync('your_c_file.c', 'utf-8');
    const tree = parser.parse(code);

    console.log(tree.rootNode.toString());
}

parseCCode();