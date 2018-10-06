const path = require('path');

module.exports = {
  require: [
    path.join(__dirname, 'node_modules/modern-normalize/modern-normalize.css'),
    path.join(__dirname, 'src/index.css')
  ],
  skipComponentsWithoutExample: true
}