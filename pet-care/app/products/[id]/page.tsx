import Link from "next/link"
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = {
    id: params.id,
    name: "Premium Dog Food - Adult Formula",
    price: "$29.99",
    originalPrice: "$39.99",
    rating: 4.8,
    reviews: 156,
    inStock: true,
    brand: "PetNutrition Pro",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "Our Premium Dog Food is specially formulated for adult dogs with high-quality proteins, essential vitamins, and minerals. Made with real chicken as the first ingredient, this nutritious formula supports healthy digestion, strong muscles, and a shiny coat.",
    features: [
      "Real chicken as first ingredient",
      "No artificial colors or flavors",
      "Rich in omega fatty acids",
      "Supports healthy digestion",
      "Veterinarian recommended",
      "Made in USA",
    ],
    specifications: {
      Weight: "15 lbs (6.8 kg)",
      "Life Stage": "Adult",
      "Breed Size": "All sizes",
      Protein: "26% minimum",
      Fat: "16% minimum",
      Fiber: "4% maximum",
      Moisture: "10% maximum",
    },
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
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <ShoppingCart className="w-5 h-5" />
              </Button>
            </div>
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
          <Link href="/" className="hover:text-blue-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-800">Dog Food</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden border">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white rounded-lg overflow-hidden border cursor-pointer hover:border-blue-500"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.brand}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                {product.inStock && (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    In Stock
                  </Badge>
                )}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-blue-600">{product.price}</span>
                <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                <Badge variant="destructive">25% OFF</Badge>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="space-y-4">
                <div className="flex space-x-4">
                  <Button size="lg" className="flex-1">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>

                <Button size="lg" variant="outline" className="w-full bg-transparent">
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-gray-600">Orders over $50</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Secure Payment</p>
                  <p className="text-xs text-gray-600">100% Protected</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="w-5 h-5 text-orange-600" />
                <div>
                  <p className="text-sm font-medium">Easy Returns</p>
                  <p className="text-xs text-gray-600">30-day policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our Premium Dog Food is crafted with the finest ingredients to provide complete and balanced
                    nutrition for adult dogs. Each kibble is packed with real chicken protein, wholesome grains, and
                    essential nutrients that support your dog's overall health and vitality.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    This formula is specially designed to support healthy digestion with prebiotics and probiotics,
                    while omega fatty acids promote a shiny coat and healthy skin. The balanced blend of vitamins and
                    minerals helps maintain strong bones and teeth.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Made in our state-of-the-art facilities in the USA, this dog food meets the highest quality
                    standards and is veterinarian recommended for dogs of all sizes.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                        <span className="font-medium text-gray-800">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Customer Reviews</h3>
                    <Button variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Write Review
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        name: "Sarah M.",
                        rating: 5,
                        date: "2 weeks ago",
                        comment:
                          "My dog absolutely loves this food! His coat is shinier and he has more energy. Highly recommend!",
                      },
                      {
                        name: "Mike R.",
                        rating: 4,
                        date: "1 month ago",
                        comment:
                          "Great quality food. My picky eater finally found something he enjoys. Will definitely reorder.",
                      },
                      {
                        name: "Lisa K.",
                        rating: 5,
                        date: "1 month ago",
                        comment:
                          "Excellent nutrition for my senior dog. Easy to digest and he's been healthier since switching.",
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
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Related Products</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { id: 2, name: "Cat Food Premium", price: "$24.99", image: "/placeholder.svg?height=200&width=200" },
              { id: 3, name: "Dog Treats", price: "$8.99", image: "/placeholder.svg?height=200&width=200" },
              { id: 4, name: "Pet Vitamins", price: "$19.99", image: "/placeholder.svg?height=200&width=200" },
              { id: 5, name: "Food Bowl Set", price: "$15.99", image: "/placeholder.svg?height=200&width=200" },
            ].map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">{product.name}</h4>
                    <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
