// src/components/ConfirmationModal.tsx

"use client";

import React from "react";
import { Booking } from "@/types/booking";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { ButtonVariant } from "@/types/ui";

interface ConfirmationModalProps {
  booking: Booking | null;
  actionButtonVariant?: ButtonVariant;
  actionButtonText?: string;
  cancelButtonText?: string;
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  children?: React.ReactElement;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({  
  open, 
  actionButtonVariant = 'default',
  actionButtonText = 'Confirmar',
  cancelButtonText = 'Cancelar',
  onCancel,
  onOpenChange,
  title,
  description,
  onConfirm,
  children
}) => {
  if (!open) return null;

  return (
    <AlertDialog 
      open={open} 
      onOpenChange={onOpenChange}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
          {description && (
            <AlertDialogDescription>
             {description}
            </AlertDialogDescription>
          )}
        </AlertDialogHeader>
        {children}
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline" onClick={onCancel}>
              {cancelButtonText}
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant={actionButtonVariant}
              onClick={onConfirm}
            >
              {actionButtonText}
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ConfirmationModal;
