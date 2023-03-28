import React from "react";

type Size = "xs" | "sm" | "base" | "lg";

interface Props {
  count?: number;
  className?: string;
  icon?: React.ReactNode;
  color?: string;
  size?: Size
}


const defaultProps: Props = {
  icon: <i className="   fa fa-bell-o text-base  " />,
  count: 0,
  color: "bg-yellow-400",
  size: "sm",
};

const sizes = {
  xs: "text-[0.67em] ",
  sm: "text-[0.83em]",
  base: "text-[1em]",
  lg: "text-[1.17em]",
};

const Badge = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className,
  count = defaultProps.count,
  icon = defaultProps.icon,
}: Props) => {
  return (
    <>
      {icon}
      <span
        className={`  badge  navbar-badge absolute top-0 right-0 py-[0.25em] px-[0.4em] ${size && sizes[size]} ${color}  ${className} `}
      >
        {count}
      </span>
    </>
  );
};

export default Badge;
