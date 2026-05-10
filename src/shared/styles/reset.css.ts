// src/shared/styles/reset.css.ts
import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html, body, #root', {
  minHeight: '100%',
});

globalStyle('body', {
  margin: 0,
});

globalStyle('button, input, textarea, select', {
  font: 'inherit',
});

globalStyle('button', {
  border: 0,
  background: 'none',
  cursor: 'pointer',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
});
