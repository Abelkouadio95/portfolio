import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light px-30 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;