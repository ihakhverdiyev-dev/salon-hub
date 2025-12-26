import { AppLayout, PageHeader } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const mockStaff = [
  { id: "1", name: "John Miller", role: "Senior Stylist", email: "john@salon.com", status: "active", appointments: 8 },
  { id: "2", name: "Maria Garcia", role: "Hair Colorist", email: "maria@salon.com", status: "active", appointments: 6 },
  { id: "3", name: "Wendy Chen", role: "Nail Technician", email: "wendy@salon.com", status: "active", appointments: 5 },
  { id: "4", name: "Amy Johnson", role: "Massage Therapist", email: "amy@salon.com", status: "break", appointments: 4 },
  { id: "5", name: "Michael Brown", role: "Barber", email: "michael@salon.com", status: "active", appointments: 7 },
  { id: "6", name: "Sarah Smith", role: "Junior Stylist", email: "sarah@salon.com", status: "active", appointments: 3 },
];

export default function StaffPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Staff"
        subtitle="Manage your team members and their schedules"
        actions={
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus size={16} />
            Add Staff
          </Button>
        }
      />

      <div className="p-6">
        {/* Search and Filter */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search staff..." className="pl-10" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter size={16} />
            Filters
          </Button>
        </div>

        {/* Staff Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockStaff.map((staff) => (
            <Card key={staff.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {staff.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{staff.name}</h3>
                      <p className="text-sm text-muted-foreground">{staff.role}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal size={16} />
                  </Button>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant={staff.status === "active" ? "default" : "secondary"} className={staff.status === "active" ? "bg-status-completed" : ""}>
                        {staff.status === "active" ? "Active" : "On Break"}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {staff.appointments} appointments today
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
