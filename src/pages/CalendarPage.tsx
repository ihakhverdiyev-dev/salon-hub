import { useState } from "react";
import { ChevronLeft, ChevronRight, RefreshCw, Plus, Settings, ChevronDown, Grip } from "lucide-react";
import { format, addDays, subDays } from "date-fns";
import { AppLayout, PageHeader } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { AppointmentBlock, StaffAvatar, type Appointment, type Staff, type AppointmentColor } from "@/components/calendar/AppointmentBlock";
import { AppointmentModal } from "@/components/calendar/AppointmentModal";
import { toast } from "sonner";

// Mock data for demo
const mockStaff: Staff[] = [
  { id: "1", name: "John", avatar: "" },
  { id: "2", name: "Maria", avatar: "" },
  { id: "3", name: "Wendy", avatar: "" },
  { id: "4", name: "Amy", avatar: "" },
  { id: "5", name: "Michael", avatar: "" },
  { id: "6", name: "Sarah Smith", avatar: "" },
];

const initialAppointments: Appointment[] = [
  { id: "1", clientName: "Brenda Massey", service: "Blow Dry", startTime: "8:00", endTime: "9:00", staffId: "1", color: "coral" },
  { id: "2", clientName: "Alena Geidt", service: "Hair cut", startTime: "8:00", endTime: "9:00", staffId: "2", color: "yellow" },
  { id: "3", clientName: "Phillip Dorwart", service: "Beard Grooming", startTime: "9:00", endTime: "10:15", staffId: "3", color: "teal" },
  { id: "4", clientName: "Craig Mango", service: "Yoga session", startTime: "10:00", endTime: "10:35", staffId: "1", color: "pink" },
  { id: "5", clientName: "James Herwitz", service: "Balinese Massage", startTime: "8:30", endTime: "9:45", staffId: "4", color: "blue" },
  { id: "6", clientName: "Tony Danza", service: "Balinese Massage", startTime: "8:30", endTime: "9:45", staffId: "6", color: "blue" },
  { id: "7", clientName: "Megan White", service: "Hair cut", startTime: "9:00", endTime: "10:15", staffId: "5", color: "coral" },
  { id: "8", clientName: "Amy Jones", service: "Haircut and colour", startTime: "9:45", endTime: "11:15", staffId: "4", color: "blue" },
  { id: "9", clientName: "Laura Marsden", service: "Haircut and colour", startTime: "9:45", endTime: "11:15", staffId: "6", color: "blue" },
  { id: "10", clientName: "Marilyn Carder", service: "Hair and Beard Cut", startTime: "10:00", endTime: "10:35", staffId: "2", color: "yellow" },
  { id: "11", clientName: "Zain Dias", service: "Hair Coloring", startTime: "11:00", endTime: "12:00", staffId: "1", color: "pink" },
  { id: "12", clientName: "Randy Press", service: "Swedish Massage", startTime: "11:15", endTime: "12:30", staffId: "5", color: "coral" },
  { id: "13", clientName: "Desirae Stanton", service: "Blow Dry", startTime: "12:15", endTime: "13:30", staffId: "3", color: "teal" },
  { id: "14", clientName: "Alena Dias", service: "Haircut and colour", startTime: "12:15", endTime: "13:30", staffId: "4", color: "blue" },
  { id: "15", clientName: "Dori Doreau", service: "Haircut and colour", startTime: "12:15", endTime: "13:30", staffId: "6", color: "blue" },
  { id: "16", clientName: "Mary Lee Fisher", service: "Hair Coloring", startTime: "13:15", endTime: "14:30", staffId: "1", color: "pink" },
];

const timeSlots = [
  { time: "8:00", label: "8:00", period: "am" },
  { time: "9:00", label: "9:00", period: "am" },
  { time: "10:00", label: "10:00", period: "am" },
  { time: "11:00", label: "11:00", period: "am" },
  { time: "12:00", label: "12:00", period: "pm" },
  { time: "13:00", label: "1:00", period: "pm" },
  { time: "14:00", label: "2:00", period: "pm" },
  { time: "15:00", label: "3:00", period: "pm" },
];

function getAppointmentsForStaff(appointments: Appointment[], staffId: string): Appointment[] {
  return appointments.filter((apt) => apt.staffId === staffId);
}

function parseTime(time: string): number {
  const parts = time.split(":");
  const hour = parseInt(parts[0]);
  const minute = parseInt(parts[1] || "0");
  return (hour - 8) * 60 + minute;
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToPrevDay = () => setCurrentDate(subDays(currentDate, 1));
  const goToNextDay = () => setCurrentDate(addDays(currentDate, 1));
  const goToToday = () => setCurrentDate(new Date());

  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  const handleEditAppointment = (appointment: Appointment) => {
    toast.info(`Editing appointment for ${appointment.clientName}`);
    handleCloseModal();
  };

  const handleDeleteAppointment = (appointmentId: string) => {
    setAppointments((prev) => prev.filter((apt) => apt.id !== appointmentId));
    toast.success("Appointment cancelled successfully");
    handleCloseModal();
  };

  const selectedStaff = selectedAppointment 
    ? mockStaff.find((s) => s.id === selectedAppointment.staffId) 
    : undefined;

  return (
    <AppLayout>
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2.5">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={goToToday}
            className="font-medium"
          >
            Today
          </Button>
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={goToPrevDay}>
              <ChevronLeft size={18} />
            </Button>
            <span className="min-w-[130px] text-center text-sm font-semibold">
              {format(currentDate, "EEEE d MMM")}
            </span>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={goToNextDay}>
              <ChevronRight size={18} />
            </Button>
          </div>

          <div className="flex items-center gap-2 ml-2">
            <Button variant="outline" size="sm" className="gap-2 text-sm">
              Trendy salon
              <ChevronDown size={14} />
            </Button>
            <Button variant="outline" size="sm" className="gap-2 text-sm">
              Scheduled team
              <ChevronDown size={14} />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Grip size={18} />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings size={18} />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <RefreshCw size={18} />
          </Button>
          <Button variant="outline" size="sm" className="gap-1.5">
            Day
            <ChevronDown size={14} />
          </Button>
          <Button size="sm" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus size={16} />
            Add
            <ChevronDown size={14} />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex flex-1 overflow-x-auto bg-background">
        {/* Time column */}
        <div className="w-[70px] shrink-0 border-r border-border bg-card">
          <div className="h-[80px] border-b border-border" />
          {timeSlots.map((slot) => (
            <div
              key={slot.time}
              className="h-24 border-b border-border/50 px-2 flex flex-col justify-start pt-1"
            >
              <span className="text-xs font-medium text-muted-foreground">{slot.label}</span>
              <span className="text-[10px] text-muted-foreground/70">{slot.period}</span>
            </div>
          ))}
        </div>

        {/* Staff columns */}
        <div className="flex flex-1">
          {mockStaff.map((staff) => (
            <div
              key={staff.id}
              className="min-w-[180px] flex-1 border-r border-border/50 last:border-r-0"
            >
              {/* Staff header */}
              <div className="flex h-[80px] items-center justify-center border-b border-border bg-card">
                <StaffAvatar staff={staff} />
              </div>

              {/* Appointments area */}
              <div className="relative bg-card/50" style={{ height: `${timeSlots.length * 96}px` }}>
                {getAppointmentsForStaff(appointments, staff.id).map((apt) => {
                  const startMinutes = parseTime(apt.startTime);
                  const endMinutes = parseTime(apt.endTime);
                  const duration = endMinutes - startMinutes;
                  const topPx = (startMinutes / 60) * 96;
                  const heightPx = (duration / 60) * 96;

                  return (
                    <div
                      key={apt.id}
                      className="absolute left-1 right-1"
                      style={{
                        top: `${topPx}px`,
                        height: `${heightPx - 4}px`,
                      }}
                    >
                      <AppointmentBlock 
                        appointment={apt} 
                        onClick={() => handleAppointmentClick(apt)}
                      />
                    </div>
                  );
                })}

                {/* Grid lines */}
                {timeSlots.map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 border-b border-border/30"
                    style={{ top: `${(i + 1) * 96}px` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        appointment={selectedAppointment}
        staff={selectedStaff}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onEdit={handleEditAppointment}
        onDelete={handleDeleteAppointment}
      />
    </AppLayout>
  );
}
