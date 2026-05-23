# Motorola Shop — Agentic AI Demo

Tiny e-commerce page used in the Motorola CMSO Agentic AI training demo.

The **Add to Cart** button is deliberately broken (one-line bug in `shop.js`).
During the live demo, a ServiceNow incident is filed; the Vertex Agent Engine
pipeline reads the incident, inspects the source, commits a fix back to this
repo, and GitHub Pages auto-redeploys. The page is then refreshed live on
stage to show the button working.

## Live page

https://jxdecoding.github.io/motorola-shop/

## The fix the AI is expected to apply

In `shop.js`, the last line queries the wrong element id
(`add-cart` instead of `add-to-cart-btn`). The agent rewrites that one line.
