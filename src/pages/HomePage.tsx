import { AppLayout, PageHeader } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, DollarSign, Users, TrendingUp, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    title: "Today's Bookings",
    value: "24",
    change: "+3 from yesterday",
    icon: Calendar,
    color: "text-appointment-blue",
    bgColor: "bg-appointment-blue/10",
  },
  {
    title: "Revenue Today",
    value: "£1,420",
    change: "+12% from avg",
    icon: DollarSign,
    color: "text-status-completed",
    bgColor: "bg-status-completed/10",
  },
  {
    title: "Active Clients",
    value: "847",
    change: "+23 this week",
    icon: Users,
    color: "text-appointment-purple",
    bgColor: "bg-appointment-purple/10",
  },
  {
    title: "Avg Rating",
    value: "4.8",
    change: "128 reviews",
    icon: Star,
    color: "text-appointment-yellow",
    bgColor: "bg-appointment-yellow/10",
  },
];

const upcomingAppointments = [
  { time: "9:00 AM", client: "Sarah Johnson", service: "Hair Cut & Color", staff: "Maria" },
  { time: "9:30 AM", client: "Michael Brown", service: "Beard Trim", staff: "John" },
  { time: "10:00 AM", client: "Emily Davis", service: "Manicure", staff: "Wendy" },
  { time: "10:30 AM", client: "James Wilson", service: "Swedish Massage", staff: "Amy" },
];

export default function HomePage() {
  return (
    <AppLayout>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back! Here's what's happening today."
        actions={
          <Link to="/calendar">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              View Calendar
            </Button>
          </Link>
        }
      />

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="border-border">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Upcoming Appointments */}
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>Next 4 appointments for today</CardDescription>
                </div>
                <Clock className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((apt, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="text-sm font-medium text-muted-foreground w-16">
                      {apt.time}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{apt.client}</p>
                      <p className="text-xs text-muted-foreground">{apt.service}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">{apt.staff}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/calendar">
                  <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>New Booking</span>
                  </Button>
                </Link>
                <Link to="/clients">
                  <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
                    <Users className="h-5 w-5" />
                    <span>Add Client</span>
                  </Button>
                </Link>
                <Link to="/sales">
                  <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
                    <DollarSign className="h-5 w-5" />
                    <span>Quick Sale</span>
                  </Button>
                </Link>
                <Link to="/analytics">
                  <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>View Reports</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
