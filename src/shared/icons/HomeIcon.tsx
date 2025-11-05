import type { SVGProps, FC } from "react";

const CloseIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M70 38.25H60.2588V70H51.166V46H35V70H9.74023V38.25H0L35 0L70 38.25Z" />
  </svg>
);

export default CloseIcon;
