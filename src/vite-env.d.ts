/// <reference types="vite/client" />

/** SVG files imported as URLs */
declare module '*.svg' {
  const src: string;
  export default src;
}

/** Image files imported as URLs */
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}

/** CSS Modules */
declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}
