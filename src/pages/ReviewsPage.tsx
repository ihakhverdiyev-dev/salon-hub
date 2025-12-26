import { AppLayout, PageHeader } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ThumbsUp, MessageSquare, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const reviewStats = {
  average: 4.8,
  total: 128,
  breakdown: [
    { stars: 5, count: 89, percent: 69 },
    { stars: 4, count: 28, percent: 22 },
    { stars: 3, count: 8, percent: 6 },
    { stars: 2, count: 2, percent: 2 },
    { stars: 1, count: 1, percent: 1 },
  ],
};

const recentReviews = [
  {
    id: "1",
    client: "Sarah Mitchell",
    rating: 5,
    date: "2 days ago",
    service: "Hair Cut & Color",
    staff: "Maria",
    comment: "Absolutely loved my experience! Maria is incredibly talented and understood exactly what I wanted. The salon is beautiful and the service was exceptional.",
  },
  {
    id: "2",
    client: "James Wilson",
    rating: 5,
    date: "3 days ago",
    service: "Swedish Massage",
    staff: "Amy",
    comment: "Best massage I've ever had. Amy is a true professional. The atmosphere was so relaxing. Will definitely be back!",
  },
  {
    id: "3",
    client: "Emily Brown",
    rating: 4,
    date: "5 days ago",
    service: "Manicure",
    staff: "Wendy",
    comment: "Great service and lovely results. The only reason for 4 stars is the wait time was a bit longer than expected.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={16}
          className={star <= rating ? "fill-appointment-yellow text-appointment-yellow" : "text-border"}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <AppLayout>
      <PageHeader
        title="Reviews"
        subtitle="Monitor and respond to client feedback"
        actions={
          <Button variant="outline" className="gap-2">
            <MessageSquare size={16} />
            Request Reviews
          </Button>
        }
      />

      <div className="p-6 space-y-6">
        {/* Stats Overview */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Rating Summary */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Overall Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-bold">{reviewStats.average}</span>
                <div>
                  <StarRating rating={5} />
                  <p className="text-sm text-muted-foreground mt-1">{reviewStats.total} reviews</p>
                </div>
              </div>
              <div className="space-y-2">
                {reviewStats.breakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-2">
                    <span className="text-sm w-4">{item.stars}</span>
                    <Star size={12} className="fill-appointment-yellow text-appointment-yellow" />
                    <Progress value={item.percent} className="flex-1 h-2" />
                    <span className="text-sm text-muted-foreground w-8">{item.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Review Insights</CardTitle>
              <CardDescription>Performance trends this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <TrendingUp className="h-6 w-6 mx-auto mb-2 text-status-completed" />
                  <p className="text-2xl font-bold">+12</p>
                  <p className="text-sm text-muted-foreground">New Reviews</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <ThumbsUp className="h-6 w-6 mx-auto mb-2 text-appointment-blue" />
                  <p className="text-2xl font-bold">92%</p>
                  <p className="text-sm text-muted-foreground">Positive</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <MessageSquare className="h-6 w-6 mx-auto mb-2 text-appointment-purple" />
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-muted-foreground">Response Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Reviews */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reviews</CardTitle>
            <CardDescription>Latest feedback from your clients</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentReviews.map((review) => (
                <div key={review.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          {review.client.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{review.client}</p>
                        <p className="text-sm text-muted-foreground">
                          {review.service} • {review.staff}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <StarRating rating={review.rating} />
                      <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                  <div className="mt-3">
                    <Button variant="outline" size="sm">Reply</Button>
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
