"use client";

import React from "react";
import { Card, CardContent } from "../ui/card";

interface IconCardProps {
  title?: string;
  value?: string;
  icon?: React.ReactNode;
}

const IconCard: React.FC<IconCardProps> = ({ title, value, icon }) => (
  <Card className="flex max-h-24 p-4 items-center">
    <div className="flex items-center justify-center h-full bg-red-500 rounded-lg">
      {icon}
    </div>

    <div className="ml-4 flex flex-col">
      {title && (
        <p className="text-lg font-semibold text-gray-800 text-nowrap">{title}</p>
      )}
      {value && (
        <p className="text-sm text-gray-600">{value}</p>
      )}
    </div>
  </Card>
);

export default IconCard;
