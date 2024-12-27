## Context API Part-2

### Making a Theme changer

This is another way mainly used i corporate space.In this in one single file we create a context, create a provider and also a custom hook to use the context.

<hr>
**Note : In this Tailwind css plays a lead role, so please dont forget to add below code in tailwind.config.js.**
<hr>

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // <----------------  this is imp
  theme: {
    extend: {},
  },
  plugins: [],
};
```
