"use client";

import { useUser } from "@/contexts/student/UserContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  IconBook,
  IconClock,
  IconTrophy,
  IconTarget,
  IconArrowRight,
  IconCalendar,
  IconCircleCheck,
  IconAlertCircle,
} from "@tabler/icons-react";

export default function DashboardPage() {
  const { user, isLoading, isError, error } = useUser();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-destructive">Error: {error?.message}</div>
      </div>
    );
  }

  const stats = [
    {
      title: "Courses Enrolled",
      value: "6",
      icon: IconBook,
      change: "+2 this semester",
      color: "text-blue-500",
    },
    {
      title: "Assignments Due",
      value: "4",
      icon: IconClock,
      change: "3 due this week",
      color: "text-orange-500",
    },
    {
      title: "Average Score",
      value: "87%",
      icon: IconTrophy,
      change: "+5% from last month",
      color: "text-green-500",
    },
    {
      title: "Completion Rate",
      value: "92%",
      icon: IconTarget,
      change: "On track",
      color: "text-purple-500",
    },
  ];

  const recentCourses = [
    {
      name: "Advanced Web Development",
      progress: 75,
      nextLesson: "React Server Components",
      dueDate: "Tomorrow",
      status: "in-progress",
    },
    {
      name: "Data Structures & Algorithms",
      progress: 60,
      nextLesson: "Binary Search Trees",
      dueDate: "Oct 15",
      status: "in-progress",
    },
    {
      name: "Machine Learning Fundamentals",
      progress: 45,
      nextLesson: "Neural Networks Intro",
      dueDate: "Oct 18",
      status: "in-progress",
    },
  ];

  const upcomingAssignments = [
    {
      title: "React Project Submission",
      course: "Advanced Web Development",
      dueDate: "Oct 12, 2025",
      priority: "high",
    },
    {
      title: "Algorithm Analysis Report",
      course: "Data Structures & Algorithms",
      dueDate: "Oct 15, 2025",
      priority: "medium",
    },
    {
      title: "ML Model Implementation",
      course: "Machine Learning Fundamentals",
      dueDate: "Oct 18, 2025",
      priority: "medium",
    },
    {
      title: "Database Design Project",
      course: "Database Systems",
      dueDate: "Oct 20, 2025",
      priority: "low",
    },
  ];

  return (
    <div className="container mx-auto px-4 space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {user?.name || "Student"}!
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <IconCircleCheck className="size-4 text-green-500" />
            {user?.isVerified ? "Verified Account" : "Unverified"}
          </span>
          <span>Student ID: {user?.code}</span>
          <span>
            Last login:{" "}
            {user?.lastLogin
              ? new Date(user.lastLogin).toLocaleDateString()
              : "N/A"}
          </span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`size-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Courses - Takes 2 columns */}
        <Card className="lg:col-span-2 border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Continue Learning</CardTitle>
              <Button variant="ghost" size="sm">
                View All
                <IconArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentCourses.map((course) => (
              <div
                key={course.name}
                className="p-4 rounded-lg border border-border/50 bg-card hover:bg-accent/5 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{course.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Next: {course.nextLesson}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Due {course.dueDate}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Assignments - Takes 1 column */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>Upcoming Assignments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingAssignments.map((assignment) => (
              <div
                key={assignment.title}
                className="p-3 rounded-lg border border-border/50 bg-card hover:bg-accent/5 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 ${
                      assignment.priority === "high"
                        ? "text-red-500"
                        : assignment.priority === "medium"
                          ? "text-orange-500"
                          : "text-blue-500"
                    }`}
                  >
                    {assignment.priority === "high" ? (
                      <IconAlertCircle className="size-5" />
                    ) : (
                      <IconCalendar className="size-5" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <h4 className="text-sm font-semibold leading-tight">
                      {assignment.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {assignment.course}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Due: {assignment.dueDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Button
              variant="outline"
              className="justify-start h-auto py-3 bg-transparent"
            >
              <IconBook className="mr-2 size-5" />
              <div className="text-left">
                <div className="font-semibold">Browse Courses</div>
                <div className="text-xs text-muted-foreground">
                  Explore new topics
                </div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="justify-start h-auto py-3 bg-transparent"
            >
              <IconCalendar className="mr-2 size-5" />
              <div className="text-left">
                <div className="font-semibold">View Schedule</div>
                <div className="text-xs text-muted-foreground">
                  Check your calendar
                </div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="justify-start h-auto py-3 bg-transparent"
            >
              <IconTrophy className="mr-2 size-5" />
              <div className="text-left">
                <div className="font-semibold">Achievements</div>
                <div className="text-xs text-muted-foreground">
                  View your progress
                </div>
              </div>
            </Button>
            <Button
              variant="outline"
              className="justify-start h-auto py-3 bg-transparent"
            >
              <IconTarget className="mr-2 size-5" />
              <div className="text-left">
                <div className="font-semibold">Set Goals</div>
                <div className="text-xs text-muted-foreground">
                  Plan your learning
                </div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
