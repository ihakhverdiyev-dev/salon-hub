import { AppLayout, PageHeader } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, MoreHorizontal, Phone, Mail } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const mockClients = [
  { id: "1", name: "Laura Jones", email: "laura.jones@gmail.com", phone: "+44 7360 457812", visits: 12, spent: "£432.50", lastVisit: "22 Feb 2024" },
  { id: "2", name: "James Herwitz", email: "james.h@gmail.com", phone: "+44 7890 123456", visits: 8, spent: "£289.00", lastVisit: "20 Feb 2024" },
  { id: "3", name: "Sarah Mitchell", email: "sarah.m@outlook.com", phone: "+44 7654 321098", visits: 15, spent: "£567.00", lastVisit: "19 Feb 2024" },
  { id: "4", name: "Michael Brown", email: "m.brown@email.com", phone: "+44 7123 456789", visits: 5, spent: "£145.00", lastVisit: "18 Feb 2024" },
  { id: "5", name: "Emily Davis", email: "emily.d@gmail.com", phone: "+44 7999 888777", visits: 22, spent: "£890.00", lastVisit: "17 Feb 2024" },
];

export default function ClientsPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Clients"
        subtitle="View, add, and manage your clients"
        actions={
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus size={16} />
            Add Client
          </Button>
        }
      />

      <div className="p-6">
        {/* Search and Filter */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search clients..." className="pl-10" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter size={16} />
            Filters
          </Button>
        </div>

        {/* Clients Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left p-4 font-medium text-sm text-muted-foreground">Client</th>
                    <th className="text-left p-4 font-medium text-sm text-muted-foreground">Contact</th>
                    <th className="text-left p-4 font-medium text-sm text-muted-foreground">Visits</th>
                    <th className="text-left p-4 font-medium text-sm text-muted-foreground">Total Spent</th>
                    <th className="text-left p-4 font-medium text-sm text-muted-foreground">Last Visit</th>
                    <th className="text-left p-4 font-medium text-sm text-muted-foreground"></th>
                  </tr>
                </thead>
                <tbody>
                  {mockClients.map((client) => (
                    <tr key={client.id} className="border-b border-border hover:bg-muted/30 transition-colors cursor-pointer">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback className="bg-secondary text-secondary-foreground">
                              {client.name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{client.name}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Mail size={14} />
                            {client.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone size={14} />
                            {client.phone}
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm">{client.visits}</td>
                      <td className="p-4 text-sm font-medium text-status-completed">{client.spent}</td>
                      <td className="p-4 text-sm text-muted-foreground">{client.lastVisit}</td>
                      <td className="p-4">
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
