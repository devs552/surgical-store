"use client"

import type React from "react"

import { useState } from "react"
import { UserLayout } from "@/components/user-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { MapPin, Phone, Mail, Stethoscope, Briefcase } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData)
    toast({
      title: "Inquiry Received",
      description: "Our medical supply team will respond promptly.",
    })
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <UserLayout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contact MediSupply Solutions</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Have questions about our surgical supplies, medical equipment, or custom orders? 
              Our expert team is ready to assist healthcare professionals with their specific needs.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground mr-3">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Customer Support</h3>
                  <p className="text-muted-foreground">+1 (888) MEDI-SUPP</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground mr-3">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">support@medisupplysolutions.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground mr-3">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Headquarters</h3>
                  <p className="text-muted-foreground">456 Medical Park Drive, Healthcare District, HC 67890</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground mr-3">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Sales & Procurement</h3>
                  <p className="text-muted-foreground">sales@medisupplysolutions.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Send us a Professional Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Professional Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Inquiry Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Detailed Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your medical supply requirements, product inquiries, or support needs."
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Professional Inquiry
              </Button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Distribution Center</h2>
          <p className="text-muted-foreground mb-6">
            Centrally located to efficiently serve healthcare facilities across the region. 
            Our state-of-the-art distribution center ensures quick and reliable medical supply delivery.
          </p>

          <Card className="overflow-hidden border">
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1648482801994!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Distribution Center Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Business Hours Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Business Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Regular Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:30 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">
                  Emergency support available 24/7 for critical medical supply needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-4">Emergency Support</h3>
                <p className="text-muted-foreground mb-2">
                  For urgent medical supply requirements outside of business hours, 
                  our emergency response team is always on standby.
                </p>
                <div className="flex space-x-4">
                  <Button variant="default" className="mt-2">
                    24/7 Emergency Line
                  </Button>
                  <Button variant="outline" className="mt-2">
                    Urgent Orders
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">What are your shipping capabilities?</h3>
              <p className="text-muted-foreground mb-4">
                We provide expedited shipping to hospitals, clinics, and medical facilities nationwide. 
                Specialized cold chain and sterile packaging available for sensitive medical supplies.
              </p>

              <h3 className="text-lg font-medium mb-2">Do you handle custom medical equipment orders?</h3>
              <p className="text-muted-foreground">
                Yes, we specialize in custom medical equipment procurement and can handle complex, specialized orders for healthcare institutions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">What certification standards do you meet?</h3>
              <p className="text-muted-foreground mb-4">
                We are FDA-registered, ISO 13485 certified, and comply with all current medical device and supply regulations.
              </p>

              <h3 className="text-lg font-medium mb-2">How do you ensure product quality?</h3>
              <p className="text-muted-foreground">
                Each product undergoes rigorous quality control. We provide detailed traceability and maintain comprehensive quality assurance documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}