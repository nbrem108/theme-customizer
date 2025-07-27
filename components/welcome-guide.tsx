"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  HelpCircle,
  Palette,
  MousePointer,
  Eye,
  Download,
  Lightbulb,
  Target,
  Zap,
  BookOpen,
  ChevronRight,
  Play,
} from "lucide-react"

interface WelcomeGuideProps {
  onGetStarted: () => void
}

export function WelcomeGuide({ onGetStarted }: WelcomeGuideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Welcome to Theme Builder",
      description: "Create and customize beautiful themes with real-time preview",
      icon: <Palette className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            This tool helps you create custom color themes for your applications with live preview and export
            functionality.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-primary" />
              <span className="text-sm">Real-time preview</span>
            </div>
            <div className="flex items-center gap-2">
              <MousePointer className="h-4 w-4 text-primary" />
              <span className="text-sm">Click to edit</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-primary" />
              <span className="text-sm">Export themes</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm">15+ presets</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Choose a Starting Point",
      description: "Select from preset themes or start with a custom theme",
      icon: <Target className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Browse through our collection of preset themes or start building your own from scratch.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <Badge variant="secondary">1</Badge>
              <div>
                <h4 className="font-medium">Browse Presets</h4>
                <p className="text-sm text-muted-foreground">Click on any preset theme to apply it instantly</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <Badge variant="secondary">2</Badge>
              <div>
                <h4 className="font-medium">Start Custom</h4>
                <p className="text-sm text-muted-foreground">Switch to Custom tab to build from scratch</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Interactive Editing",
      description: "Click on any UI element to edit its color",
      icon: <MousePointer className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Click on any element in the dashboard preview to instantly jump to its color editor.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 border rounded-lg bg-primary/5">
              <Target className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">Click & Edit</h4>
                <p className="text-sm text-muted-foreground">
                  Click any button, card, or text to edit its color instantly
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 border rounded-lg">
              <Eye className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium">Live Preview</h4>
                <p className="text-sm text-muted-foreground">See changes applied immediately across all components</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Export Your Theme",
      description: "Download your theme configuration for use in projects",
      icon: <Download className="h-8 w-8" />,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Export your theme as CSS variables, Tailwind config, or complete theme object.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Export includes:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• CSS custom properties</li>
              <li>• Tailwind CSS configuration</li>
              <li>• Complete theme object</li>
              <li>• Ready-to-use code snippets</li>
            </ul>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">{steps[currentStep].icon}</div>
          <CardTitle className="text-2xl">{steps[currentStep].title}</CardTitle>
          <CardDescription className="text-lg">{steps[currentStep].description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {steps[currentStep].content}

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex gap-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentStep ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              {currentStep > 0 && (
                <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
                  Previous
                </Button>
              )}
              {currentStep < steps.length - 1 ? (
                <Button onClick={() => setCurrentStep(currentStep + 1)}>
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              ) : (
                <Button onClick={onGetStarted}>
                  <Play className="h-4 w-4 mr-2" />
                  Get Started
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function HelpDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <HelpCircle className="h-4 w-4 mr-2" />
          Help
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Theme Builder Guide
          </DialogTitle>
          <DialogDescription>Complete guide to using the theme customization tool</DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="workflow">Workflow</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="tips">Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What is Theme Builder?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Theme Builder is an interactive tool for creating and customizing color themes for web applications.
                  It provides real-time preview, click-to-edit functionality, and export capabilities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Palette className="h-4 w-4" />
                      Color System
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Based on CSS custom properties and HSL color space for maximum flexibility and consistency.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Live Preview
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      See your changes applied instantly across all UI components in the dashboard preview.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <MousePointer className="h-4 w-4" />
                      Interactive Editing
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Click on any UI element to directly edit its color properties without hunting through menus.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Export Ready
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Export themes as CSS variables, Tailwind config, or complete theme objects for your projects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workflow" className="space-y-4">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Step-by-Step Workflow</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 border rounded-lg">
                      <Badge className="shrink-0">1</Badge>
                      <div>
                        <h4 className="font-medium">Choose Starting Point</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Browse preset themes in the "Presets" tab or start fresh in the "Custom" tab.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 border rounded-lg">
                      <Badge className="shrink-0">2</Badge>
                      <div>
                        <h4 className="font-medium">Interactive Editing</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Click on any element in the dashboard (buttons, cards, text) to edit its color. The tool
                          automatically switches to the Custom tab and highlights the selected color.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 border rounded-lg">
                      <Badge className="shrink-0">3</Badge>
                      <div>
                        <h4 className="font-medium">Fine-tune Colors</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use the color picker or enter HSL values directly. Changes apply instantly to the preview.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 border rounded-lg">
                      <Badge className="shrink-0">4</Badge>
                      <div>
                        <h4 className="font-medium">Preview & Save</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use "Preview" to apply changes temporarily, or "Save" to create a new theme variant.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 border rounded-lg">
                      <Badge className="shrink-0">5</Badge>
                      <div>
                        <h4 className="font-medium">Export Theme</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Click "Export Theme" to get CSS variables, Tailwind config, and theme object for your project.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Click-to-Edit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Click any UI element to instantly edit its color:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li>• Buttons → Primary/Secondary colors</li>
                    <li>• Cards → Card background/foreground</li>
                    <li>• Text → Foreground/muted colors</li>
                    <li>• Borders → Border/input colors</li>
                    <li>• Backgrounds → Background colors</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Color System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Comprehensive color palette includes:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Background & Foreground</li>
                    <li>• Primary & Secondary</li>
                    <li>• Muted & Accent</li>
                    <li>• Card & Popover</li>
                    <li>• Border & Input</li>
                    <li>• Destructive colors</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Live Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Real-time preview includes:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Dashboard with stats cards</li>
                    <li>• Form components</li>
                    <li>• Buttons & badges</li>
                    <li>• Calendar & data displays</li>
                    <li>• Navigation & feedback</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Export Options
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Export formats include:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• CSS custom properties</li>
                    <li>• Tailwind CSS configuration</li>
                    <li>• Complete theme object</li>
                    <li>• JSON format for APIs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Pro Tips & Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">🎨 Color Harmony</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      Start with a base color and use color theory (complementary, analogous, triadic) to create
                      harmonious palettes. The preset themes demonstrate good color relationships.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">♿ Accessibility</h4>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Ensure sufficient contrast between text and background colors. Aim for at least 4.5:1 contrast
                      ratio for normal text and 3:1 for large text.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">🔄 Workflow Tips</h4>
                    <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                      <li>• Use presets as starting points, then customize</li>
                      <li>• Click elements in the preview for quick editing</li>
                      <li>• Save variations of your theme for comparison</li>
                      <li>• Test your theme across all component tabs</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-2">🚀 Advanced Usage</h4>
                    <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                      <li>• Use HSL values for easier color manipulation</li>
                      <li>• Keep lightness consistent across similar elements</li>
                      <li>• Create dark/light variants by adjusting lightness</li>
                      <li>• Export and version control your themes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
