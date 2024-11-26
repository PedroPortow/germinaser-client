"use client";

import { Card, CardContent, CardTitle } from "../ui/card";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, children }) => (
  <Card className="drop-shadow-sm rounded-none border-none h-16">
    <CardContent className="w-full h-full flex items-center">
      <div className="flex items-center">
   
        {title && <CardTitle className="text-xl">{title}</CardTitle>}
        {subtitle && <p className="text-lg">{subtitle}</p>}
      </div>
      {children && <div className="flex items-center space-x-4">{children}</div>}
    </CardContent>
  </Card>
);

export default Header;
