# Animate

```js
/**
 * Animate the view with requestAnimationFrame.
 *
 * @param {Event} type - Listen for specified event
 * @param {Node} element - Element to check the event against
 * @param {Function} callback - Callback function to be executed
 * @param {Boolean} capture - Propagating event
 * @return {Function} - The animated function
 */
const animate = (type, element, callback, capture) => {
  const raf = window.requestAnimationFrame;
  let ticking = false;

  const render = () => {
    if (!ticking) {
      ticking = true;
      raf(update);
    }
  };

  const update = () => {
    if (ticking) {
      callback();
    }
    ticking = false;
  };

  element.addEventListener(type, render, !!capture);
};
```
