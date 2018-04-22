/**
 * Creates a debounced function that delays invoking
 * `callback` until after `delay` milliseconds have elapsed
 * since the last time the debounced function was invoked.
 *
 * @param {Function} callback - Callback function to be executed
 * @param {Number} delay - Delay in milliseconds
 * @return {Function} - The debounce function
 */

const debounce = (callback, delay) => {
  let timer;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
};
