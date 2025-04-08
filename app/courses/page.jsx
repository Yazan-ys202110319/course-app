"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
  {
    id: "CMPS151",
    title: "Programming Concepts",
    description: "Introduction to programming using Python with focus on problem-solving techniques.",
    instructor: "Prof. Mahmoud",
    level: "Beginner"
  },
  {
    id: "CMPS251",
    title: "Object-Oriented Programming",
    description: "Concepts of object-oriented programming using Java language.",
    instructor: "Prof. Rehab",
    level: "Intermediate"
  },
  {
    id: "CMPS303",
    title: "Data Structures",
    description: "Implementation of various data structures and their applications.",
    instructor: "Prof. Mahmoud",
    level: "Advanced"
  }
];

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">QU</span> Learning Platform
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/courses" className="text-sm font-medium hover:underline underline-offset-4">
            Courses
          </Link>
          <Link href="/auth/signin" className="text-sm font-medium hover:underline underline-offset-4">
            Log in
          </Link>
        </nav>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Available Courses</h1>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed">
              Browse our selection of courses taught by expert instructors.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.id}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">{course.description}</p>
                  <div className="space-y-1">
                    <div className="text-xs flex items-center">
                      <span className="font-semibold mr-2">Instructor:</span> {course.instructor}
                    </div>
                    <div className="text-xs flex items-center">
                      <span className="font-semibold mr-2">Level:</span> {course.level}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/auth/signin">
                    <Button>Enroll Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Qatar University. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">Terms of Service</Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">Privacy</Link>
        </nav>
      </footer>
    </div>
  );
}
