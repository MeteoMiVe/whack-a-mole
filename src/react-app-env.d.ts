/// <reference types="react-scripts" />

// Enable mp3 imports without errors
declare module '*.mp3' {
  const src: string;
  export default src;
}
