import { AppLayout, PageHeader } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, AlertTriangle, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const inventoryItems = [
  { id: "1", name: "Garnier - Neck Riley", category: "Hair Care", stock: 12, price: "£44", lowStock: false },
  { id: "2", name: "Kerastase - Fresh Affair Spray", category: "Hair Care", stock: 3, price: "£52", lowStock: true },
  { id: "3", name: "Kerastase Discipline Pack", category: "Hair Care", stock: 8, price: "£30", lowStock: false },
  { id: "4", name: "Ordinary Beauty Kit", category: "Skincare", stock: 2, price: "£25", lowStock: true },
  { id: "5", name: "Wella Hair Mist", category: "Hair Care", stock: 15, price: "£28", lowStock: false },
  { id: "6", name: "Caramel Frappe Oil", category: "Body Care", stock: 9, price: "£27", lowStock: false },
  { id: "7", name: "Givenchy L'Interporel", category: "Skincare", stock: 1, price: "£16", lowStock: true },
  { id: "8", name: "Shateria - Aloe Vera", category: "Body Care", stock: 7, price: "£40", lowStock: false },
];

export default function InventoryPage() {
  const lowStockCount = inventoryItems.filter(i => i.lowStock).length;

  return (
    <AppLayout>
      <PageHeader
        title="Inventory"
        subtitle="Manage your product stock and supplies"
        actions={
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus size={16} />
            Add Product
          </Button>
        }
      />

      <div className="p-6 space-y-6">
        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{inventoryItems.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock Items</CardTitle>
              <AlertTriangle className="h-4 w-4 text-status-pending" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-status-pending">{lowStockCount}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Value</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-status-completed">£2,847</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-10" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter size={16} />
            Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {inventoryItems.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="aspect-square rounded-lg bg-muted mb-3 flex items-center justify-center">
                  <Package className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                  </div>
                  {item.lowStock && (
                    <Badge variant="secondary" className="bg-status-pending/10 text-status-pending text-xs">
                      Low
                    </Badge>
                  )}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.stock} in stock</span>
                  <span className="font-semibold">{item.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
