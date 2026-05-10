import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import { font } from './fonts/font';
import { vars } from './theme.css';
import './reset.css';

globalFontFace('Pretendard', {
  src: 'url("/fonts/PretendardVariable.woff2") format("woff2")',
  fontWeight: '400 700',
  fontStyle: 'normal',
  fontDisplay: 'swap',
});

globalStyle('body', {
  fontFamily: font.pretendard,
  color: vars.color.gray900,
  backgroundColor: vars.color.white,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('#root', {
  minHeight: '100vh',
});
