import { useState } from "react";
import { ChevronLeft, ChevronRight, RefreshCw, Plus, Settings, ChevronDown } from "lucide-react";
import { format, addDays, subDays } from "date-fns";
import { AppLayout, PageHeader } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { AppointmentBlock, StaffAvatar, type Appointment, type Staff, type AppointmentColor } from "@/components/calendar/AppointmentBlock";

// Mock data for demo
const mockStaff: Staff[] = [
  { id: "1", name: "John", avatar: "" },
  { id: "2", name: "Maria", avatar: "" },
  { id: "3", name: "Wendy", avatar: "" },
  { id: "4", name: "Amy", avatar: "" },
  { id: "5", name: "Michael", avatar: "" },
  { id: "6", name: "Sarah Smith", avatar: "" },
];

const mockAppointments: Appointment[] = [
  { id: "1", clientName: "Brenda Massey", service: "Blow Dry", startTime: "8:00", endTime: "9:00", staffId: "1", color: "pink" },
  { id: "2", clientName: "Alena Geidt", service: "Hair cut", startTime: "8:00", endTime: "9:00", staffId: "2", color: "yellow" },
  { id: "3", clientName: "Phillip Dorwart", service: "Beard Grooming", startTime: "9:00", endTime: "10:15", staffId: "2", color: "teal" },
  { id: "4", clientName: "Craig Mango", service: "Yoga session", startTime: "10:00", endTime: "10:35", staffId: "1", color: "pink" },
  { id: "5", clientName: "James Herwitz", service: "Balinese Massage", startTime: "8:30", endTime: "9:45", staffId: "4", color: "blue" },
  { id: "6", clientName: "Tony Danza", service: "Balinese Massage", startTime: "8:30", endTime: "9:45", staffId: "6", color: "blue" },
  { id: "7", clientName: "Megan White", service: "Hair cut", startTime: "9:00", endTime: "10:15", staffId: "5", color: "coral" },
  { id: "8", clientName: "Amy Jones", service: "Haircut and colour", startTime: "9:45", endTime: "11:15", staffId: "4", color: "blue" },
  { id: "9", clientName: "Laura Marsden", service: "Haircut and colour", startTime: "9:45", endTime: "11:15", staffId: "6", color: "blue" },
  { id: "10", clientName: "Marilyn Carder", service: "Hair and Beard Cut", startTime: "10:00", endTime: "10:35", staffId: "2", color: "yellow" },
  { id: "11", clientName: "Zain Dias", service: "Hair Coloring", startTime: "11:00", endTime: "12:00", staffId: "1", color: "pink" },
  { id: "12", clientName: "Randy Press", service: "Swedish Massage", startTime: "11:15", endTime: "12:30", staffId: "5", color: "coral" },
  { id: "13", clientName: "Desirae Stanton", service: "Blow Dry", startTime: "12:15", endTime: "1:30", staffId: "2", color: "teal" },
  { id: "14", clientName: "Alena Dias", service: "Haircut and colour", startTime: "12:15", endTime: "1:30", staffId: "4", color: "blue" },
  { id: "15", clientName: "Dori Doreau", service: "Haircut and colour", startTime: "12:15", endTime: "1:30", staffId: "6", color: "blue" },
  { id: "16", clientName: "Mary Lee Fisher", service: "Hair Coloring", startTime: "1:15", endTime: "2:30", staffId: "1", color: "pink" },
];

const timeSlots = [
  "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm"
];

function getAppointmentsForStaff(staffId: string): Appointment[] {
  return mockAppointments.filter((apt) => apt.staffId === staffId);
}

function getTimePosition(time: string): number {
  const [hourPart, period] = time.split(" ");
  const [hour, minute = "0"] = hourPart.split(":");
  let h = parseInt(hour);
  if (period === "pm" && h !== 12) h += 12;
  if (period === "am" && h === 12) h = 0;
  return (h - 8) * 60 + parseInt(minute);
}

function parseSimpleTime(time: string): number {
  const parts = time.split(":");
  const hour = parseInt(parts[0]);
  const minute = parseInt(parts[1] || "0");
  return (hour - 8) * 60 + minute;
}

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPrevDay = () => setCurrentDate(subDays(currentDate, 1));
  const goToNextDay = () => setCurrentDate(addDays(currentDate, 1));
  const goToToday = () => setCurrentDate(new Date());

  return (
    <AppLayout>
      <PageHeader
        title="Calendar"
        subtitle={format(currentDate, "EEEE, d MMMM yyyy")}
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Settings size={16} />
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <RefreshCw size={16} />
            </Button>
            <Button size="sm" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <Plus size={16} />
              Add
              <ChevronDown size={14} />
            </Button>
          </div>
        }
      />

      {/* Calendar Controls */}
      <div className="flex items-center gap-4 border-b border-border bg-card px-6 py-3">
        <Button
          variant="outline"
          size="sm"
          onClick={goToToday}
        >
          Today
        </Button>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={goToPrevDay}>
            <ChevronLeft size={16} />
          </Button>
          <span className="min-w-[140px] text-center text-sm font-medium">
            {format(currentDate, "EEEE d MMM")}
          </span>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={goToNextDay}>
            <ChevronRight size={16} />
          </Button>
        </div>

        <div className="flex items-center gap-2 ml-4">
          <Button variant="outline" size="sm" className="gap-2">
            Trendy salon
            <ChevronDown size={14} />
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            Scheduled team
            <ChevronDown size={14} />
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm">
            Day
            <ChevronDown size={14} className="ml-1" />
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex flex-1 overflow-x-auto bg-card">
        {/* Time column */}
        <div className="w-16 shrink-0 border-r border-border bg-muted/30">
          <div className="h-20 border-b border-border" />
          {timeSlots.map((time) => (
            <div
              key={time}
              className="h-24 border-b border-border px-2 py-1"
            >
              <span className="text-xs text-muted-foreground">{time}</span>
            </div>
          ))}
        </div>

        {/* Staff columns */}
        <div className="flex flex-1">
          {mockStaff.map((staff) => (
            <div
              key={staff.id}
              className="min-w-[180px] flex-1 border-r border-border last:border-r-0"
            >
              {/* Staff header */}
              <div className="flex h-20 items-center justify-center border-b border-border bg-muted/30">
                <StaffAvatar staff={staff} />
              </div>

              {/* Appointments area */}
              <div className="relative" style={{ height: `${timeSlots.length * 96}px` }}>
                {getAppointmentsForStaff(staff.id).map((apt) => {
                  const startMinutes = parseSimpleTime(apt.startTime);
                  const endMinutes = parseSimpleTime(apt.endTime);
                  const duration = endMinutes - startMinutes;
                  const topPx = (startMinutes / 60) * 96;
                  const heightPx = (duration / 60) * 96;

                  return (
                    <div
                      key={apt.id}
                      className="absolute left-1 right-1 p-1"
                      style={{
                        top: `${topPx}px`,
                        height: `${heightPx}px`,
                      }}
                    >
                      <AppointmentBlock appointment={apt} />
                    </div>
                  );
                })}

                {/* Grid lines */}
                {timeSlots.map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0 right-0 border-b border-border"
                    style={{ top: `${(i + 1) * 96}px` }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
