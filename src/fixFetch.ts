// Polyfill/shim to prevent "Cannot set property fetch of #<Window> which has only a getter"
// in strict-mode modules, polyfills, or sandboxed iframe environments.
(function initFetchSetterPatch() {
  try {
    const globalObj: any = typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
      ? window
      : typeof self !== 'undefined'
      ? self
      : {};

    const rawFetch = globalObj.fetch && typeof globalObj.fetch === 'function'
      ? globalObj.fetch.bind(globalObj)
      : null;

    let _fetchInstance = rawFetch;

    const getter = function () {
      return _fetchInstance || (rawFetch ? rawFetch : (globalObj.fetch !== getter ? globalObj.fetch : null));
    };

    const setter = function (fn: any) {
      _fetchInstance = fn;
    };

    const targets: any[] = [globalObj];
    if (typeof window !== 'undefined') targets.push(window);
    if (typeof Window !== 'undefined' && Window.prototype) targets.push(Window.prototype);
    if (typeof self !== 'undefined') targets.push(self);

    for (const target of targets) {
      let p = target;
      while (p) {
        try {
          const desc = Object.getOwnPropertyDescriptor(p, 'fetch');
          if (desc && desc.configurable) {
            Object.defineProperty(p, 'fetch', {
              get: getter,
              set: setter,
              enumerable: true,
              configurable: true,
            });
          }
        } catch (e) {
          // ignore if property is restricted
        }
        p = Object.getPrototypeOf(p);
      }
    }

    try {
      Object.defineProperty(globalObj, 'fetch', {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
      });
    } catch (e) {
      // ignore
    }
  } catch (e) {
    // ignore
  }
})();

export {};
