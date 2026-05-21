import type { SVGProps } from 'react';
const SvgFavicon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path fill="#00A6FF" d="M0 0h48v48H0z" />
    <path fill="#fff" d="M16 37h18v-6.024H23.183V11H16z" />
  </svg>
);
export default SvgFavicon;
