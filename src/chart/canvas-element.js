const EventEmitter = require('wolfy87-eventemitter');

class CanvasElement extends EventEmitter {
  constructor(ctx) {
    super();
    this.context = ctx;
    // canvas实际的宽高 (width/height) * pixelRatio
    this.width = 0;
    this.height = 0;
    this.currentStyle = {};
  }

  getContext(/* type */) {
    return this.context;
  }

  getBoundingClientRect() {
    const width = this.width;
    const height = this.height;
    return {
      top: 0,
      right: width,
      bottom: height,
      left: 0
    };
  }

  addEventListener(type, listener) {
    this.addListener(type, listener);
  }

  removeEventListener(type) {
    this.removeEvent(type);
  }

  dispatchEvent(e) {
    this.emitEvent(e);
  }
}

module.exports = CanvasElement;
