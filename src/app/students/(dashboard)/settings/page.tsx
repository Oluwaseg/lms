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
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  IconBell,
  IconMail,
  IconShieldCheck,
  IconPalette,
  IconLanguage,
  IconClock,
} from "@tabler/icons-react";
import { useState } from "react";

export default function SettingsPage() {
  const { user } = useUser();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    assignmentReminders: true,
    courseUpdates: true,
    weeklyDigest: false,
    marketingEmails: false,
    smsNotifications: false,
    desktopNotifications: true,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container mx-auto px-4 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid gap-6">
        {/* Notifications */}
        <Card className="border-border/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <IconBell className="size-5 text-primary" />
              <CardTitle>Notifications</CardTitle>
            </div>
            <CardDescription>
              Configure how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label
                    htmlFor="email-notifications"
                    className="text-base font-medium"
                  >
                    Email Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications via email
                  </p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={settings.emailNotifications}
                  onCheckedChange={() => handleToggle("emailNotifications")}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label
                    htmlFor="push-notifications"
                    className="text-base font-medium"
                  >
                    Push Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications on your devices
                  </p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={settings.pushNotifications}
                  onCheckedChange={() => handleToggle("pushNotifications")}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label
                    htmlFor="desktop-notifications"
                    className="text-base font-medium"
                  >
                    Desktop Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Show notifications on your desktop
                  </p>
                </div>
                <Switch
                  id="desktop-notifications"
                  checked={settings.desktopNotifications}
                  onCheckedChange={() => handleToggle("desktopNotifications")}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label
                    htmlFor="sms-notifications"
                    className="text-base font-medium"
                  >
                    SMS Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive important updates via SMS
                  </p>
                </div>
                <Switch
                  id="sms-notifications"
                  checked={settings.smsNotifications}
                  onCheckedChange={() => handleToggle("smsNotifications")}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card className="border-border/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <IconMail className="size-5 text-primary" />
              <CardTitle>Notification Preferences</CardTitle>
            </div>
            <CardDescription>
              Choose what notifications you want to receive
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label
                    htmlFor="assignment-reminders"
                    className="text-base font-medium"
                  >
                    Assignment Reminders
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Get reminders about upcoming assignments
                  </p>
                </div>
                <Switch
                  id="assignment-reminders"
                  checked={settings.assignmentReminders}
                  onCheckedChange={() => handleToggle("assignmentReminders")}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label
                    htmlFor="course-updates"
                    className="text-base font-medium"
                  >
                    Course Updates
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Notifications about course content and announcements
                  </p>
                </div>
                <Switch
                  id="course-updates"
                  checked={settings.courseUpdates}
                  onCheckedChange={() => handleToggle("courseUpdates")}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label
                    htmlFor="weekly-digest"
                    className="text-base font-medium"
                  >
                    Weekly Digest
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive a weekly summary of your activity
                  </p>
                </div>
                <Switch
                  id="weekly-digest"
                  checked={settings.weeklyDigest}
                  onCheckedChange={() => handleToggle("weeklyDigest")}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label
                    htmlFor="marketing-emails"
                    className="text-base font-medium"
                  >
                    Marketing Emails
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Receive news and promotional content
                  </p>
                </div>
                <Switch
                  id="marketing-emails"
                  checked={settings.marketingEmails}
                  onCheckedChange={() => handleToggle("marketingEmails")}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Appearance */}
        <Card className="border-border/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <IconPalette className="size-5 text-primary" />
              <CardTitle>Appearance</CardTitle>
            </div>
            <CardDescription>Customize how the platform looks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Theme</Label>
              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  className="justify-start bg-transparent"
                >
                  Light
                </Button>
                <Button
                  variant="outline"
                  className="justify-start bg-transparent"
                >
                  Dark
                </Button>
                <Button
                  variant="outline"
                  className="justify-start bg-transparent"
                >
                  System
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Language & Region */}
        <Card className="border-border/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <IconLanguage className="size-5 text-primary" />
              <CardTitle>Language & Region</CardTitle>
            </div>
            <CardDescription>
              Set your language and timezone preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Language</Label>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
              >
                English (US)
              </Button>
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <IconClock className="size-4" />
                Timezone
              </Label>
              <Button
                variant="outline"
                className="w-full justify-start bg-transparent"
              >
                (GMT-5:00) Eastern Time
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="border-border/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <IconShieldCheck className="size-5 text-primary" />
              <CardTitle>Privacy & Security</CardTitle>
            </div>
            <CardDescription>
              Manage your privacy and security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
            >
              Change Password
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
            >
              Two-Factor Authentication
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-transparent"
            >
              Privacy Settings
            </Button>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="flex justify-end gap-3">
          <Button variant="outline">Cancel</Button>
          <Button>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
