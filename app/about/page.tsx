import Image from "next/image"
import { UserLayout } from "@/components/user-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, CheckCircle, Clock, Globe, Heart, Lightbulb, Shield, Target, Users } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Emily Rodriguez",
      role: "Founder & CEO",
      bio: "Dr. Rodriguez founded MedPro Surgical Supplies in 2018 with a vision to revolutionize medical equipment distribution. With over 20 years of surgical experience, she understands the critical needs of healthcare professionals.",
      image: "https://tse1.mm.bing.net/th?id=OIP.dJQYb_qAziSYiEwxsXNXOwHaE8&pid=Api&P=0&h=220",
    },
    {
      name: "Michael Chang",
      role: "Head of Product Procurement",
      bio: "Michael ensures that only the highest-quality surgical instruments and medical supplies meet our rigorous standards. His expertise in medical equipment procurement is unparalleled.",
      image: "https://tse4.mm.bing.net/th?id=OIP.WpDBAsnbXB_P8R2yjljyyAHaFj&pid=Api&P=0&h=220",
    },
    {
      name: "Sarah Thompson",
      role: "Regulatory Compliance Manager",
      bio: "Sarah leads our compliance team, ensuring that every product meets strict FDA and international medical standards. Her attention to detail guarantees patient and medical professional safety.",
      image: "https://m.media-amazon.com/images/M/MV5BZDg0MDdhZjgtNTIyZS00NDdkLWI0ODQtMTU5ZmYzOTJhYzgwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UY720_.jpg",
    },
    {
      name: "David Kim",
      role: "Clinical Operations Director",
      bio: "With a background in hospital administration, David ensures our product line meets the evolving needs of modern healthcare institutions.",
      image: "https://tse4.mm.bing.net/th?id=OIP.j3Gt5Bas_5Baj00ebTfFZwHaEe&pid=Api&P=0&h=220",
    },
  ]

  const milestones = [
    {
      year: "2018",
      title: "Company Founding",
      description: "MedPro Surgical Supplies launched with a mission to provide high-quality medical equipment to healthcare professionals.",
    },
    {
      year: "2020",
      title: "Expanded Product Range",
      description: "Introduced comprehensive surgical instrument lines and expanded into specialized medical supply categories.",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Launched advanced online procurement platform for hospitals and medical practices.",
    },
    {
      year: "2022",
      title: "International Certification",
      description: "Achieved ISO 13485 certification for medical device quality management.",
    },
    {
      year: "2024",
      title: "Sustainability Initiative",
      description: "Introduced eco-friendly medical supply options and sustainable packaging solutions.",
    },
  ]

  const values = [
    {
      icon: <Quality />,
      title: "Precision",
      description: "We deliver medical-grade precision in every product, understanding that accuracy saves lives.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Patient Safety",
      description: "Our commitment to patient safety drives every decision we make in product selection and distribution.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Compliance",
      description: "Rigorous adherence to medical regulations and international healthcare standards.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovation",
      description: "Continuously sourcing cutting-edge medical technologies and innovative surgical solutions.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Support",
      description: "Providing world-class medical supplies to healthcare institutions globally.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Professional Care",
      description: "Supporting healthcare professionals with comprehensive, reliable medical supply solutions.",
    },
  ]

  const stats = [
    { value: "50+", label: "Countries Served" },
    { value: "5,000+", label: "Product Catalog" },
    { value: "1,000+", label: "Hospital Clients" },
    { value: "4.9/5", label: "Professional Rating" },
  ]

  const partners = ["Medtronic", "Johnson & Johnson", "Stryker", "Philips", "GE Healthcare", "Siemens", "Cardinal Health", "ACON"]

  return (
    <UserLayout>
      <div className="container px-4 py-8 mx-auto">
        {/* Previous sections remain the same */}
        <section className="relative rounded-xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70">
            <Image src="https://img.freepik.com/free-photo/medical-workers-preparing-operation_23-2148533825.jpg" alt="About Us" fill className="object-cover mix-blend-overlay opacity-30" />
          </div>
          <div className="relative z-10 px-6 py-16 md:py-24 text-white text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About MedPro Surgical Supplies</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Delivering precision medical solutions that support healthcare professionals in providing exceptional patient care.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="space-y-4 text-lg">
                <p>
                  MedPro Surgical Supplies was founded in 2018 by Dr. Emily Rodriguez, a surgeon who recognized the critical need for reliable, high-quality medical equipment.
                </p>
                <p>
                  Our journey began with a simple mission: to bridge the gap between medical technology and healthcare professionals. We understood that the right equipment could make a significant difference in patient outcomes.
                </p>
                <p>
                  We meticulously curate our product lines, personally vetting each item to ensure it meets the highest standards of precision, safety, and performance. Our commitment goes beyond selling products – we're dedicated to supporting healthcare professionals.
                </p>
                <p>
                  Today, we serve medical institutions in over 50 countries, offering a comprehensive range of surgical supplies, diagnostic equipment, and innovative medical technologies.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="https://img.freepik.com/premium-photo/surgical-operation-hd-8k-wallpaper-stock-photographic-image_1030895-34819.jpg?w=2000" alt="Our Story" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Company Milestones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:translate-x-0 translate-x-4"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2"></div>
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary transform md:translate-x-[-16px] translate-x-0 flex items-center justify-center text-white font-bold">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div className="md:w-1/2 ml-12 md:ml-0 bg-card p-6 rounded-lg shadow-sm">
                    <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 bg-muted/30 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-card rounded-lg p-6 flex items-center justify-center h-24">
                <span className="text-xl font-bold">{partner}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg flex flex-col items-center text-center">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Medical Grade Quality</h3>
              <p>Certified to meet the highest international medical equipment standards.</p>
            </div>
            <div className="bg-card p-6 rounded-lg flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">FDA Compliance</h3>
              <p>Strict adherence to FDA regulations and medical device safety protocols.</p>
            </div>
            <div className="bg-card p-6 rounded-lg flex flex-col items-center text-center">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">ISO Certified</h3>
              <p>ISO 13485 certification for comprehensive quality management in medical supplies.</p>
            </div>
          </div>
        </section>
      </div>
    </UserLayout>
  )
}

// Custom Quality icon component
function Quality() {
  return (
    <div className="h-10 w-10 text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>
  )
}