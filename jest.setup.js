// mock screen full events
// https://github.com/sindresorhus/screenfull/blob/main/index.js
const screenfullMethods = [
    'requestFullscreen',
    'exitFullscreen',
    'fullscreenElement',
    'fullscreenEnabled',
    'fullscreenchange',
    'fullscreenerror',
  ];
  //jest环境下的初始化设置
  screenfullMethods.forEach((item) => {
    document[item] = () => {};
    HTMLElement.prototype[item] = () => {};
  });
  