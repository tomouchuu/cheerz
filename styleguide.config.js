const path = require('path');

module.exports = {
  require: [
    path.join(__dirname, 'node_modules/modern-normalize/modern-normalize.css'),
    path.join(__dirname, 'src/index.css')
  ],
  skipComponentsWithoutExample: true,
  sections: [
    {
      name: 'Global',
      components: [
        'src/Components/Footer/*.js',
        'src/Components/Idol/Thumbnail.js',
        'src/Components/Unit/Thumbnail.js',
        'src/Components/Navbar/*.js',
        'src/Components/Search/*.js',
        'src/Components/Timeline/*.js',
        'src/Components/Utils/*.js',
      ]
    },
    {
      name: 'Homepage',
      components: 'src/Components/Hero/*.js'
    },
    {
      name: 'Artist Page',
      components: [
        'src/Components/Idol/Hero.js',
        'src/Components/Fan/FanSidebar.js',
        'src/Components/Community/CommunitySidebar.js',
        'src/Components/Supporter/*.js',
      ]
    },
    {
      name: 'Unit Page',
      components: 'src/Components/Unit/*.js'
    }
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide-wrapper'),
  }
}