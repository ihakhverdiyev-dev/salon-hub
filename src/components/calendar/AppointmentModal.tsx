import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock, User, Scissors, Calendar, Edit, Trash2, X, DollarSign } from "lucide-react";
import type { Appointment, Staff } from "./AppointmentBlock";

interface AppointmentModalProps {
  appointment: Appointment | null;
  staff: Staff | undefined;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (appointment: Appointment) => void;
  onDelete: (appointmentId: string) => void;
}

export function AppointmentModal({
  appointment,
  staff,
  isOpen,
  onClose,
  onEdit,
  onDelete,
}: AppointmentModalProps) {
  if (!appointment) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0 overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-primary/80 px-6 py-4">
          <DialogHeader>
            <DialogTitle className="text-primary-foreground text-lg">
              Appointment Details
            </DialogTitle>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-4">
          {/* Client Info */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <User className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{appointment.clientName}</h3>
              <p className="text-sm text-muted-foreground">Client</p>
            </div>
          </div>

          <Separator />

          {/* Appointment Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary/80 flex items-center justify-center">
                <Scissors className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Service</p>
                <p className="font-medium">{appointment.service}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary/80 flex items-center justify-center">
                <Clock className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-medium">
                  {appointment.startTime} - {appointment.endTime}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary/80 flex items-center justify-center">
                <User className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Staff</p>
                <p className="font-medium">{staff?.name || "Unknown"}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary/80 flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="font-medium">$45.00</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              className="flex-1 gap-2"
              onClick={() => onEdit(appointment)}
            >
              <Edit className="w-4 h-4" />
              Edit
            </Button>
            <Button
              variant="destructive"
              className="flex-1 gap-2"
              onClick={() => onDelete(appointment.id)}
            >
              <Trash2 className="w-4 h-4" />
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
