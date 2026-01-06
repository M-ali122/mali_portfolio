"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Smartphone,
  Server,
  Database,
  Code,
  Mail,
  Phone,
  Linkedin,
  Github,
  Star,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { File } from "lucide-react";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Exact match */}
      <div className="px-4 pt-4 flex justify-center sticky top-0 z-50" data-aos="fade-down">
        <nav className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center">
          <div className="flex items-center space-x-8">
            <button
              className="text-white font-medium bg-transparent border-none cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              M.Ali
            </button>
            <div className="hidden md:flex space-x-6 text-sm text-gray-300">
              <Link href="#services" className="hover:text-white">
                Services
              </Link>
              <Link href="#work" className="hover:text-white">
                Work
              </Link>
              <Link href="#portfolio" className="hover:text-white">
                Portfolio
              </Link>
              <Link href="#contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section - Exact layout */}
      <section className="px-6 py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-gray-500 text-lg mb-2">Hello</p>
                <h1 className="text-6xl font-bold leading-tight">
                  I'm <span className="text-orange-500">Muhammad Ali</span>,<br />
                  Flutter Developer
                </h1>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
                I'm an experienced Flutter developer specializing in building high-quality cross-platform
                 mobile applications. I also have strong expertise in backend development with PHP Laravel,
                  allowing me to deliver robust full-stack solutions. My focus is on creating seamless, 
                  responsive user experiences with clean and maintainable code.
              </p>

              {/* <div className="flex space-x-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-sm font-medium">
                  Portfolio
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full text-sm font-medium"
                >
                  Hire Me
                </Button>
              </div> */}

              <div className="flex space-x-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-sm font-medium">
                  Portfolio
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full text-sm font-medium"
                >
                  Hire Me
                </Button>
                {/* Add CV Download */}
                <Link href="/cv/Muhammad's Resume.pdf" download="Muhammad_Ali_Resume.pdf">
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full text-sm font-medium"
                  >
                    Download CV
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-12 pt-8">
                <div>
                  <div className="text-4xl font-bold text-black mb-1">2+</div>
                  <div className="text-gray-600 text-sm leading-tight">
                    Years
                    <br />
                    Experience
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-1">15+</div>
                  <div className="text-gray-600 text-sm leading-tight">
                    Completed
                    <br />
                    Projects
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <div className="flex justify-center" data-aos="zoom-in">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
                <Avatar className="absolute inset-0 w-80 h-80">
                  <AvatarImage 
                    src="/mhd.jpg"
                    alt="Muhammad Ali"
                    className="object-cover w-full h-full rounded-full"
                  />
                  <AvatarFallback className="text-6xl bg-gray-200 text-gray-600">
                    MA
                  </AvatarFallback>
                </Avatar>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Services Section - Exact match */}
      <section id="services" className="px-6 py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              My <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-gray-600 max-w-lg">
              I provide comprehensive mobile and backend development services, delivering high-quality solutions
              tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Flutter Development Card */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden group" data-aos="zoom-in">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative p-6">
                <div className="absolute top-4 right-4">
                  {/* <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                    <ExternalLink className="w-4 h-4 text-gray-600" />
                  </div> */}
                </div>
                <div className="h-full flex items-center justify-center">
                  <img
                    src="/icons/laravel.png"
                    alt="Flutter"
                    className="w-80 h-30"
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">Back-End Development</h3>
              </CardContent>
            </Card>

            {/* Backend Development Card */}
            <Card className="bg-orange-500 text-white border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden group" data-aos="zoom-in" data-aos-delay="100">
              <div className="h-48 bg-gradient-to-br from-orange-600 to-red-600 relative p-6">
                <div className="absolute top-4 right-4">
                  {/* <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div> */}
                </div>
                <div className="h-full flex items-center justify-center">
                  <img
                    src="/icons/flutter.svg"
                    alt="Backend"
                    className="w-40 h-40"
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Flutter Development</h3>
              </CardContent>
            </Card>

            {/* API Integration Card */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden group" data-aos="zoom-in" data-aos-delay="200">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 relative p-6">
                <div className="absolute top-4 right-4">
                  {/* <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                    <ExternalLink className="w-4 h-4 text-gray-600" />
                  </div> */}
                </div>
                <div className="h-full flex items-center justify-center">
                  <img
                    src="/icons/api.svg"
                    alt="API Integration"
                    className="w-60 h-60"
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">API Integration</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Experience - Exact timeline */}
      <section id="work" className="px-6 py-16" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-16 text-center">My Work Experience</h2>

          <div className="space-y-12">
            {/* AZ Solution */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 pt-1">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-black">Mobile Application Developer</h3>
                    <p className="text-orange-500 font-medium">AZ Solutions, Hyderabad</p>
                  </div>
                  <span className="text-sm text-gray-500">Aug 2024 - Present</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Building and maintaining scalable Flutter apps for e-commerce, food, and ride-sharing platforms with features like real-time tracking and payment integration.
                </p>
              </div>
            </div>

            {/* YAS Solution */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 pt-1">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-black">Flutter Developer</h3>
                    <p className="text-orange-500 font-medium">YAS Solution</p>
                  </div>
                  <span className="text-sm text-gray-500">Jan 2024 - July 2024</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Developed cross-platform apps using Flutter and GetX with Firebase and REST API integrations for services like taxi booking, rewards, and wallet systems.
                </p>
              </div>
            </div>

            {/* Freelancing */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 pt-1">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-black">Freelance Flutter Developer</h3>
                    <p className="text-gray-600 font-medium">Self-employed, Remote</p>
                  </div>
                  <span className="text-sm text-gray-500">2023 - 2024</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Developed custom hybrid applications for clients. Focused on seamless API integration and ensuring
                  data consistency in real-time applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Hire Me Section - Exact layout */}
      <section className="px-6 py-16 bg-gray-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center" data-aos="zoom-in">
              {/* <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
                <Avatar className="absolute inset-0 w-80 h-80">
                  <AvatarImage
                    src="/mali.jpg"
                    alt="Muhammad Ali"
                    className="w-full h-full object-cover"
                  />
                  <AvatarFallback className="text-6xl bg-gray-200 text-gray-600">MA</AvatarFallback>
                </Avatar>
              </div> */}
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-black leading-tight">
                Why You <span className="text-orange-500">Hire Me</span> For
                <br />
                Your Next Project?
              </h2>

              <p className="text-gray-600 leading-relaxed">
                As a dedicated Flutter and backend developer, I bring expertise in creating scalable mobile applications
                with modern architecture patterns. My experience spans from enterprise-level applications to custom
                client solutions, ensuring high-quality deliverables.
              </p>

              <div className="grid grid-cols-2 gap-12">
                <div>
                  <div className="text-4xl font-bold text-black mb-1">2+</div>
                  <div className="text-gray-600 text-sm leading-tight">
                    Year's of
                    <br />
                    Development
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-black mb-1">1.5+</div>
                  <div className="text-gray-600 text-sm leading-tight">
                    Experience in
                    <br />
                    Mobile Dev
                  </div>
                </div>
              </div>

              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full">Hire Me</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Exact match */}
      <section id="portfolio" className="px-6 py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-12">
            <h2 className="text-4xl font-bold text-black leading-tight">
              Let's Have a Look at
              <br />
              my <span className="text-orange-500">Portfolio</span>
            </h2>
            {/* <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-full"
            >
              See All Work
            </Button> */}
          </div>

          {/* Portfolio Grid */}
          {/* <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl h-48 relative overflow-hidden">
              <div className="absolute bottom-4 left-4">
                <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                </div>
              </div>
              <div className="h-full flex items-center justify-center">
                <Smartphone className="w-12 h-12 text-blue-500" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl h-48 relative overflow-hidden">
              <div className="absolute bottom-4 left-4">
                <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                </div>
              </div>
              <div className="h-full flex items-center justify-center">
                <Code className="w-12 h-12 text-green-500" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl h-48 relative overflow-hidden">
              <div className="absolute bottom-4 left-4">
                <div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                </div>
              </div>
              <div className="h-full flex items-center justify-center">
                <Server className="w-12 h-12 text-purple-500" />
              </div>
            </div>
          </div> */}

          {/* Featured Project */}
          <div className="bg-white rounded-2xl shadow-sm border p-8" data-aos="zoom-in">
            <div className="grid gap-12">
              {/* Project 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-black">Animates App - Dating app for anime lovers in the US and Canada!</h3>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Animates App - Dating app for anime lovers in the US and Canada!
                    A location-based dating application designed specifically for anime enthusiasts across the US and Canada. Built using
                    Flutter and Firebase, the app delivers a smooth and personalized user experience tailored to its unique audience.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-64 bg-gray-100 border border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                    <img
                      src="/animates.png"
                      alt="Snappy App Preview"
                      className="w-full h-64 object-cover rounded-xl shadow-sm border"
                    />
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-black">Snappy – Canadian-Based Multi-Solution-eCommerce Application</h3>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Snappy is a Canada-based multi-solution eCommerce food delivery platform built using Flutter and Firebase. The
                    system consists of three interconnected mobile applications tailored for drivers, vendors, and users to ensure
                    seamless food ordering and delivery experience.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-64 bg-gray-100 border border-dashed border-gray-300 rounded-xl flex items-center justify-center">
                    <img
                      src="/snappy.png"
                      alt="Lost & Found Preview"
                      className="w-full h-64 object-cover rounded-xl shadow-sm border"
                    />
                  </div>
                </div>
              </div>
              {/* Project 3 - GOZOLT Driver App */}
<div className="grid lg:grid-cols-2 gap-12 items-center">
  <div>
    <div className="flex items-center gap-3 mb-4">
      <h3 className="text-2xl font-bold text-black">GOZOLT – Driver Application (European-Based)</h3>
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
    </div>
    <p className="text-gray-600 mb-6 leading-relaxed">
      The <strong>GOZOLT Driver App</strong> is designed specifically for drivers to manage ride requests, 
      track earnings, and handle availability efficiently. Built using <strong>Flutter</strong>, 
      <strong>Firebase</strong>, and <strong>Laravel</strong>, it offers seamless ride tracking, 
      real-time updates, and a smooth user experience.  
    </p>
    <a
      href="https://play.google.com/store/apps/details?id=com.Primoo.partner&pcampaignid=web_share"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 font-semibold underline hover:text-blue-800 transition"
    >
      Download on Play Store
    </a>
  </div>
  <div className="flex items-center justify-center">
    <div className="w-full h-64 bg-gray-100 border border-dashed border-gray-300 rounded-xl flex items-center justify-center">
      <img
        src="/gozolt.png"
        alt="GOZOLT Driver App Preview"
        className="w-full h-64 object-cover rounded-xl shadow-sm border"
      />
    </div>
  </div>
</div>

{/* Project 4 - GOZOLT GO Rider App */}
<div className="grid lg:grid-cols-2 gap-12 items-center">
  <div>
    <div className="flex items-center gap-3 mb-4">
      <h3 className="text-2xl font-bold text-black">GOZOLT GO – Rider Application (European-Based)</h3>
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
    </div>
    <p className="text-gray-600 mb-6 leading-relaxed">
      The <strong>GOZOLT GO Rider App</strong> is a European-based multi-service platform that allows users 
      to book rides, shop through integrated eCommerce, and access rental services – all in one app.  
      Developed with <strong>Flutter</strong>, <strong>Firebase</strong>, and <strong>Laravel</strong>, it 
      ensures a fast, reliable, and user-friendly experience.  
    </p>
    <a
      href="https://play.google.com/store/apps/details?id=com.Gozolt.user&pcampaignid=web_share"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 font-semibold underline hover:text-blue-800 transition"
    >
      Download on Play Store
    </a>
  </div>
  <div className="flex items-center justify-center">
    <div className="w-full h-64 bg-gray-100 border border-dashed border-gray-300 rounded-xl flex items-center justify-center">
      <img
        src="/gozolt_go.png"
        alt="GOZOLT GO Rider App Preview"
        className="w-full h-64 object-cover rounded-xl shadow-sm border"
      />
    </div>
  </div>
</div>
</div>
</div>
        </div>
      </section>

      {/* Project CTA - Orange gradient */}
      {/* <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-0 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Have An Awesome Project
                <br />
                <span className="text-yellow-200">Idea? Let's Discuss</span>
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Ready to bring your mobile app idea to life? Let's collaborate and create something amazing together.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-full">
                  Send Message
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Skills Tags */}
      <section className="px-6 py-8 bg-gray-50" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <Badge className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium">Flutter Development</Badge>
            <span className="text-gray-400 text-lg">+</span>
            <Badge className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium">Mobile App Development</Badge>
            <span className="text-gray-400 text-lg">+</span>
            <Badge className="bg-green-500 text-white px-4 py-2 rounded-full font-medium">Backend Development</Badge>
            <span className="text-gray-400 text-lg">+</span>
            <Badge className="bg-purple-500 text-white px-4 py-2 rounded-full font-medium">API Integration</Badge>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <section id="contact" className="px-6 py-16 bg-gray-900 text-white" data-aos="fade-up">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Let's <span className="text-orange-500">Connect</span> There
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <h3 className="text-xl font-bold">Muhammad Ali</h3>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">+92-3136676801</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">muhammadalijanwary1@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">www.linkedin.com/in/muhammad-ali-516116267</span>
                </div>
                <div className="flex items-center gap-4">
                  <File className="w-5 h-5 text-orange-500" />
                  <Link
                    href="/cv/Muhammad's Resume.pdf"
                    download="Muhammad_Ali_Resume.pdf"
                    className="text-gray-300 hover:text-orange-500 hover:underline"
                  >
                    Download My Resume
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <form
                      action="https://formsubmit.co/muhammadalijanwary1@gmail.com"
                      method="POST"
                      className="space-y-4"
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                      />
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Your Message"
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 resize-none"
                      ></textarea>

                      {/* Hidden field to prevent spam */}
                      <input type="hidden" name="_captcha" value="false" />

                      {/* Redirect after submission (optional) */}
                      <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

                      <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Hire Me
                      </button>
                    </form>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 border-t border-gray-800" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">Copyright © 2024 Muhammad Ali. All Rights Reserved.</div>
            <div className="flex space-x-6">
              <Link href="www.linkedin.com/in/muhammad-ali-516116267" className="hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/M-ali122" className="hover:text-orange-500 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="mailto:muhammadalijanwary1@gmail.com" className="hover:text-orange-500 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
