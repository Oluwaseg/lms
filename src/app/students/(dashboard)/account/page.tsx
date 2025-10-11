"use client";

import { useUser } from "@/contexts/student/UserContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconMapPin,
  IconCalendar,
  IconShield,
  IconCamera,
  IconCheck,
  IconClock,
} from "@tabler/icons-react";

export default function AccountPage() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="container mx-auto px-4 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Account</h1>
        <p className="text-muted-foreground">
          Manage your account information and profile
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Overview - Sidebar */}
        <Card className="border-border/50 lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="size-24">
                  <AvatarImage
                    src="/placeholder.svg?height=96&width=96"
                    alt={user?.name}
                  />
                  <AvatarFallback className="text-2xl">
                    {user?.name ? getInitials(user.name) : "ST"}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute bottom-0 right-0 size-8 rounded-full shadow-lg"
                >
                  <IconCamera className="size-4" />
                </Button>
              </div>
              <div className="text-center space-y-1">
                <h3 className="font-semibold text-lg">{user?.name}</h3>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
                <Badge variant="secondary" className="mt-2">
                  {user?.role?.name || "Student"}
                </Badge>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <IconShield className="size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Student ID:</span>
                <span className="font-medium ml-auto">{user?.code}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <IconCheck className="size-4 text-green-500" />
                <span className="text-muted-foreground">Status:</span>
                <Badge
                  variant={user?.isVerified ? "default" : "secondary"}
                  className="ml-auto"
                >
                  {user?.isVerified ? "Verified" : "Unverified"}
                </Badge>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <IconClock className="size-4 text-muted-foreground" />
                <span className="text-muted-foreground">Last Login:</span>
                <span className="font-medium ml-auto text-xs">
                  {user?.lastLogin
                    ? new Date(user.lastLogin).toLocaleDateString()
                    : "N/A"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Details - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <IconUser className="size-5 text-primary" />
                <CardTitle>Personal Information</CardTitle>
              </div>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    defaultValue={user?.name?.split(" ")[0] || ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    defaultValue={user?.name?.split(" ")[1] || ""}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" placeholder="Tell us about yourself" />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="dateOfBirth"
                  className="flex items-center gap-2"
                >
                  <IconCalendar className="size-4" />
                  Date of Birth
                </Label>
                <Input id="dateOfBirth" type="date" />
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-center gap-2">
                <IconMail className="size-5 text-primary" />
                <CardTitle>Contact Information</CardTitle>
              </div>
              <CardDescription>Manage your contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={user?.email || ""}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <IconPhone className="size-4" />
                  Phone Number
                </Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address" className="flex items-center gap-2">
                  <IconMapPin className="size-4" />
                  Address
                </Label>
                <Input
                  id="address"
                  placeholder="123 Main St, City, State, ZIP"
                />
              </div>
            </CardContent>
          </Card>

          {/* Academic Information */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle>Academic Information</CardTitle>
              <CardDescription>
                Your academic details and enrollment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="major">Major</Label>
                  <Input id="major" placeholder="Computer Science" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Academic Year</Label>
                  <Input id="year" placeholder="Junior" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="gpa">GPA</Label>
                  <Input id="gpa" placeholder="3.75" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expectedGraduation">
                    Expected Graduation
                  </Label>
                  <Input id="expectedGraduation" type="date" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end gap-3">
            <Button variant="outline">Cancel</Button>
            <Button>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
