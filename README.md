## Context API Part-2

### Making a Theme changer

This is another way mainly used in corporate space.In this, we create a context, create a provider and also a custom hook in one single file to use the context.


**Note : In this Tailwind css plays a lead role, so please dont forget to add below code in tailwind.config.js.**


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
