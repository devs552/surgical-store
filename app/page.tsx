import Link from "next/link";
import Image from "next/image";
import { UserLayout } from "@/components/user-layout";
import { AccessoryCard } from "@/components/accessory-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { accessories } from "@/lib/data";

export default function Home() {
  const featuredAccessories = accessories.slice(0, 6);

  const testimonials = [
    {
      id: 1,
      text: "High-quality instruments that provide precision and reliability in surgeries. Highly recommended!",
      name: "Dr. John Doe",
      role: "Surgeon",
      image: "https://tse1.mm.bing.net/th?id=OIP.3WPMJM9PciebOG9Tgl171QHaHa&pid=Api&P=0&h=220",
    },
    {
      id: 2,
      text: "These surgical tools have improved my practice significantly. Great customer support as well!",
      name: "Dr. Sarah Lee",
      role: "Cardiologist",
      image: "https://miro.medium.com/max/960/1*0sF_oCQc5Kdom4kpLVd-7w.jpeg",
    },
    {
      id: 3,
      text: "Exceptional quality and fast delivery. I trust this brand for all my surgical needs.",
      name: "Dr. James Smith",
      role: "Orthopedic Surgeon",
      image: "https://tse2.mm.bing.net/th?id=OIP.YF00FTSnUiyYSz8IGnqpAgHaEc&pid=Api&P=0&h=220",
    },
  ];

  return (
    <UserLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white">
        <div className="container px-4 py-20 md:py-32 mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-xl">
              <div className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
                Trusted Surgical Supplies
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Premium Surgical Equipment for Professionals
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                Explore our high-quality surgical tools, designed for precision and reliability in medical procedures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-white/90 font-medium px-8">
                  <Link href="/accessories">Shop Now</Link>
                </Button>
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-white/90 font-medium px-8">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <Image
                src="https://tse4.mm.bing.net/th?id=OIP.Zli-Ila1g-QPbkHtVHAxaQHaDt&pid=Api&P=0&h=220"
                alt="Surgical Instruments"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container px-4 py-12 mx-auto">
        {/* Featured Accessories Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Surgical Tools</h2>
            <p className="text-lg text-muted-foreground">Discover our most popular surgical equipment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAccessories.map((accessory) => (
              <AccessoryCard key={accessory.id} accessory={accessory} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Read testimonials from medical professionals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-muted overflow-hidden mr-4">
                      <Image src={testimonial.image} alt={testimonial.name} width={48} height={48} className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Certified Quality</h3>
              <p className="text-muted-foreground">We provide medical-grade surgical tools with certified precision.</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Reliable Delivery</h3>
              <p className="text-muted-foreground">Fast and secure shipping to hospitals and clinics worldwide.</p>
            </div>
            <div className="bg-card rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">24/7 Customer Support</h3>
              <p className="text-muted-foreground">Expert assistance to help you find the right medical tools.</p>
            </div>
          </div>
        </section>
      </div>
    </UserLayout>
  );
}
