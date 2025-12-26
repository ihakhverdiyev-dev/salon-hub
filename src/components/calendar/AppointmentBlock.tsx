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
  pink: "bg-appointment-pink border-l-[hsl(340,70%,55%)]",
  yellow: "bg-appointment-yellow border-l-[hsl(45,80%,50%)]",
  blue: "bg-appointment-blue border-l-[hsl(200,70%,55%)]",
  green: "bg-appointment-green border-l-[hsl(160,45%,50%)]",
  coral: "bg-appointment-coral border-l-[hsl(16,75%,55%)]",
  purple: "bg-appointment-purple border-l-[hsl(270,50%,60%)]",
  teal: "bg-appointment-teal border-l-[hsl(175,50%,45%)]",
  orange: "bg-appointment-orange border-l-[hsl(30,80%,50%)]",
};

export function AppointmentBlock({ appointment, onClick }: AppointmentBlockProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "h-full rounded-lg p-2.5 cursor-pointer transition-all duration-200 border-l-4",
        "hover:shadow-lg hover:scale-[1.01] active:scale-100 overflow-hidden",
        colorClasses[appointment.color]
      )}
    >
      <p className="text-[11px] font-semibold text-foreground/80 truncate">
        {appointment.startTime} - {appointment.endTime}
      </p>
      <p className="font-bold text-foreground text-sm truncate leading-tight mt-0.5">
        {appointment.clientName}
      </p>
      <p className="text-xs text-foreground/70 truncate">{appointment.service}</p>
    </div>
  );
}

interface StaffAvatarProps {
  staff: Staff;
  size?: "sm" | "md" | "lg";
}

const avatarColors = [
  "from-rose-400 to-pink-500",
  "from-amber-400 to-orange-500", 
  "from-emerald-400 to-teal-500",
  "from-blue-400 to-indigo-500",
  "from-violet-400 to-purple-500",
  "from-cyan-400 to-sky-500",
];

export function StaffAvatar({ staff, size = "md" }: StaffAvatarProps) {
  const sizeClasses = {
    sm: "w-10 h-10 text-xs",
    md: "w-14 h-14 text-sm",
    lg: "w-20 h-20 text-lg",
  };

  // Get consistent color based on staff id
  const colorIndex = parseInt(staff.id) % avatarColors.length;
  const gradientClass = avatarColors[colorIndex];

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={cn(
          "rounded-full flex items-center justify-center overflow-hidden ring-2 ring-background shadow-md",
          `bg-gradient-to-br ${gradientClass}`,
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
          <span className="font-semibold text-white drop-shadow-sm">
            {staff.name.split(" ").map((n) => n[0]).join("")}
          </span>
        )}
      </div>
      <span className="text-xs font-medium text-foreground">{staff.name}</span>
    </div>
  );
}
