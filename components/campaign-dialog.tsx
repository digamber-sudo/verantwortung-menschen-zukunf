"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CampaignForm } from "./campaign-form";

interface CampaignDialogProps {
  readonly type: "spenden" | "volunteer" | "kontakt" | "event";
  readonly children: React.ReactNode;
  readonly eventName?: string;
}

export function CampaignDialog({ type, children, eventName }: CampaignDialogProps) {
  const [open, setOpen] = React.useState(false);

  const getTitle = () => {
    switch (type) {
      case "spenden":
        return "Unterstützen Sie unsere Kampagne.";
      case "volunteer":
        return "Jetzt mitmachen";
      case "event":
        return eventName ? `Anmeldung: ${eventName}` : "Event-Anmeldung";
      default:
        return "Kontaktieren Sie uns";
    }
  };

  const getDescription = () => {
    switch (type) {
      case "spenden":
        return "Ihre Spende hilft, Meine aktiv zu gestalten.";
      case "volunteer":
        return "Ich möchte Meine aktiv mitgestalten und informiert bleiben.";
      default:
        return "Füllen Sie das Formular aus, um Teil der Kampagne zu werden.";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[550px] overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {getTitle()}
          </DialogTitle>
          <DialogDescription>{getDescription()}</DialogDescription>
        </DialogHeader>
        <CampaignForm
          type={type}
          onSuccess={() => {
            // Success logic handled in CampaignForm
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
