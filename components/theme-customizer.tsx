"use client"

import { useState, useEffect, useRef } from "react"
import { useTheme, type ColorPalette } from "./theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, Palette, Plus, Eye, Target, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { HelpDialog } from "./welcome-guide"

interface ThemeCustomizerProps {
  onClose?: () => void
}

export function ThemeCustomizer({ onClose }: ThemeCustomizerProps) {
  const {
    currentPalette,
    palettes,
    selectedColorKey,
    setCurrentPalette,
    addCustomPalette,
    updateCustomPalette,
    exportTheme,
  } = useTheme()
  const [customPalette, setCustomPalette] = useState<ColorPalette>({
    name: "Custom Theme",
    colors: { ...currentPalette.colors },
  })
  const [exportData, setExportData] = useState("")
  const [activeTab, setActiveTab] = useState("presets")
  const selectedColorRef = useRef<HTMLDivElement>(null)

  // Update custom palette when current palette changes
  useEffect(() => {
    setCustomPalette((prev) => ({
      ...prev,
      colors: { ...currentPalette.colors },
    }))
  }, [currentPalette])

  // Auto-switch to custom tab and scroll to selected color when a color is selected
  useEffect(() => {
    if (selectedColorKey) {
      setActiveTab("custom")
      // Scroll to the selected color after a short delay to ensure the tab has switched
      setTimeout(() => {
        if (selectedColorRef.current) {
          selectedColorRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          })
        }
      }, 100)
    }
  }, [selectedColorKey])

  const handleColorChange = (colorKey: string, value: string) => {
    setCustomPalette((prev) => ({
      ...prev,
      colors: {
        ...prev.colors,
        [colorKey]: value,
      },
    }))
  }

  const applyCustomPalette = () => {
    setCurrentPalette(customPalette)
    updateCustomPalette(customPalette)
  }

  const saveCustomPalette = () => {
    const newName = `${customPalette.name} ${Date.now()}`
    const newPalette = { ...customPalette, name: newName }
    addCustomPalette(newPalette)
    setCurrentPalette(newPalette)
  }

  const handleExport = () => {
    const data = exportTheme()
    setExportData(data)
  }

  const hslToHex = (hsl: string) => {
    const [h, s, l] = hsl.split(" ").map((v) => Number.parseFloat(v.replace("%", "")))
    const hDecimal = h / 360
    const sDecimal = s / 100
    const lDecimal = l / 100

    const c = (1 - Math.abs(2 * lDecimal - 1)) * sDecimal
    const x = c * (1 - Math.abs(((hDecimal * 6) % 2) - 1))
    const m = lDecimal - c / 2

    let r = 0,
      g = 0,
      b = 0

    if (0 <= hDecimal && hDecimal < 1 / 6) {
      r = c
      g = x
      b = 0
    } else if (1 / 6 <= hDecimal && hDecimal < 2 / 6) {
      r = x
      g = c
      b = 0
    } else if (2 / 6 <= hDecimal && hDecimal < 3 / 6) {
      r = 0
      g = c
      b = x
    } else if (3 / 6 <= hDecimal && hDecimal < 4 / 6) {
      r = 0
      g = x
      b = c
    } else if (4 / 6 <= hDecimal && hDecimal < 5 / 6) {
      r = x
      g = 0
      b = c
    } else if (5 / 6 <= hDecimal && hDecimal < 1) {
      r = c
      g = 0
      b = x
    }

    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)

    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
  }

  return (
    <div className="w-full h-full border-r bg-card flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            <h2 className="font-semibold">Theme Customizer</h2>
          </div>
          <div className="flex items-center gap-2">
            <HelpDialog />
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose} className="lg:hidden">
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        {selectedColorKey && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-2 rounded-md mt-2">
            <Target className="h-4 w-4" />
            <span>Editing: {selectedColorKey.replace(/([A-Z])/g, " $1").toLowerCase()}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 overflow-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="presets">Presets</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>

          <TabsContent value="presets" className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-3">Available Themes</h3>
              <div className="space-y-2">
                {palettes.map((palette) => (
                  <Card
                    key={palette.name}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      currentPalette.name === palette.name ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setCurrentPalette(palette)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-sm">{palette.name}</span>
                        {currentPalette.name === palette.name && <Badge variant="secondary">Active</Badge>}
                      </div>
                      <div className="flex gap-1 mt-2">
                        {Object.entries(palette.colors)
                          .slice(0, 6)
                          .map(([key, value]) => (
                            <div
                              key={key}
                              className="w-4 h-4 rounded-full border"
                              style={{ backgroundColor: `hsl(${value})` }}
                            />
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="custom" className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-3">Custom Theme</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="theme-name">Theme Name</Label>
                  <Input
                    id="theme-name"
                    value={customPalette.name}
                    onChange={(e) => setCustomPalette((prev) => ({ ...prev, name: e.target.value }))}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    💡 Tip: Click any element in the preview to edit its color
                  </p>
                </div>

                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {Object.entries(customPalette.colors).map(([key, value]) => (
                    <div
                      key={key}
                      className={`space-y-1 p-2 rounded-md transition-all ${
                        selectedColorKey === key ? "bg-primary/10 ring-2 ring-primary/50" : "hover:bg-muted/50"
                      }`}
                      ref={selectedColorKey === key ? selectedColorRef : null}
                    >
                      <div className="flex items-center gap-2">
                        <Label className="text-xs capitalize flex-1">{key.replace(/([A-Z])/g, " $1").trim()}</Label>
                        {selectedColorKey === key && <Target className="h-3 w-3 text-primary" />}
                      </div>
                      <div className="flex gap-2">
                        <Input
                          type="color"
                          value={hslToHex(value)}
                          onChange={(e) => {
                            // Convert hex to HSL (simplified)
                            const hex = e.target.value
                            const r = Number.parseInt(hex.slice(1, 3), 16) / 255
                            const g = Number.parseInt(hex.slice(3, 5), 16) / 255
                            const b = Number.parseInt(hex.slice(5, 7), 16) / 255

                            const max = Math.max(r, g, b)
                            const min = Math.min(r, g, b)
                            const diff = max - min
                            const sum = max + min
                            const l = sum / 2

                            let h = 0
                            let s = 0

                            if (diff !== 0) {
                              s = l > 0.5 ? diff / (2 - sum) : diff / sum

                              switch (max) {
                                case r:
                                  h = (g - b) / diff + (g < b ? 6 : 0)
                                  break
                                case g:
                                  h = (b - r) / diff + 2
                                  break
                                case b:
                                  h = (r - g) / diff + 4
                                  break
                              }
                              h /= 6
                            }

                            const hslValue = `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
                            handleColorChange(key, hslValue)
                          }}
                          className="w-12 h-8 p-0 border-0"
                        />
                        <Input
                          value={value}
                          onChange={(e) => handleColorChange(key, e.target.value)}
                          placeholder="0 0% 100%"
                          className="flex-1 text-xs"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button onClick={applyCustomPalette} className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Apply Changes
                  </Button>
                  <Button onClick={saveCustomPalette} variant="outline" className="flex-1 bg-transparent">
                    <Plus className="w-4 h-4 mr-2" />
                    Save as New
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Apply to preview changes • Save to create a new theme variant
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <Dialog>
          <DialogTrigger asChild>
            <Button onClick={handleExport} className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Export Theme
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle>Export Theme Configuration</DialogTitle>
              <DialogDescription>
                Copy the configuration below to use this theme in your own projects.
              </DialogDescription>
            </DialogHeader>
            <Textarea
              value={exportData}
              readOnly
              className="min-h-96 font-mono text-sm"
              placeholder="Click 'Export Theme' to generate configuration..."
            />
            <Button onClick={() => navigator.clipboard.writeText(exportData)} disabled={!exportData}>
              Copy to Clipboard
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
