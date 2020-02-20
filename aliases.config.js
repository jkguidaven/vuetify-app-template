const path = require('path')
const fs = require('fs')

const aliases = {
  '@': '.',
  '@src': 'src',
  '@directives': 'src/directives',
  '@router': 'src/router',
  '@views': 'src/views',
  '@layouts': 'src/layouts',
  '@components': 'src/components',
  '@assets': 'src/assets',
  '@utils': 'src/utils',
  '@store': 'src/store',
}

module.exports = {
  webpack: {},
  jest: {},
  jsconfig: {},
}

for (const alias in aliases) {
  const aliasTo = aliases[alias]
  module.exports.webpack[alias] = resolveSrc(aliasTo)
  const aliasHasExtension = /\.\w+$/.test(aliasTo)
  module.exports.jest[`^${alias}$`] = aliasHasExtension
    ? `<rootDir>/${aliasTo}`
    : `<rootDir>/${aliasTo}/index.js`
  module.exports.jest[`^${alias}/(.*)$`] = `<rootDir>/${aliasTo}/$1`
  module.exports.jsconfig[`${alias}/*`] = [`${aliasTo}/*`]
  module.exports.jsconfig[alias] = aliasTo.includes('/index.')
    ? [aliasTo]
    : [
    `${aliasTo}/index.js`,
    `${aliasTo}/index.json`,
    `${aliasTo}/index.vue`,
    `${aliasTo}/index.scss`,
    `${aliasTo}/index.css`,
    ]
}

const jsconfigTemplate = require('./jsconfig.template') || {}
const jsconfigPath = path.resolve(__dirname, 'jsconfig.json')

fs.writeFile(
  jsconfigPath,
  JSON.stringify({
    ...jsconfigTemplate,
    compilerOptions: {
      ...(jsconfigTemplate.compilerOptions || {}),
      paths: module.exports.jsconfig,
    },
  }),
  error => {
    if (error) {
      console.error('Error while creating jsconfig.json from aliases.config.js.')
      throw error
    }
  },
)

function resolveSrc (_path) {
  return path.resolve(__dirname, _path)
}