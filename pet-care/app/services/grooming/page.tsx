import Link from "next/link"
import { ArrowLeft, Star, Calendar, Clock, MapPin, Phone, CheckCircle, Scissors, Sparkles, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function GroomingServicePage() {
  const service = {
    name: "Pet Grooming Services",
    description:
      "Professional grooming services to keep your pets looking and feeling their best with experienced groomers and premium products.",
    rating: 4.8,
    reviews: 156,
    priceRange: "$30 - $120",
    image: "/placeholder.svg?height=400&width=600",
    services: [
      { name: "Basic Bath & Brush", price: "$35", duration: "45 min" },
      { name: "Full Grooming Package", price: "$75", duration: "2 hours" },
      { name: "Nail Trimming", price: "$15", duration: "15 min" },
      { name: "Teeth Cleaning", price: "$25", duration: "30 min" },
      { name: "De-shedding Treatment", price: "$45", duration: "60 min" },
      { name: "Flea & Tick Treatment", price: "$40", duration: "45 min" },
    ],
    features: [
      "Certified professional groomers",
      "Premium grooming products",
      "Stress-free environment",
      "All breed expertise",
      "Nail trimming included",
      "Ear cleaning service",
    ],
    groomers: [
      {
        name: "Lisa Thompson",
        specialty: "All Breeds",
        experience: "5 years",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Carlos Martinez",
        specialty: "Large Dogs",
        experience: "7 years",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Amy Chen",
        specialty: "Cats & Small Dogs",
        experience: "4 years",
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
          <span className="text-gray-800">Pet Grooming</span>
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
                    <Scissors className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Professional</p>
                      <p className="text-xs text-gray-600">Certified groomers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-medium">Premium</p>
                      <p className="text-xs text-gray-600">Quality products</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="text-sm font-medium">Gentle Care</p>
                      <p className="text-xs text-gray-600">Stress-free</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <Card>
              <CardHeader>
                <CardTitle>Grooming Services & Pricing</CardTitle>
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

            {/* Before/After Gallery */}
            <Card>
              <CardHeader>
                <CardTitle>Before & After Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { before: "/placeholder.svg?height=200&width=300", after: "/placeholder.svg?height=200&width=300" },
                    { before: "/placeholder.svg?height=200&width=300", after: "/placeholder.svg?height=200&width=300" },
                  ].map((gallery, index) => (
                    <div key={index} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium mb-2">Before</p>
                          <img
                            src={gallery.before || "/placeholder.svg"}
                            alt="Before grooming"
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-2">After</p>
                          <img
                            src={gallery.after || "/placeholder.svg"}
                            alt="After grooming"
                            className="w-full h-32 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Our Grooming Service</CardTitle>
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

            {/* Our Groomers */}
            <Card>
              <CardHeader>
                <CardTitle>Meet Our Professional Groomers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {service.groomers.map((groomer, index) => (
                    <div key={index} className="text-center">
                      <Avatar className="w-20 h-20 mx-auto mb-4">
                        <AvatarImage src={groomer.image || "/placeholder.svg"} alt={groomer.name} />
                        <AvatarFallback>
                          {groomer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold text-gray-800">{groomer.name}</h4>
                      <p className="text-sm text-blue-600">{groomer.specialty}</p>
                      <p className="text-xs text-gray-600">{groomer.experience} experience</p>
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
                      name: "Amanda R.",
                      rating: 5,
                      date: "1 week ago",
                      comment: "Lisa did an amazing job with my Golden Retriever. He looks fantastic and smells great!",
                    },
                    {
                      name: "David M.",
                      rating: 5,
                      date: "2 weeks ago",
                      comment:
                        "Professional service and my cat was so calm throughout the grooming session. Highly recommend!",
                    },
                    {
                      name: "Sophie K.",
                      rating: 4,
                      date: "3 weeks ago",
                      comment:
                        "Great attention to detail and my dog's nails were trimmed perfectly. Will definitely return.",
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
                  Schedule Grooming
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
                      <SelectItem value="rabbit">Rabbit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pet Size</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (under 25 lbs)</SelectItem>
                      <SelectItem value="medium">Medium (25-60 lbs)</SelectItem>
                      <SelectItem value="large">Large (60+ lbs)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
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
                  <label className="block text-sm font-medium mb-2">Preferred Date</label>
                  <Input type="date" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="09:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
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
                  <label className="block text-sm font-medium mb-2">Special Requests</label>
                  <Textarea placeholder="Any special needs or requests..." rows={3} />
                </div>

                <Button className="w-full" size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <p>Or call us directly:</p>
                  <p className="font-semibold text-blue-600">1-800-GROOM-PET</p>
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
                    <p className="text-sm text-gray-600">456 Grooming Lane, City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-600">1-800-GROOM-PET</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm text-gray-600">Tue-Sat: 9AM-6PM</p>
                    <p className="text-sm text-gray-600">Sun-Mon: Closed</p>
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
