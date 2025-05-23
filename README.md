# Scroll Image Spread Animation

A simple scroll-triggered animation effect built with HTML, CSS, and JavaScript.

### 🔧 How it works
- A group of stacked images is positioned absolutely within a fixed-size container.
- On scroll, each image moves horizontally using `transform: matrix(...)` for precise control.
- An `IntersectionObserver` attaches the scroll listener only when the section enters the viewport.
- Images are grouped logically to spread in opposite directions based on their index.

### 🛠️ Tech used
- HTML & CSS for layout and styling
- Vanilla JavaScript for scroll-based animation
- `transform: matrix()` for image movement
- `IntersectionObserver` for scroll event optimization

> Inspired by a real-world site animation. Rebuilt to understand the math and scroll behavior.

