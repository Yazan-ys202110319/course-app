"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Using the Header component */}
      <Header />

      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Learn, Grow, Succeed
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Welcome to Qatar University&apos;s Learning Platform. Discover courses, connect with instructors, and expand your knowledge.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/auth/signin">
                    <Button size="lg" className="mr-4">Sign In</Button>
                  </Link>
                  <Link href="/courses">
                    <Button size="lg" variant="outline">Browse Courses</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {/* Image Carousel */}
                <div className="w-full h-80">
                  <Carousel className="w-full">
                    <CarouselContent>
                      <CarouselItem>
                        <div className="relative h-80 w-full">
                          <Image 
                            src="/images/1.jpg" 
                            alt="Qatar University Campus" 
                            fill 
                            className="rounded-lg object-cover"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-80 w-full">
                          <Image 
                            src="/images/2.jpg" 
                            alt="Qatar University Facilities" 
                            fill 
                            className="rounded-lg object-cover"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-80 w-full">
                          <Image 
                            src="/images/3.jpg" 
                            alt="Qatar University Students" 
                            fill 
                            className="rounded-lg object-cover"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </CarouselItem>
                      <CarouselItem>
                        <div className="relative h-80 w-full">
                          <Image 
                            src="/images/4.jpg" 
                            alt="Qatar University Students" 
                            fill 
                            className="rounded-lg object-cover"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Qatar University</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Overview</h3>
                <p className="text-gray-600 leading-relaxed">
                  Qatar University (QU), established in 1977, is Qatar&apos;s leading higher education institution, 
                  known for academic and research excellence. It offers high-quality education aligned with 
                  international standards, earning multiple accreditations. QU comprises 12 colleges, including 
                  Arts and Sciences, Business, Engineering, Medicine, and Law, and provides 51 bachelor&apos;s and 
                  53 master&apos;s programs tailored to national needs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Research is a key focus, supported by a state-of-the-art Research Complex and 18 research centers, 
                  with over 500 projects in 130+ countries. The university emphasizes community engagement, 
                  student development, and leadership while fostering partnerships with industry, government, 
                  and academia to drive Qatar&apos;s economic and social progress.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Mission</h3>
                <p className="text-gray-600 leading-relaxed italic border-l-4 border-primary pl-4 py-2">
                  Qatar University is a beacon of thought and creativity, with an Arabic-Islamic identity and a global outlook. 
                  The University aims to cultivate a conscious, influential generation that aspires to have a constructive impact. 
                  It is a center for innovation and for the development of knowledge-based solutions that respond to 
                  major national challenges in support of the sustainable human, social, economic, and environmental 
                  development of the State of Qatar.
                </p>
                
                {/* YouTube Video */}
                <div className="mt-6 aspect-video w-full rounded-lg overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/wBoVS5hlhHc?si=hEq-KpwRcfECzVcK4" 
                    title="Qatar University Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform offers a comprehensive learning experience with these key features.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              {/* Feature 1 */}
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="rounded-full p-2 bg-primary/10">
                  <svg
                    className=" h-6 w-6 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Extensive Courses</h3>
                <p className="text-sm text-gray-500">
                  Access a wide range of courses covering various academic subjects.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="rounded-full p-2 bg-primary/10">
                  <svg
                    className=" h-6 w-6 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-2" />
                    <path d="M12 19l9-9" />
                    <path d="m21 12-4-4" />
                    <path d="m12 10 4 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Expert Instructors</h3>
                <p className="text-sm text-gray-500">
                  Learn from highly qualified professors and industry experts.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
                <div className="rounded-full p-2 bg-primary/10">
                  <svg
                    className=" h-6 w-6 text-primary"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Performance Tracking</h3>
                <p className="text-sm text-gray-500">
                  Monitor your progress and achievements through our dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Using the Footer component */}
      <Footer />
    </div>
  );
}
