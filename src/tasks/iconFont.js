const iconfontMaker = require('iconfont-maker');

iconfontMaker({
  files: [
    'src/assets/images/icons/*.svg'
  ],
  types: [
    'ttf'
  ],
  order: ['ttf'],
  fontName: 'inBioDemo',
  dest: 'src/assets/fonts',
  cssDest: 'src/assets/styles/global/_inBioDemo.scss',
  cssTemplate: 'src/tasks/iconTemp.hbs',

  cssFontsUrl: './../fonts/'
}, function (error) {
  if (error) {
    console.log('Fail!', error);
  } else {
    console.log('Done!');
  }
})

