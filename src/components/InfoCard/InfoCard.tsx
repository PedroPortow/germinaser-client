"use client";

import React from "react";
import { Card } from "@ui/card";

interface InfoCardProps {
  title?: string;
  value?: string | number;
  icon?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value, icon }) => (
  <Card className="flex gap-3 w-full items-center p-2 px-3">
    {icon}
    <div className="flex flex-col">
      <p className="text-muted-foreground text-sm font-semibold text-start">{title}</p>
      <p className="font-medium text-md">{value}</p>
    </div>
  </Card>
);

export default InfoCard;
