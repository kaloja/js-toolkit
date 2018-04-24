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

  // Callback for the event:
  const render = () => {
    if (!ticking) {
      ticking = true;
      raf(update);
    }
  };

  // Animation callback:
  const update = () => {
    if (ticking) {
      callback();
    }

    // Reset the tick, so we can capture the next event:
    ticking = false;
  };

  // Listen for events:
  element.addEventListener(type, render, !!capture);
};
```
