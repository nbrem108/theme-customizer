"use client"

import type React from "react"

import { useTheme } from "./theme-provider"
import { cn } from "@/lib/utils"

interface InteractiveElementProps {
  colorKey: string
  children: React.ReactNode
  className?: string
  tooltip?: string
}

export function InteractiveElement({ colorKey, children, className, tooltip }: InteractiveElementProps) {
  const { selectColorForEditing, selectedColorKey } = useTheme()

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    selectColorForEditing(colorKey)
  }

  const isSelected = selectedColorKey === colorKey

  return (
    <div
      onClick={handleClick}
      className={cn(
        "relative cursor-pointer transition-all duration-200",
        "hover:ring-2 hover:ring-primary/50 hover:ring-offset-2",
        isSelected && "ring-2 ring-primary ring-offset-2",
        className,
      )}
      title={tooltip || `Click to edit ${colorKey.replace(/([A-Z])/g, " $1").toLowerCase()}`}
    >
      {children}
      {isSelected && <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />}
    </div>
  )
}
