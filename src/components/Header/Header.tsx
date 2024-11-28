"use client";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => (
  <div className="shadow-none rounded-none border-none pl-2 p-2">
    {children && <div className="flex items-center space-x-4">{children}</div>}
  </div>
);

export default Header;
