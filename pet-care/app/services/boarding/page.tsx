import Link from "next/link"
import { ArrowLeft, Star, Calendar, Clock, MapPin, Phone, CheckCircle, Home, Camera, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BoardingServicePage() {
  const service = {
    name: "Pet Boarding Services",
    description:
      "Safe, comfortable, and loving boarding services for your pets when you're away. Our facility provides a home-away-from-home experience.",
    rating: 4.7,
    reviews: 89,
    priceRange: "$45 - $85/night",
    image: "/placeholder.svg?height=400&width=600",
    services: [
      { name: "Standard Boarding", price: "$45/night", duration: "24 hours" },
      { name: "Deluxe Suite", price: "$65/night", duration: "24 hours" },
      { name: "VIP Package", price: "$85/night", duration: "24 hours" },
      { name: "Daycare Only", price: "$35/day", duration: "8 hours" },
      { name: "Extended Stay (7+ days)", price: "$40/night", duration: "24 hours" },
      { name: "Holiday Boarding", price: "$55/night", duration: "24 hours" },
    ],
    features: [
      "24/7 supervision and care",
      "Spacious indoor/outdoor runs",
      "Daily exercise and playtime",
      "Customized feeding schedules",
      "Medication administration",
      "Daily photo updates",
    ],
    staff: [
      {
        name: "Rachel Green",
        specialty: "Boarding Manager",
        experience: "6 years",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Tom Wilson",
        specialty: "Pet Care Specialist",
        experience: "4 years",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Nina Patel",
        specialty: "Activity Coordinator",
        experience: "3 years",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">PC</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">PetCare Hub</span>
            </Link>
            <Link href="/">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-blue-600">
            Services
          </Link>
          <span>/</span>
          <span className="text-gray-800">Pet Boarding</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 bg-gray-200 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-800">{service.name}</h1>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Available
                  </Badge>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">
                      {service.rating} ({service.reviews} reviews)
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-blue-600">{service.priceRange}</span>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Home className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Home-like</p>
                      <p className="text-xs text-gray-600">Comfortable stay</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Camera className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-medium">Daily Updates</p>
                      <p className="text-xs text-gray-600">Photo reports</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Utensils className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Custom Feeding</p>
                      <p className="text-xs text-gray-600">Your schedule</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <Card>
              <CardHeader>
                <CardTitle>Boarding Options & Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.services.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-600">Duration: {item.duration}</p>
                      </div>
                      <span className="font-semibold text-blue-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facility Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Our Boarding Facility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { image: "/placeholder.svg?height=200&width=300", title: "Indoor Play Area" },
                    { image: "/placeholder.svg?height=200&width=300", title: "Outdoor Exercise Yard" },
                    { image: "/placeholder.svg?height=200&width=300", title: "Comfortable Sleeping Quarters" },
                    { image: "/placeholder.svg?height=200&width=300", title: "Feeding Area" },
                    { image: "/placeholder.svg?height=200&width=300", title: "Grooming Station" },
                    { image: "/placeholder.svg?height=200&width=300", title: "Reception Area" },
                  ].map((facility, index) => (
                    <div key={index} className="space-y-2">
                      <img
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <p className="text-sm font-medium text-center">{facility.title}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>What's Included in Our Boarding Service</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Our Staff */}
            <Card>
              <CardHeader>
                <CardTitle>Meet Our Caring Staff</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {service.staff.map((member, index) => (
                    <div key={index} className="text-center">
                      <Avatar className="w-20 h-20 mx-auto mb-4">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold text-gray-800">{member.name}</h4>
                      <p className="text-sm text-blue-600">{member.specialty}</p>
                      <p className="text-xs text-gray-600">{member.experience} experience</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <CardTitle>Customer Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Jessica T.",
                      rating: 5,
                      date: "1 week ago",
                      comment:
                        "My dog had a wonderful time! The daily photo updates gave me peace of mind during my vacation.",
                    },
                    {
                      name: "Mark L.",
                      rating: 4,
                      date: "2 weeks ago",
                      comment:
                        "Great facility and caring staff. My cat was well taken care of and seemed happy when I picked her up.",
                    },
                    {
                      name: "Patricia H.",
                      rating: 5,
                      date: "1 month ago",
                      comment:
                        "Excellent boarding service. They followed my dog's medication schedule perfectly and he was comfortable throughout his stay.",
                    },
                  ].map((review, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <AvatarFallback>
                              {review.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{review.name}</p>
                            <div className="flex items-center space-x-2">
                              <div className="flex text-yellow-400">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`w-4 h-4 ${star <= review.rating ? "fill-current" : ""}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">{review.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Reserve Boarding
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Pet Name</label>
                  <Input placeholder="Enter your pet's name" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pet Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select pet type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dog">Dog</SelectItem>
                      <SelectItem value="cat">Cat</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Boarding Package</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select package" />
                    </SelectTrigger>
                    <SelectContent>
                      {service.services.map((item, index) => (
                        <SelectItem key={index} value={item.name.toLowerCase().replace(/\s+/g, "-")}>
                          {item.name} - {item.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Check-in Date</label>
                  <Input type="date" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Check-out Date</label>
                  <Input type="date" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input placeholder="Enter your name" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input placeholder="Enter your phone number" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Emergency Contact</label>
                  <Input placeholder="Emergency contact number" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Special Instructions</label>
                  <Textarea placeholder="Feeding schedule, medications, special needs..." rows={3} />
                </div>

                <Button className="w-full" size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Reserve Now
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <p>Or call us directly:</p>
                  <p className="font-semibold text-blue-600">1-800-PET-BOARD</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-gray-600">789 Boarding Blvd, City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-600">1-800-PET-BOARD</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm text-gray-600">Drop-off: 7AM-7PM</p>
                    <p className="text-sm text-gray-600">Pick-up: 7AM-7PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
