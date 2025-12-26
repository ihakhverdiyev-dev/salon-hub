import { cn } from "@/lib/utils";

export type AppointmentColor = 
  | "pink" 
  | "yellow" 
  | "blue" 
  | "green" 
  | "coral" 
  | "purple" 
  | "teal" 
  | "orange";

export interface Appointment {
  id: string;
  clientName: string;
  service: string;
  startTime: string;
  endTime: string;
  staffId: string;
  color: AppointmentColor;
}

export interface Staff {
  id: string;
  name: string;
  avatar: string;
}

interface AppointmentBlockProps {
  appointment: Appointment;
  onClick?: () => void;
}

const colorClasses: Record<AppointmentColor, string> = {
  pink: "bg-appointment-pink",
  yellow: "bg-appointment-yellow",
  blue: "bg-appointment-blue",
  green: "bg-appointment-green",
  coral: "bg-appointment-coral",
  purple: "bg-appointment-purple",
  teal: "bg-appointment-teal",
  orange: "bg-appointment-orange",
};

export function AppointmentBlock({ appointment, onClick }: AppointmentBlockProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-lg p-3 cursor-pointer transition-all duration-200",
        "hover:shadow-md hover:scale-[1.02] active:scale-100",
        colorClasses[appointment.color]
      )}
    >
      <p className="text-xs font-medium text-foreground/70">
        {appointment.startTime} - {appointment.endTime}
      </p>
      <p className="mt-1 font-semibold text-foreground text-sm">
        {appointment.clientName}
      </p>
      <p className="text-xs text-foreground/80">{appointment.service}</p>
    </div>
  );
}

interface StaffAvatarProps {
  staff: Staff;
  size?: "sm" | "md" | "lg";
}

export function StaffAvatar({ staff, size = "md" }: StaffAvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-12 h-12 text-sm",
    lg: "w-16 h-16 text-base",
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "rounded-full bg-secondary flex items-center justify-center overflow-hidden border-2 border-border",
          sizeClasses[size]
        )}
      >
        {staff.avatar ? (
          <img
            src={staff.avatar}
            alt={staff.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-medium text-muted-foreground">
            {staff.name.split(" ").map((n) => n[0]).join("")}
          </span>
        )}
      </div>
      <span className="text-xs font-medium text-muted-foreground">{staff.name}</span>
    </div>
  );
}
