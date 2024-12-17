import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Phone } from "lucide-react";

interface BookingCardProps {
  time: string;
  activity: string;
  contactInfo: string;
}

export function BookingCard({ time, activity, contactInfo }: BookingCardProps) {
  const date = new Date(time);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card className="w-full mb-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{activity}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{formattedDate}</span>
        </div>
        <div className="flex items-center mb-2">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">{formattedTime}</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          <span className="text-sm">{contactInfo}</span>
        </div>
      </CardContent>
    </Card>
  );
}
