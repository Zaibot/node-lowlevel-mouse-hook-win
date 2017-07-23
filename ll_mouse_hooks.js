'use strict';

if (process.platform !== 'win32') return;

const hookMouse = require('bindings')('ll_mouse_hooks');

const getMode = (modes) => {
  return modes.split(',').reduce((state, cur) => {
    if (cur === 'move') {
      return state | 0x01;
    } else if (cur === 'up') {
      return state | 0x02;
    } else if (cur === 'down') {
      return state | 0x04;
    } else {
      throw Error(`expects 'move' and/or 'up' and/or 'down' splitted by commas`);
    }
  }, 0);
}

module.exports = {
  on: (modes, fn) => {
    hookMouse.run(getMode(modes), (eventData) => {
      const parts = eventData.split('::');
      fn(parts[0], parts[1], parts[2]);
    });
  },
  stop: () => {
    hookMouse.stop();
  }
};
