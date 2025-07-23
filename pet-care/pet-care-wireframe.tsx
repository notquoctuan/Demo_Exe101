import { Search, ShoppingCart, User, MapPin, Phone, Mail, Star, Heart, Scissors, Stethoscope, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">PC</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">PetCare Hub</h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
                Products
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
                Services
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
                Stores
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">
                About
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search products..." className="pl-10 w-64" />
              </div>
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">Everything Your Pet Needs in One Place</h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with local pet shops, book services, and shop for premium pet products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Find Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Dog Food", icon: "🐕", color: "bg-orange-100" },
              { name: "Cat Food", icon: "🐱", color: "bg-purple-100" },
              { name: "Toys", icon: "🎾", color: "bg-green-100" },
              { name: "Accessories", icon: "🦴", color: "bg-blue-100" },
              { name: "Health Care", icon: "💊", color: "bg-red-100" },
              { name: "Grooming", icon: "✂️", color: "bg-yellow-100" },
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <h4 className="font-semibold text-gray-800">{category.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Pet Care Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Scissors className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Pet Grooming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Professional grooming services for all pet breeds</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Bath & Brush</li>
                  <li>• Nail Trimming</li>
                  <li>• Hair Styling</li>
                  <li>• Teeth Cleaning</li>
                </ul>
                <Button className="w-full mt-4">Book Appointment</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Veterinary Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Complete health care for your beloved pets</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Health Checkups</li>
                  <li>• Vaccinations</li>
                  <li>• Emergency Care</li>
                  <li>• Surgery</li>
                </ul>
                <Button className="w-full mt-4">Find Vet</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Pet Boarding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Safe and comfortable boarding for your pets</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Daily Exercise</li>
                  <li>• Feeding Schedule</li>
                  <li>• 24/7 Supervision</li>
                  <li>• Play Time</li>
                </ul>
                <Button className="w-full mt-4">Check Availability</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Featured Products</h3>
            <Button variant="outline">View All Products</Button>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400">Product Image</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">(24 reviews)</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">Premium Dog Food</h4>
                  <p className="text-sm text-gray-600 mb-3">High-quality nutrition for adult dogs</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">$29.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Store Locator */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Find Pet Shops Near You</h3>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center mb-6">
                <span className="text-gray-600">Interactive Map Component</span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Input placeholder="Enter your location" className="flex-1" />
                <Button>
                  <MapPin className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((store) => (
                  <Card key={store}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-800">Happy Paws Pet Store</h4>
                          <p className="text-sm text-gray-600">123 Main Street, City, State</p>
                          <div className="flex items-center mt-2">
                            <div className="flex text-yellow-400">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-4 h-4 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600 ml-2">4.8 (156 reviews)</span>
                          </div>
                        </div>
                        <Badge variant="secondary">2.3 mi</Badge>
                      </div>
                      <div className="flex space-x-4 mt-4">
                        <Button size="sm" variant="outline">
                          <Phone className="w-4 h-4 mr-2" />
                          Call
                        </Button>
                        <Button size="sm" variant="outline">
                          <MapPin className="w-4 h-4 mr-2" />
                          Directions
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Stay Updated with Pet Care Tips</h3>
          <p className="text-xl mb-8 opacity-90">Get the latest news, tips, and exclusive offers</p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input placeholder="Enter your email" className="bg-white text-gray-800" />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">PC</span>
                </div>
                <span className="text-xl font-bold">PetCare Hub</span>
              </div>
              <p className="text-gray-400">Your one-stop destination for all pet care needs.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Store Locator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>1-800-PET-CARE</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>info@petcarehub.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PetCare Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
