import { AppLayout, PageHeader } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Clock, 
  CreditCard, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Users,
  ChevronRight
} from "lucide-react";

const settingsCategories = [
  {
    title: "Business Settings",
    description: "Manage your salon details and locations",
    icon: Building2,
    items: ["Business Profile", "Locations", "Opening Hours"],
  },
  {
    title: "Booking Settings",
    description: "Configure your booking preferences",
    icon: Clock,
    items: ["Booking Rules", "Online Booking", "Cancellation Policy"],
  },
  {
    title: "Payments",
    description: "Manage payment methods and billing",
    icon: CreditCard,
    items: ["Payment Methods", "Invoices", "Tax Settings"],
  },
  {
    title: "Notifications",
    description: "Set up reminders and alerts",
    icon: Bell,
    items: ["Email Notifications", "SMS Settings", "Push Notifications"],
  },
  {
    title: "Security",
    description: "Manage access and permissions",
    icon: Shield,
    items: ["Password", "Two-Factor Auth", "Login History"],
  },
  {
    title: "Branding",
    description: "Customize your salon's appearance",
    icon: Palette,
    items: ["Logo & Colors", "Email Templates", "Receipt Design"],
  },
  {
    title: "Online Presence",
    description: "Manage your online booking page",
    icon: Globe,
    items: ["Booking Page", "Widget", "Custom Domain"],
  },
  {
    title: "Team Permissions",
    description: "Control staff access levels",
    icon: Users,
    items: ["Roles", "Permissions", "Access Logs"],
  },
];

export default function SetupPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Setup"
        subtitle="Configure your salon settings and preferences"
      />

      <div className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {settingsCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{category.title}</CardTitle>
                        <CardDescription className="text-sm">{category.description}</CardDescription>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <Button key={item} variant="secondary" size="sm" className="text-xs">
                        {item}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
