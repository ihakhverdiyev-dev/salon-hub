import { AppLayout, PageHeader } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, ChevronDown, Clock, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const serviceCategories = [
  {
    name: "Hair Services",
    services: [
      { id: "1", name: "Hair Cut", duration: "45 min", price: "£35", popular: true },
      { id: "2", name: "Hair Coloring", duration: "2 hr", price: "£85", popular: true },
      { id: "3", name: "Blow Dry", duration: "30 min", price: "£25", popular: false },
      { id: "4", name: "Hair Treatment", duration: "1 hr", price: "£55", popular: false },
    ],
  },
  {
    name: "Beard & Grooming",
    services: [
      { id: "5", name: "Beard Trim", duration: "20 min", price: "£15", popular: true },
      { id: "6", name: "Full Grooming", duration: "45 min", price: "£45", popular: false },
      { id: "7", name: "Hot Towel Shave", duration: "30 min", price: "£25", popular: false },
    ],
  },
  {
    name: "Massage & Wellness",
    services: [
      { id: "8", name: "Swedish Massage", duration: "1 hr", price: "£65", popular: true },
      { id: "9", name: "Balinese Massage", duration: "1 hr 15 min", price: "£75", popular: true },
      { id: "10", name: "Hot Stone Therapy", duration: "1 hr 30 min", price: "£95", popular: false },
    ],
  },
];

export default function ServicesPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Services"
        subtitle="Manage your service offerings and pricing"
        actions={
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus size={16} />
            Add Service
          </Button>
        }
      />

      <div className="p-6">
        {/* Search and Filter */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search services..." className="pl-10" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter size={16} />
            Category
            <ChevronDown size={14} />
          </Button>
        </div>

        {/* Services by Category */}
        <div className="space-y-6">
          {serviceCategories.map((category) => (
            <Card key={category.name}>
              <CardHeader>
                <CardTitle className="text-lg">{category.name}</CardTitle>
                <CardDescription>{category.services.length} services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {category.services.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{service.name}</h4>
                          {service.popular && (
                            <Badge variant="secondary" className="text-xs">Popular</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {service.duration}
                          </span>
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-status-completed">
                        {service.price}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
