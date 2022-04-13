import { useEffect } from 'react';

export default function bodyPositionFixed(position) {
  useEffect(() => {
    if (position) {
      const body = document.body;
      body.style.position = 'fixed';
    } else {
      const body = document.body;
      body.style.position = 'relative';
    }
  }, [position]);
}