/**
 * Creates a throttled function that only invokes the
 * `callback` at most once per every `limit` milliseconds.
 *
 * @param {Function} callback - Callback function to be executed
 * @param {Number} limit - Limit in milliseconds
 * @return {Function} - The throttled function
 */

const throttle = (callback, limit) => {
  let timer;
  let lastInvokeTime;

  return function () {
    const context = this;
    const args = arguments;

    if (!lastInvokeTime) {
      callback.apply(context, args);
      lastInvokeTime = Date.now();
    } else {
      clearTimeout(timer);
      timer = setTimeout(function () {
        if ((Date.now() - lastInvokeTime) >= limit) {
          callback.apply(context, args);
          lastInvokeTime = Date.now();
        }
      }, limit - (Date.now() - lastInvokeTime));
    }
  };
};
