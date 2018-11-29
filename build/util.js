const path = require('path')

function fullPath(...filenames) {
  return path.resolve(__dirname, '..', ...filenames)
}

function transfer(...args) {
  args = args.map(arg => typeof arg === 'string'
    ? data => ({ [arg]: data })
    : arg)
  return source => {
    const output = {}
    for (const key in source) {
      output[key] = args.reduceRight((prev, curr) => curr(prev, key, output), source[key])
    }
    return output
  }
}

function vscPath(...filenames) {
  const match = process.env.PATH.match(/(;|^)[^;]+Microsoft VS Code\\bin(;|$)/g)
  if (!match) return
  return path.resolve(match[0].replace(/;/g, ''), '..', ...filenames)
}

const bracketMap = {
  parens: ['\\(', '\\)'],
  parts: ['\\[\\[', '\\]\\]'],
  brackets: ['\\[', '\\]'],
  braces: ['{', '}'],
  association: ['<\\|', '\\|>'],
}

module.exports = {
  transfer,
  fullPath,
  bracketMap,
  vscPath,
}
