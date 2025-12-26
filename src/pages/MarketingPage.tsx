import { AppLayout, PageHeader } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, 
  MessageSquare, 
  Gift, 
  Megaphone, 
  Users, 
  TrendingUp,
  Plus,
  Send
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const campaigns = [
  { 
    id: "1", 
    name: "Summer Sale - 20% Off", 
    type: "Email", 
    status: "active", 
    sent: 847, 
    opened: 423, 
    clicked: 156 
  },
  { 
    id: "2", 
    name: "New Client Welcome", 
    type: "SMS", 
    status: "active", 
    sent: 156, 
    opened: null, 
    clicked: null 
  },
  { 
    id: "3", 
    name: "Birthday Discount", 
    type: "Email", 
    status: "scheduled", 
    sent: 0, 
    opened: 0, 
    clicked: 0 
  },
];

const marketingTools = [
  { 
    title: "Email Campaigns", 
    description: "Send promotional emails to clients", 
    icon: Mail,
    color: "bg-appointment-blue/10 text-appointment-blue" 
  },
  { 
    title: "SMS Marketing", 
    description: "Reach clients via text messages", 
    icon: MessageSquare,
    color: "bg-appointment-green/10 text-appointment-green" 
  },
  { 
    title: "Loyalty Program", 
    description: "Reward returning customers", 
    icon: Gift,
    color: "bg-appointment-purple/10 text-appointment-purple" 
  },
  { 
    title: "Referral System", 
    description: "Encourage client referrals", 
    icon: Users,
    color: "bg-appointment-coral/10 text-appointment-coral" 
  },
];

export default function MarketingPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Marketing"
        subtitle="Grow your business with campaigns and promotions"
        actions={
          <Button className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <Plus size={16} />
            New Campaign
          </Button>
        }
      />

      <div className="p-6 space-y-6">
        {/* Marketing Tools */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {marketingTools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Card key={tool.title} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${tool.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold mb-1">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Active Campaigns */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Active Campaigns</CardTitle>
                <CardDescription>Your running and scheduled campaigns</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <TrendingUp size={14} />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-muted">
                      {campaign.type === "Email" ? (
                        <Mail className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{campaign.name}</h4>
                        <Badge 
                          variant="secondary" 
                          className={campaign.status === "active" ? "bg-status-completed/10 text-status-completed" : "bg-status-pending/10 text-status-pending"}
                        >
                          {campaign.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{campaign.type} Campaign</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <p className="font-medium">{campaign.sent}</p>
                      <p className="text-xs text-muted-foreground">Sent</p>
                    </div>
                    {campaign.opened !== null && (
                      <div className="text-center">
                        <p className="font-medium">{campaign.opened}</p>
                        <p className="text-xs text-muted-foreground">Opened</p>
                      </div>
                    )}
                    {campaign.clicked !== null && (
                      <div className="text-center">
                        <p className="font-medium">{campaign.clicked}</p>
                        <p className="text-xs text-muted-foreground">Clicked</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
