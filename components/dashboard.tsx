"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { InteractiveElement } from "./interactive-element"
import { useState } from "react"
import {
  BarChart3,
  Users,
  ShoppingCart,
  TrendingUp,
  Bell,
  Settings,
  Mail,
  Phone,
  MapPin,
  Heart,
  Menu,
} from "lucide-react"

interface DashboardProps {
  onOpenSidebar?: () => void
}

export function Dashboard({ onOpenSidebar }: DashboardProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [sliderValue, setSliderValue] = useState([50])

  return (
    <div className="flex-1 h-full overflow-auto bg-background">
      <InteractiveElement colorKey="background" className="p-3 sm:p-6">
        <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {onOpenSidebar && (
                <Button variant="ghost" size="sm" onClick={onOpenSidebar} className="lg:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              )}
              <div>
                <InteractiveElement colorKey="foreground">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Theme Preview Dashboard</h1>
                </InteractiveElement>
                <InteractiveElement colorKey="mutedForeground">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Experience how your theme looks across different components
                  </p>
                </InteractiveElement>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <InteractiveElement colorKey="border">
                <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </Button>
              </InteractiveElement>
              <InteractiveElement colorKey="primary">
                <Button size="sm">
                  <Settings className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Settings</span>
                </Button>
              </InteractiveElement>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <InteractiveElement colorKey="card">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <InteractiveElement colorKey="cardForeground">
                    <CardTitle className="text-xs sm:text-sm font-medium">Total Revenue</CardTitle>
                  </InteractiveElement>
                  <InteractiveElement colorKey="mutedForeground">
                    <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                  </InteractiveElement>
                </CardHeader>
                <CardContent>
                  <InteractiveElement colorKey="cardForeground">
                    <div className="text-lg sm:text-2xl font-bold">$45,231.89</div>
                  </InteractiveElement>
                  <InteractiveElement colorKey="mutedForeground">
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                  </InteractiveElement>
                </CardContent>
              </Card>
            </InteractiveElement>

            <InteractiveElement colorKey="card">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <InteractiveElement colorKey="cardForeground">
                    <CardTitle className="text-xs sm:text-sm font-medium">Active Users</CardTitle>
                  </InteractiveElement>
                  <InteractiveElement colorKey="mutedForeground">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                  </InteractiveElement>
                </CardHeader>
                <CardContent>
                  <InteractiveElement colorKey="cardForeground">
                    <div className="text-lg sm:text-2xl font-bold">2,350</div>
                  </InteractiveElement>
                  <InteractiveElement colorKey="mutedForeground">
                    <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                  </InteractiveElement>
                </CardContent>
              </Card>
            </InteractiveElement>

            <InteractiveElement colorKey="card">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <InteractiveElement colorKey="cardForeground">
                    <CardTitle className="text-xs sm:text-sm font-medium">Sales</CardTitle>
                  </InteractiveElement>
                  <InteractiveElement colorKey="mutedForeground">
                    <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                  </InteractiveElement>
                </CardHeader>
                <CardContent>
                  <InteractiveElement colorKey="cardForeground">
                    <div className="text-lg sm:text-2xl font-bold">12,234</div>
                  </InteractiveElement>
                  <InteractiveElement colorKey="mutedForeground">
                    <p className="text-xs text-muted-foreground">+19% from last month</p>
                  </InteractiveElement>
                </CardContent>
              </Card>
            </InteractiveElement>

            <InteractiveElement colorKey="card">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <InteractiveElement colorKey="cardForeground">
                    <CardTitle className="text-xs sm:text-sm font-medium">Growth Rate</CardTitle>
                  </InteractiveElement>
                  <InteractiveElement colorKey="mutedForeground">
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                  </InteractiveElement>
                </CardHeader>
                <CardContent>
                  <InteractiveElement colorKey="cardForeground">
                    <div className="text-lg sm:text-2xl font-bold">+573</div>
                  </InteractiveElement>
                  <InteractiveElement colorKey="mutedForeground">
                    <p className="text-xs text-muted-foreground">+201 since last hour</p>
                  </InteractiveElement>
                </CardContent>
              </Card>
            </InteractiveElement>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
            {/* Left Column */}
            <div className="xl:col-span-2 space-y-4 sm:space-y-6">
              {/* Tabs Component */}
              <InteractiveElement colorKey="card">
                <Card>
                  <CardHeader>
                    <InteractiveElement colorKey="cardForeground">
                      <CardTitle className="text-lg sm:text-xl">Component Showcase</CardTitle>
                    </InteractiveElement>
                    <InteractiveElement colorKey="mutedForeground">
                      <CardDescription>Various UI components to test your theme</CardDescription>
                    </InteractiveElement>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="forms" className="w-full">
                      <InteractiveElement colorKey="muted">
                        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                          <TabsTrigger value="forms" className="text-xs sm:text-sm">
                            Forms
                          </TabsTrigger>
                          <TabsTrigger value="buttons" className="text-xs sm:text-sm">
                            Buttons
                          </TabsTrigger>
                          <TabsTrigger value="data" className="text-xs sm:text-sm">
                            Data
                          </TabsTrigger>
                          <TabsTrigger value="feedback" className="text-xs sm:text-sm">
                            Feedback
                          </TabsTrigger>
                        </TabsList>
                      </InteractiveElement>

                      <TabsContent value="forms" className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <InteractiveElement colorKey="foreground">
                              <Label htmlFor="email">Email</Label>
                            </InteractiveElement>
                            <InteractiveElement colorKey="input">
                              <Input id="email" placeholder="Enter your email" />
                            </InteractiveElement>
                          </div>
                          <div className="space-y-2">
                            <InteractiveElement colorKey="foreground">
                              <Label htmlFor="phone">Phone</Label>
                            </InteractiveElement>
                            <InteractiveElement colorKey="input">
                              <Input id="phone" placeholder="Enter your phone" />
                            </InteractiveElement>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <InteractiveElement colorKey="foreground">
                            <Label htmlFor="message">Message</Label>
                          </InteractiveElement>
                          <InteractiveElement colorKey="input">
                            <Textarea id="message" placeholder="Type your message here..." />
                          </InteractiveElement>
                        </div>
                        <div className="flex items-center space-x-2">
                          <InteractiveElement colorKey="primary">
                            <Switch id="notifications" />
                          </InteractiveElement>
                          <InteractiveElement colorKey="foreground">
                            <Label htmlFor="notifications">Enable notifications</Label>
                          </InteractiveElement>
                        </div>
                        <div className="space-y-2">
                          <InteractiveElement colorKey="foreground">
                            <Label>Volume: {sliderValue[0]}%</Label>
                          </InteractiveElement>
                          <InteractiveElement colorKey="primary">
                            <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
                          </InteractiveElement>
                        </div>
                        <InteractiveElement colorKey="border">
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                            </SelectContent>
                          </Select>
                        </InteractiveElement>
                      </TabsContent>

                      <TabsContent value="buttons" className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <InteractiveElement colorKey="primary">
                            <Button size="sm">Primary</Button>
                          </InteractiveElement>
                          <InteractiveElement colorKey="secondary">
                            <Button variant="secondary" size="sm">
                              Secondary
                            </Button>
                          </InteractiveElement>
                          <InteractiveElement colorKey="border">
                            <Button variant="outline" size="sm">
                              Outline
                            </Button>
                          </InteractiveElement>
                          <InteractiveElement colorKey="accent">
                            <Button variant="ghost" size="sm">
                              Ghost
                            </Button>
                          </InteractiveElement>
                          <InteractiveElement colorKey="destructive">
                            <Button variant="destructive" size="sm">
                              Destructive
                            </Button>
                          </InteractiveElement>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button disabled size="sm">
                            Disabled
                          </Button>
                          <Button variant="outline" disabled size="sm">
                            Disabled Outline
                          </Button>
                        </div>
                      </TabsContent>

                      <TabsContent value="data" className="space-y-4">
                        <div className="space-y-4">
                          <div>
                            <InteractiveElement colorKey="foreground">
                              <h4 className="font-medium mb-2">Progress Indicators</h4>
                            </InteractiveElement>
                            <div className="space-y-2">
                              <InteractiveElement colorKey="primary">
                                <Progress value={33} />
                              </InteractiveElement>
                              <InteractiveElement colorKey="primary">
                                <Progress value={66} />
                              </InteractiveElement>
                              <InteractiveElement colorKey="primary">
                                <Progress value={88} />
                              </InteractiveElement>
                            </div>
                          </div>
                          <div>
                            <InteractiveElement colorKey="foreground">
                              <h4 className="font-medium mb-2">Badges</h4>
                            </InteractiveElement>
                            <div className="flex flex-wrap gap-2">
                              <InteractiveElement colorKey="primary">
                                <Badge>Default</Badge>
                              </InteractiveElement>
                              <InteractiveElement colorKey="secondary">
                                <Badge variant="secondary">Secondary</Badge>
                              </InteractiveElement>
                              <InteractiveElement colorKey="border">
                                <Badge variant="outline">Outline</Badge>
                              </InteractiveElement>
                              <InteractiveElement colorKey="destructive">
                                <Badge variant="destructive">Destructive</Badge>
                              </InteractiveElement>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="feedback" className="space-y-4">
                        <div className="space-y-4">
                          <InteractiveElement colorKey="card">
                            <Card>
                              <CardContent className="pt-6">
                                <div className="flex items-center space-x-4">
                                  <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                    <AvatarFallback>JD</AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1 min-w-0">
                                    <InteractiveElement colorKey="cardForeground">
                                      <p className="text-sm font-medium truncate">John Doe</p>
                                    </InteractiveElement>
                                    <InteractiveElement colorKey="mutedForeground">
                                      <p className="text-sm text-muted-foreground">Great theme! Love the colors.</p>
                                    </InteractiveElement>
                                  </div>
                                  <div className="flex space-x-1">
                                    <InteractiveElement colorKey="accent">
                                      <Button size="sm" variant="ghost">
                                        <Heart className="w-4 h-4" />
                                      </Button>
                                    </InteractiveElement>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </InteractiveElement>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </InteractiveElement>
            </div>

            {/* Right Column */}
            <div className="space-y-4 sm:space-y-6">
              {/* Calendar */}
              <InteractiveElement colorKey="card">
                <Card>
                  <CardHeader>
                    <InteractiveElement colorKey="cardForeground">
                      <CardTitle className="text-lg">Calendar</CardTitle>
                    </InteractiveElement>
                  </CardHeader>
                  <CardContent>
                    <InteractiveElement colorKey="border">
                      <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border w-full" />
                    </InteractiveElement>
                  </CardContent>
                </Card>
              </InteractiveElement>

              {/* Recent Activity */}
              <InteractiveElement colorKey="card">
                <Card>
                  <CardHeader>
                    <InteractiveElement colorKey="cardForeground">
                      <CardTitle className="text-lg">Recent Activity</CardTitle>
                    </InteractiveElement>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>AC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1 min-w-0">
                        <InteractiveElement colorKey="cardForeground">
                          <p className="text-sm font-medium">New user registered</p>
                        </InteractiveElement>
                        <InteractiveElement colorKey="mutedForeground">
                          <p className="text-xs text-muted-foreground">2 minutes ago</p>
                        </InteractiveElement>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>OR</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-1 min-w-0">
                        <InteractiveElement colorKey="cardForeground">
                          <p className="text-sm font-medium">Order completed</p>
                        </InteractiveElement>
                        <InteractiveElement colorKey="mutedForeground">
                          <p className="text-xs text-muted-foreground">5 minutes ago</p>
                        </InteractiveElement>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </InteractiveElement>

              {/* Contact Info */}
              <InteractiveElement colorKey="card">
                <Card>
                  <CardHeader>
                    <InteractiveElement colorKey="cardForeground">
                      <CardTitle className="text-lg">Contact Information</CardTitle>
                    </InteractiveElement>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <InteractiveElement colorKey="mutedForeground">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                      </InteractiveElement>
                      <InteractiveElement colorKey="cardForeground">
                        <span className="text-sm">contact@example.com</span>
                      </InteractiveElement>
                    </div>
                    <div className="flex items-center space-x-2">
                      <InteractiveElement colorKey="mutedForeground">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                      </InteractiveElement>
                      <InteractiveElement colorKey="cardForeground">
                        <span className="text-sm">+1 (555) 123-4567</span>
                      </InteractiveElement>
                    </div>
                    <div className="flex items-center space-x-2">
                      <InteractiveElement colorKey="mutedForeground">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                      </InteractiveElement>
                      <InteractiveElement colorKey="cardForeground">
                        <span className="text-sm">123 Main St, City, State</span>
                      </InteractiveElement>
                    </div>
                  </CardContent>
                </Card>
              </InteractiveElement>
            </div>
          </div>
        </div>
      </InteractiveElement>
    </div>
  )
}
