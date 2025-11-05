import type { SVGProps, FC } from "react";

const CloseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M70 7L42 35L70 63L63 70L35 42L7 70L0 63L28 35L0 7L7 0L35 28L63 0L70 7Z"
      fill="currentColor"
    />
  </svg>
);

export default CloseIcon;
