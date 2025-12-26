import { AppLayout, PageHeader } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, CreditCard, TrendingUp, ShoppingBag, Calendar, Download } from "lucide-react";

const salesStats = [
  { title: "Today's Sales", value: "£1,420", change: "+12%", icon: DollarSign },
  { title: "Transactions", value: "32", change: "+8", icon: CreditCard },
  { title: "Average Order", value: "£44.38", change: "+5%", icon: TrendingUp },
  { title: "Products Sold", value: "18", change: "+3", icon: ShoppingBag },
];

const recentTransactions = [
  { id: "1", client: "Laura Jones", service: "Manicure", amount: "£30", time: "11:55 am", staff: "Wendy" },
  { id: "2", client: "James Herwitz", service: "Hair Cut", amount: "£35", time: "11:30 am", staff: "John" },
  { id: "3", client: "Sarah Mitchell", service: "Gel Nails", amount: "£45", time: "11:00 am", staff: "Wendy" },
  { id: "4", client: "Michael Brown", service: "Beard Trim", amount: "£15", time: "10:30 am", staff: "John" },
  { id: "5", client: "Emily Davis", service: "Swedish Massage", amount: "£65", time: "10:00 am", staff: "Amy" },
];

export default function SalesPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Sales"
        subtitle="Track your revenue and transactions"
        actions={
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
              <Download size={16} />
              Export
            </Button>
            <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              <DollarSign size={16} />
              Quick Sale
            </Button>
          </div>
        }
      />

      <div className="p-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {salesStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-status-completed mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Transactions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Today's completed sales</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Calendar size={14} />
                Today
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTransactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-muted-foreground w-16">{tx.time}</div>
                    <div>
                      <p className="font-medium text-sm">{tx.client}</p>
                      <p className="text-xs text-muted-foreground">{tx.service} • {tx.staff}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-status-completed">{tx.amount}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
