# Buy Now + Truck — Add-to-cart button animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/atc-buy-now-truck-animation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Standalone responsive recreation of the uploaded 5.27-second screen recording (720 × 1280, 30 fps).

## Run
Extract the ZIP and open `index.html` in a modern browser. No build tools, package installation, server, external images or API are required.

## Interaction
1. Click **Buy Now**.
2. The label fades and the cart icon appears.
3. The orange delivery truck emerges from the button and drives across the preview; its wheels rotate.
4. The truck exits and a mint-green **Ordered ✓** confirmation appears.
5. Click **Try again** to replay. The small cart control in the top-right can also start/restart the animation.

## Project files
- `index.html` — preview, button, inline truck SVG, confirmation and code-preview cards.
- `styles.css` — cream stage, orange pill button, cart morph, truck movement, wheel spin, ordered state and responsive layout.
- `app.js` — click-driven sequence and replay.
- `src/video-visible-snippets.txt` — readable source fragments transcribed from the code panels in the video.

## Visible code extraction
The screen recording visibly shows these fragments:
- HTML button `id="atc"` with label `Buy Now` and `<svg class="atc__cart"/>`.
- A `.truck` wrapper containing SVG `viewBox="0 0 172 96"`.
- A `.confirm` element containing `Ordered ✓`.
- CSS `.truck { z-index: 3; }` and `.confirm { z-index: 1; }`.
- `.is-packing .atc__label { opacity: 0; }`.
- `.is-rolling .wheel__spin { animation: roll .34s linear infinite; }`.

The video only shows partial source panels, not the complete original project. The fragments above are transcribed as visible; the remaining HTML, CSS and JavaScript are an original runnable implementation of the same observed animation. The exact original truck SVG path and full timing logic are not readable in the recording.

## Notes
This is a front-end animation demo. The button does not create a real cart, submit an order, charge a payment method or connect to an e-commerce backend. “Ordered” is a simulated UI state.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
