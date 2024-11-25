"use client"

import React from 'react';
import { useGetClinics } from '@/hooks';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ui/select';
import { Clinic } from '@/types/clinic';

interface ClinicSelectProps {
  value?: string;
  onValueChange: (value: string) => void;
}

const ClinicSelect: React.FC<ClinicSelectProps> = ({ value, onValueChange }) => {
  const { data: clinics } = useGetClinics();

  console.log({value})
  
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione uma clínica" />
      </SelectTrigger>
      <SelectContent>
        {clinics?.map((clinic: Clinic) => (
          <SelectItem key={clinic.id} value={clinic.id}>
            {clinic.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ClinicSelect;
