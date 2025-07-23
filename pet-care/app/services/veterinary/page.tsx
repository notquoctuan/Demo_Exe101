import Link from "next/link"
import { ArrowLeft, Star, Calendar, Clock, MapPin, Phone, CheckCircle, Users, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function VeterinaryServicePage() {
  const service = {
    name: "Veterinary Care",
    description:
      "Comprehensive veterinary services for your beloved pets with experienced doctors and modern facilities.",
    rating: 4.9,
    reviews: 203,
    priceRange: "$50 - $200",
    image: "/placeholder.svg?height=400&width=600",
    services: [
      { name: "General Health Checkup", price: "$75", duration: "30 min" },
      { name: "Vaccination Package", price: "$120", duration: "45 min" },
      { name: "Dental Cleaning", price: "$180", duration: "60 min" },
      { name: "Surgery Consultation", price: "$150", duration: "45 min" },
      { name: "Emergency Care", price: "$200+", duration: "Variable" },
      { name: "Microchipping", price: "$50", duration: "15 min" },
    ],
    features: [
      "Licensed veterinarians",
      "Modern diagnostic equipment",
      "Emergency services available",
      "Surgical procedures",
      "Preventive care programs",
      "Pet insurance accepted",
    ],
    doctors: [
      {
        name: "Dr. Sarah Johnson",
        specialty: "General Practice",
        experience: "8 years",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Dr. Michael Chen",
        specialty: "Surgery",
        experience: "12 years",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Dr. Emily Rodriguez",
        specialty: "Emergency Care",
        experience: "6 years",
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
          <span className="text-gray-800">Veterinary Care</span>
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
                    <Users className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Expert Team</p>
                      <p className="text-xs text-gray-600">Licensed vets</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Certified</p>
                      <p className="text-xs text-gray-600">State licensed</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-600" />
                    <div>
                      <p className="text-sm font-medium">Emergency</p>
                      <p className="text-xs text-gray-600">24/7 available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <Card>
              <CardHeader>
                <CardTitle>Services & Pricing</CardTitle>
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

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Our Veterinary Service</CardTitle>
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

            {/* Our Doctors */}
            <Card>
              <CardHeader>
                <CardTitle>Meet Our Veterinarians</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {service.doctors.map((doctor, index) => (
                    <div key={index} className="text-center">
                      <Avatar className="w-20 h-20 mx-auto mb-4">
                        <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
                        <AvatarFallback>
                          {doctor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold text-gray-800">{doctor.name}</h4>
                      <p className="text-sm text-blue-600">{doctor.specialty}</p>
                      <p className="text-xs text-gray-600">{doctor.experience} experience</p>
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
                      name: "Jennifer L.",
                      rating: 5,
                      date: "1 week ago",
                      comment: "Dr. Johnson was amazing with my nervous cat. Very professional and caring service.",
                    },
                    {
                      name: "Robert K.",
                      rating: 5,
                      date: "2 weeks ago",
                      comment: "Emergency visit was handled perfectly. Quick response and excellent care for my dog.",
                    },
                    {
                      name: "Maria S.",
                      rating: 4,
                      date: "3 weeks ago",
                      comment: "Great facility and knowledgeable staff. My pet felt comfortable throughout the visit.",
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
                  Schedule Examination
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
                      <SelectItem value="bird">Bird</SelectItem>
                      <SelectItem value="rabbit">Rabbit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
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
                  <label className="block text-sm font-medium mb-2">Additional Notes</label>
                  <Textarea placeholder="Any specific concerns or requirements..." rows={3} />
                </div>

                <Button className="w-full" size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>

                <div className="text-center text-sm text-gray-600">
                  <p>Or call us directly:</p>
                  <p className="font-semibold text-blue-600">1-800-VET-CARE</p>
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
                    <p className="text-sm text-gray-600">123 Pet Care Street, City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-600">1-800-VET-CARE</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-sm text-gray-600">Mon-Fri: 8AM-6PM</p>
                    <p className="text-sm text-gray-600">Sat-Sun: 9AM-4PM</p>
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
