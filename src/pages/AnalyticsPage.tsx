import { AppLayout, PageHeader } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, TrendingDown, Users, Calendar, DollarSign, Download } from "lucide-react";

const metrics = [
  { title: "Total Revenue", value: "£24,580", change: "+14%", trend: "up", period: "vs last month" },
  { title: "Total Bookings", value: "342", change: "+8%", trend: "up", period: "vs last month" },
  { title: "New Clients", value: "47", change: "+23%", trend: "up", period: "vs last month" },
  { title: "Avg. Ticket", value: "£71.87", change: "-2%", trend: "down", period: "vs last month" },
];

const topServices = [
  { name: "Hair Cut & Color", bookings: 89, revenue: "£7,565" },
  { name: "Swedish Massage", bookings: 56, revenue: "£3,640" },
  { name: "Manicure", bookings: 78, revenue: "£2,340" },
  { name: "Beard Trim", bookings: 45, revenue: "£675" },
  { name: "Blow Dry", bookings: 38, revenue: "£950" },
];

const topStaff = [
  { name: "Maria Garcia", bookings: 67, revenue: "£5,230" },
  { name: "John Miller", bookings: 58, revenue: "£4,890" },
  { name: "Amy Johnson", bookings: 52, revenue: "£4,160" },
  { name: "Wendy Chen", bookings: 49, revenue: "£3,420" },
];

export default function AnalyticsPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Analytics"
        subtitle="Insights and performance metrics"
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline">Last 30 Days</Button>
            <Button variant="outline" className="gap-2">
              <Download size={16} />
              Export
            </Button>
          </div>
        }
      />

      <div className="p-6 space-y-6">
        {/* Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-status-completed" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  )}
                  <span className={metric.trend === "up" ? "text-status-completed text-xs" : "text-destructive text-xs"}>
                    {metric.change}
                  </span>
                  <span className="text-xs text-muted-foreground">{metric.period}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Daily revenue for the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-muted/50 rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Chart visualization will appear here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tables */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Top Services */}
          <Card>
            <CardHeader>
              <CardTitle>Top Services</CardTitle>
              <CardDescription>Most booked services this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topServices.map((service, index) => (
                  <div
                    key={service.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium text-sm">{service.name}</p>
                        <p className="text-xs text-muted-foreground">{service.bookings} bookings</p>
                      </div>
                    </div>
                    <span className="font-semibold text-status-completed">{service.revenue}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Staff */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
              <CardDescription>Staff revenue leaders this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topStaff.map((staff, index) => (
                  <div
                    key={staff.name}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-medium">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium text-sm">{staff.name}</p>
                        <p className="text-xs text-muted-foreground">{staff.bookings} bookings</p>
                      </div>
                    </div>
                    <span className="font-semibold text-status-completed">{staff.revenue}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
