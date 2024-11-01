'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const activities = [
  { id: 1, 
    name: 'Catch and eat your own river fish', 
    description: 'Fish guarantied!', duration: '4 hours', price: '750,-', 
    longDescription: `Join us at our barge for a fun day of fishing! We wil find the best local spots for trout and guarantee that there wil be fish!`
  },
  { id: 2, name: 'River safari', description: 'Get a sight of the rare fish-eagle!', duration: '2 hours', price: '500 ,-', 
    longDescription: `Embark on a thrilling River Safari! Cruise up the river in a high-speed RIB boat, spotting fish eagles and beavers in their natural habitat. Our local guide shares captivating stories along the way, making this a perfect mix of adventure and discovery. Book your River Safari now for an unforgettable experience!`
    }
]

const timeSlots = ['09:00', '11:00', '13:00', '15:00']

export function CampingActivitiesOnepager() {
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)

  const handleBooking = (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the booking data to your server
    console.log('Booking submitted:', { activity: selectedActivity, date: selectedDate, time: selectedTime })
    // Reset selection
    setSelectedActivity(null)
    setSelectedDate(undefined)
    setSelectedTime(undefined)
  }

  return (
    <div className="container mx-auto space-y-12">
      <header className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/FishOnHook.JPEG"
          alt="Scenic camping landscape"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Camping Activities</h1>
          <p className="text-xl md:text-2xl text-center">Explore Nature, Create Memories</p>
        </div>
      </header>

      <section id="activities" className="space-y-8 p-4">
        <h2 className="text-2xl font-semibold mb-4">Our Activities</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <Card key={activity.id} className="flex flex-col">
              <Image
                src="/CookingFish.JPEG"
                alt={activity.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{activity.name}</CardTitle>
                <CardDescription>{activity.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{activity.longDescription}</p>
                <p>Duration: {activity.duration}</p>
                <p>Price: {activity.price}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => setSelectedActivity(activity)}>Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="booking" className="space-y-8 p-4">
        <h2 className="text-2xl font-semibold mb-4">Book an Activity</h2>
        {!selectedActivity ? (
          <Card>
            <CardHeader>
              <CardTitle>Select an Activity</CardTitle>
              <CardDescription>Choose an activity from the list above to start your booking.</CardDescription>
            </CardHeader>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>{selectedActivity.name}</CardTitle>
              <CardDescription>{selectedActivity.description}</CardDescription>
              <Button variant="ghost" onClick={() => setSelectedActivity(null)} className="p-0">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back to activities
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Select Date:</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </div>
                {selectedDate && (
                  <div>
                    <h3 className="font-semibold mb-2">Select Time:</h3>
                    <Select onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button disabled={!selectedDate || !selectedTime}>Book Now</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <form onSubmit={handleBooking}>
                    <DialogHeader>
                      <DialogTitle>Confirm Booking</DialogTitle>
                      <DialogDescription>
                        Please provide your details to complete the booking.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input id="name" className="col-span-3" required />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input id="email" type="email" className="col-span-3" required />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Confirm Booking</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        )}
      </section>

      <footer className="text-center text-muted-foreground p-4">
        <p>&copy; 2023 Camping Activities. All rights reserved.</p>
      </footer>
    </div>
  )
}