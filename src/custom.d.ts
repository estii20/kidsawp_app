declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';

declare module './pages/Homepage' {
  import React from 'react';
  const Homepage: React.FC;
  export default Homepage;
}
