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
  actionButtonVariant: ButtonVariant;
  actionButtonText?: string;
  cancelButtonText?: string;
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({  
  open, 
  actionButtonVariant = 'default',
  actionButtonText = 'Confirmar',
  cancelButtonText = 'Cancelar',
  onCancel,
  onConfirm
}) => {
  if (!open) return null;

  return (
    <AlertDialog open={open} onOpenChange={(isOpen) => { if (!isOpen) onCancel(); }}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta ação não pode ser desfeita. Isso irá cancelar permanentemente a sua reserva.
          </AlertDialogDescription>
        </AlertDialogHeader>
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
