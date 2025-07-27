"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface ColorPalette {
  name: string
  colors: {
    background: string
    foreground: string
    card: string
    cardForeground: string
    popover: string
    popoverForeground: string
    primary: string
    primaryForeground: string
    secondary: string
    secondaryForeground: string
    muted: string
    mutedForeground: string
    accent: string
    accentForeground: string
    destructive: string
    destructiveForeground: string
    border: string
    input: string
    ring: string
  }
}

const defaultPalettes: ColorPalette[] = [
  {
    name: "Default",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "222.2 47.4% 11.2%",
      primaryForeground: "210 40% 98%",
      secondary: "210 40% 96%",
      secondaryForeground: "222.2 84% 4.9%",
      muted: "210 40% 96%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "210 40% 96%",
      accentForeground: "222.2 84% 4.9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "222.2 84% 4.9%",
    },
  },
  {
    name: "Dark",
    colors: {
      background: "222.2 84% 4.9%",
      foreground: "210 40% 98%",
      card: "222.2 84% 4.9%",
      cardForeground: "210 40% 98%",
      popover: "222.2 84% 4.9%",
      popoverForeground: "210 40% 98%",
      primary: "210 40% 98%",
      primaryForeground: "222.2 47.4% 11.2%",
      secondary: "217.2 32.6% 17.5%",
      secondaryForeground: "210 40% 98%",
      muted: "217.2 32.6% 17.5%",
      mutedForeground: "215 20.2% 65.1%",
      accent: "217.2 32.6% 17.5%",
      accentForeground: "210 40% 98%",
      destructive: "0 62.8% 30.6%",
      destructiveForeground: "210 40% 98%",
      border: "217.2 32.6% 17.5%",
      input: "217.2 32.6% 17.5%",
      ring: "212.7 26.8% 83.9%",
    },
  },
  // Essential Basic Themes
  {
    name: "Slate",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "215.4 16.3% 46.9%", // slate-600
      primaryForeground: "210 20% 98%",
      secondary: "210 40% 96%",
      secondaryForeground: "222.2 84% 4.9%",
      muted: "210 40% 96%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "210 40% 96%",
      accentForeground: "222.2 84% 4.9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "215.4 16.3% 46.9%",
    },
  },
  {
    name: "Gray",
    colors: {
      background: "0 0% 100%",
      foreground: "0 0% 3.9%", // gray-950
      card: "0 0% 100%",
      cardForeground: "0 0% 3.9%",
      popover: "0 0% 100%",
      popoverForeground: "0 0% 3.9%",
      primary: "0 0% 9%", // gray-900
      primaryForeground: "0 0% 98%",
      secondary: "0 0% 96.1%", // gray-100
      secondaryForeground: "0 0% 9%",
      muted: "0 0% 96.1%",
      mutedForeground: "0 0% 45.1%", // gray-600
      accent: "0 0% 96.1%",
      accentForeground: "0 0% 9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 0% 98%",
      border: "0 0% 89.8%", // gray-200
      input: "0 0% 89.8%",
      ring: "0 0% 3.9%",
    },
  },
  {
    name: "Neutral",
    colors: {
      background: "0 0% 100%",
      foreground: "0 0% 9%", // neutral-900
      card: "0 0% 100%",
      cardForeground: "0 0% 9%",
      popover: "0 0% 100%",
      popoverForeground: "0 0% 9%",
      primary: "0 0% 9%", // neutral-900
      primaryForeground: "0 0% 98%",
      secondary: "0 0% 96%", // neutral-100
      secondaryForeground: "0 0% 9%",
      muted: "0 0% 96%",
      mutedForeground: "0 0% 45%", // neutral-600
      accent: "0 0% 96%",
      accentForeground: "0 0% 9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 0% 98%",
      border: "0 0% 89%", // neutral-200
      input: "0 0% 89%",
      ring: "0 0% 9%",
    },
  },
  {
    name: "Stone",
    colors: {
      background: "60 9% 98%", // stone-50
      foreground: "28 25% 9%", // stone-900
      card: "0 0% 100%",
      cardForeground: "28 25% 9%",
      popover: "0 0% 100%",
      popoverForeground: "28 25% 9%",
      primary: "28 25% 9%",
      primaryForeground: "60 9% 98%",
      secondary: "60 5% 96%", // stone-100
      secondaryForeground: "28 25% 9%",
      muted: "60 5% 96%",
      mutedForeground: "25 5% 45%", // stone-600
      accent: "60 5% 96%",
      accentForeground: "28 25% 9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "60 9% 98%",
      border: "20 6% 90%", // stone-200
      input: "20 6% 90%",
      ring: "28 25% 9%",
    },
  },
  {
    name: "Zinc",
    colors: {
      background: "0 0% 100%",
      foreground: "240 10% 3.9%", // zinc-950
      card: "0 0% 100%",
      cardForeground: "240 10% 3.9%",
      popover: "0 0% 100%",
      popoverForeground: "240 10% 3.9%",
      primary: "240 5.9% 10%", // zinc-900
      primaryForeground: "0 0% 98%",
      secondary: "240 4.8% 95.9%", // zinc-100
      secondaryForeground: "240 5.9% 10%",
      muted: "240 4.8% 95.9%",
      mutedForeground: "240 3.8% 46.1%", // zinc-600
      accent: "240 4.8% 95.9%",
      accentForeground: "240 5.9% 10%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 0% 98%",
      border: "240 5.9% 90%", // zinc-200
      input: "240 5.9% 90%",
      ring: "240 10% 3.9%",
    },
  },
  // Color-based themes
  {
    name: "Red",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "0 72.2% 50.6%", // red-500
      primaryForeground: "0 85.7% 97.3%",
      secondary: "210 40% 96%",
      secondaryForeground: "222.2 84% 4.9%",
      muted: "210 40% 96%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "210 40% 96%",
      accentForeground: "222.2 84% 4.9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "0 72.2% 50.6%",
    },
  },
  {
    name: "Orange",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "24.6 95% 53.1%", // orange-500
      primaryForeground: "210 40% 98%",
      secondary: "210 40% 96%",
      secondaryForeground: "222.2 84% 4.9%",
      muted: "210 40% 96%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "210 40% 96%",
      accentForeground: "222.2 84% 4.9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "24.6 95% 53.1%",
    },
  },
  {
    name: "Yellow",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "47.9 95.8% 53.1%", // yellow-500
      primaryForeground: "26 83.3% 14.1%",
      secondary: "210 40% 96%",
      secondaryForeground: "222.2 84% 4.9%",
      muted: "210 40% 96%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "210 40% 96%",
      accentForeground: "222.2 84% 4.9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "47.9 95.8% 53.1%",
    },
  },
  {
    name: "Green",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "142.1 76.2% 36.3%", // green-600
      primaryForeground: "355.7 100% 97.3%",
      secondary: "210 40% 96%",
      secondaryForeground: "222.2 84% 4.9%",
      muted: "210 40% 96%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "210 40% 96%",
      accentForeground: "222.2 84% 4.9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "142.1 76.2% 36.3%",
    },
  },
  {
    name: "Blue",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "221.2 83.2% 53.3%", // blue-500
      primaryForeground: "210 40% 98%",
      secondary: "214.3 31.8% 91.4%",
      secondaryForeground: "222.2 84% 4.9%",
      muted: "214.3 31.8% 91.4%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "214.3 31.8% 91.4%",
      accentForeground: "222.2 84% 4.9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "221.2 83.2% 53.3%",
    },
  },
  {
    name: "Indigo",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "238.7 83.5% 66.7%", // indigo-500
      primaryForeground: "210 40% 98%",
      secondary: "210 40% 96%",
      secondaryForeground: "222.2 84% 4.9%",
      muted: "210 40% 96%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "210 40% 96%",
      accentForeground: "222.2 84% 4.9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "238.7 83.5% 66.7%",
    },
  },
  {
    name: "Purple",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "262.1 83.3% 57.8%", // purple-500
      primaryForeground: "210 40% 98%",
      secondary: "210 40% 96%",
      secondaryForeground: "222.2 84% 4.9%",
      muted: "210 40% 96%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "210 40% 96%",
      accentForeground: "222.2 84% 4.9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "262.1 83.3% 57.8%",
    },
  },
  {
    name: "Pink",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "330.4 81.2% 60.4%", // pink-500
      primaryForeground: "355.7 100% 97.3%",
      secondary: "210 40% 96%",
      secondaryForeground: "222.2 84% 4.9%",
      muted: "210 40% 96%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "210 40% 96%",
      accentForeground: "222.2 84% 4.9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "330.4 81.2% 60.4%",
    },
  },
  {
    name: "Rose",
    colors: {
      background: "0 0% 100%",
      foreground: "222.2 84% 4.9%",
      card: "0 0% 100%",
      cardForeground: "222.2 84% 4.9%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 84% 4.9%",
      primary: "346.8 77.2% 49.8%", // rose-500
      primaryForeground: "355.7 100% 97.3%",
      secondary: "210 40% 96%",
      secondaryForeground: "222.2 84% 4.9%",
      muted: "210 40% 96%",
      mutedForeground: "215.4 16.3% 46.9%",
      accent: "210 40% 96%",
      accentForeground: "222.2 84% 4.9%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 40% 98%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "346.8 77.2% 49.8%",
    },
  },
  // Natural Element Themes
  {
    name: "Ocean View",
    colors: {
      background: "200 100% 97%", // Very light ocean blue
      foreground: "200 100% 15%", // Deep ocean blue
      card: "200 50% 98%",
      cardForeground: "200 100% 15%",
      popover: "200 50% 98%",
      popoverForeground: "200 100% 15%",
      primary: "195 100% 45%", // Ocean blue
      primaryForeground: "200 100% 97%",
      secondary: "190 60% 85%", // Light sea foam
      secondaryForeground: "200 100% 15%",
      muted: "190 60% 85%",
      mutedForeground: "200 50% 35%",
      accent: "185 70% 80%", // Aqua accent
      accentForeground: "200 100% 15%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "200 100% 97%",
      border: "190 40% 75%",
      input: "190 40% 75%",
      ring: "195 100% 45%",
    },
  },
  {
    name: "Fire Nation",
    colors: {
      background: "15 100% 96%", // Warm cream
      foreground: "15 100% 10%", // Deep burgundy
      card: "20 80% 97%",
      cardForeground: "15 100% 10%",
      popover: "20 80% 97%",
      popoverForeground: "15 100% 10%",
      primary: "5 100% 55%", // Fiery red
      primaryForeground: "15 100% 96%",
      secondary: "25 90% 88%", // Warm orange tint
      secondaryForeground: "15 100% 10%",
      muted: "25 90% 88%",
      mutedForeground: "15 60% 30%",
      accent: "35 100% 75%", // Golden accent
      accentForeground: "15 100% 10%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "15 100% 96%",
      border: "25 60% 80%",
      input: "25 60% 80%",
      ring: "5 100% 55%",
    },
  },
  {
    name: "Earth Kingdom",
    colors: {
      background: "80 30% 95%", // Light earth tone
      foreground: "80 50% 15%", // Deep earth brown
      card: "75 25% 96%",
      cardForeground: "80 50% 15%",
      popover: "75 25% 96%",
      popoverForeground: "80 50% 15%",
      primary: "85 60% 35%", // Earth green
      primaryForeground: "80 30% 95%",
      secondary: "70 40% 85%", // Light sage
      secondaryForeground: "80 50% 15%",
      muted: "70 40% 85%",
      mutedForeground: "80 30% 40%",
      accent: "90 50% 70%", // Moss green
      accentForeground: "80 50% 15%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "80 30% 95%",
      border: "75 30% 75%",
      input: "75 30% 75%",
      ring: "85 60% 35%",
    },
  },
  {
    name: "Air Temple",
    colors: {
      background: "210 60% 98%", // Ethereal light blue
      foreground: "210 80% 20%", // Deep sky blue
      card: "215 50% 97%",
      cardForeground: "210 80% 20%",
      popover: "215 50% 97%",
      popoverForeground: "210 80% 20%",
      primary: "200 90% 60%", // Sky blue
      primaryForeground: "210 60% 98%",
      secondary: "220 40% 90%", // Light cloud gray
      secondaryForeground: "210 80% 20%",
      muted: "220 40% 90%",
      mutedForeground: "210 50% 45%",
      accent: "180 70% 85%", // Light cyan
      accentForeground: "210 80% 20%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 60% 98%",
      border: "215 30% 80%",
      input: "215 30% 80%",
      ring: "200 90% 60%",
    },
  },
  // Mystical & Fantasy Themes
  {
    name: "Midnight Sorcery",
    colors: {
      background: "260 30% 8%", // Deep midnight
      foreground: "280 60% 85%", // Light purple
      card: "260 25% 12%",
      cardForeground: "280 60% 85%",
      popover: "260 25% 12%",
      popoverForeground: "280 60% 85%",
      primary: "270 100% 65%", // Magical purple
      primaryForeground: "260 30% 8%",
      secondary: "250 30% 20%", // Dark purple
      secondaryForeground: "280 60% 85%",
      muted: "250 30% 20%",
      mutedForeground: "270 40% 60%",
      accent: "290 80% 50%", // Mystical magenta
      accentForeground: "280 60% 85%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "280 60% 85%",
      border: "250 25% 25%",
      input: "250 25% 25%",
      ring: "270 100% 65%",
    },
  },
  {
    name: "Enchanted Forest",
    colors: {
      background: "140 40% 96%", // Light forest green
      foreground: "140 80% 15%", // Deep forest green
      card: "135 35% 97%",
      cardForeground: "140 80% 15%",
      popover: "135 35% 97%",
      popoverForeground: "140 80% 15%",
      primary: "145 70% 40%", // Forest green
      primaryForeground: "140 40% 96%",
      secondary: "120 50% 85%", // Light mint
      secondaryForeground: "140 80% 15%",
      muted: "120 50% 85%",
      mutedForeground: "140 50% 35%",
      accent: "160 60% 70%", // Sage green
      accentForeground: "140 80% 15%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "140 40% 96%",
      border: "130 40% 75%",
      input: "130 40% 75%",
      ring: "145 70% 40%",
    },
  },
  {
    name: "Golden Citadel",
    colors: {
      background: "45 80% 96%", // Light golden cream
      foreground: "35 100% 15%", // Deep golden brown
      card: "50 70% 97%",
      cardForeground: "35 100% 15%",
      popover: "50 70% 97%",
      popoverForeground: "35 100% 15%",
      primary: "42 100% 50%", // Rich gold
      primaryForeground: "45 80% 96%",
      secondary: "55 60% 88%", // Light champagne
      secondaryForeground: "35 100% 15%",
      muted: "55 60% 88%",
      mutedForeground: "40 70% 35%",
      accent: "38 90% 65%", // Bright gold
      accentForeground: "35 100% 15%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "45 80% 96%",
      border: "50 50% 80%",
      input: "50 50% 80%",
      ring: "42 100% 50%",
    },
  },
  // Cosmic & Sci-Fi Themes
  {
    name: "Cosmic Nebula",
    colors: {
      background: "280 20% 10%", // Deep space
      foreground: "300 60% 85%", // Light cosmic purple
      card: "285 15% 15%",
      cardForeground: "300 60% 85%",
      popover: "285 15% 15%",
      popoverForeground: "300 60% 85%",
      primary: "320 100% 60%", // Nebula pink
      primaryForeground: "280 20% 10%",
      secondary: "260 40% 25%", // Dark cosmic blue
      secondaryForeground: "300 60% 85%",
      muted: "260 40% 25%",
      mutedForeground: "290 50% 65%",
      accent: "340 80% 70%", // Bright cosmic pink
      accentForeground: "280 20% 10%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "300 60% 85%",
      border: "270 30% 30%",
      input: "270 30% 30%",
      ring: "320 100% 60%",
    },
  },
  {
    name: "Cyber Matrix",
    colors: {
      background: "180 100% 5%", // Deep cyber black
      foreground: "160 100% 80%", // Bright cyber green
      card: "180 80% 8%",
      cardForeground: "160 100% 80%",
      popover: "180 80% 8%",
      popoverForeground: "160 100% 80%",
      primary: "150 100% 50%", // Matrix green
      primaryForeground: "180 100% 5%",
      secondary: "170 60% 15%", // Dark cyber green
      secondaryForeground: "160 100% 80%",
      muted: "170 60% 15%",
      mutedForeground: "155 80% 60%",
      accent: "140 100% 60%", // Bright lime
      accentForeground: "180 100% 5%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "160 100% 80%",
      border: "170 50% 20%",
      input: "170 50% 20%",
      ring: "150 100% 50%",
    },
  },
  // Seasonal Themes
  {
    name: "Cherry Blossom",
    colors: {
      background: "340 100% 98%", // Soft pink white
      foreground: "340 80% 20%", // Deep rose
      card: "345 80% 97%",
      cardForeground: "340 80% 20%",
      popover: "345 80% 97%",
      popoverForeground: "340 80% 20%",
      primary: "330 100% 70%", // Cherry blossom pink
      primaryForeground: "340 100% 98%",
      secondary: "350 60% 90%", // Light blush
      secondaryForeground: "340 80% 20%",
      muted: "350 60% 90%",
      mutedForeground: "340 50% 45%",
      accent: "320 80% 80%", // Soft magenta
      accentForeground: "340 80% 20%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "340 100% 98%",
      border: "345 50% 85%",
      input: "345 50% 85%",
      ring: "330 100% 70%",
    },
  },
  {
    name: "Autumn Harvest",
    colors: {
      background: "30 60% 95%", // Warm cream
      foreground: "25 80% 15%", // Deep autumn brown
      card: "35 50% 96%",
      cardForeground: "25 80% 15%",
      popover: "35 50% 96%",
      popoverForeground: "25 80% 15%",
      primary: "20 100% 55%", // Pumpkin orange
      primaryForeground: "30 60% 95%",
      secondary: "40 70% 85%", // Light harvest gold
      secondaryForeground: "25 80% 15%",
      muted: "40 70% 85%",
      mutedForeground: "30 60% 35%",
      accent: "15 90% 65%", // Warm red-orange
      accentForeground: "25 80% 15%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "30 60% 95%",
      border: "35 50% 80%",
      input: "35 50% 80%",
      ring: "20 100% 55%",
    },
  },
  // League of Legends Inspired Themes
  {
    name: "Demacia's Light",
    colors: {
      background: "210 100% 98%", // Pure white with blue tint
      foreground: "220 100% 15%", // Deep royal blue
      card: "215 80% 97%",
      cardForeground: "220 100% 15%",
      popover: "215 80% 97%",
      popoverForeground: "220 100% 15%",
      primary: "210 100% 50%", // Demacian blue
      primaryForeground: "210 100% 98%",
      secondary: "45 100% 85%", // Golden accents
      secondaryForeground: "220 100% 15%",
      muted: "215 60% 90%",
      mutedForeground: "220 60% 40%",
      accent: "45 100% 70%", // Bright gold
      accentForeground: "220 100% 15%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "210 100% 98%",
      border: "215 50% 80%",
      input: "215 50% 80%",
      ring: "210 100% 50%",
    },
  },
  {
    name: "Noxian Crimson",
    colors: {
      background: "0 20% 8%", // Dark crimson black
      foreground: "0 60% 85%", // Light red-white
      card: "0 15% 12%",
      cardForeground: "0 60% 85%",
      popover: "0 15% 12%",
      popoverForeground: "0 60% 85%",
      primary: "0 100% 55%", // Noxian red
      primaryForeground: "0 20% 8%",
      secondary: "0 30% 20%", // Dark red
      secondaryForeground: "0 60% 85%",
      muted: "0 30% 20%",
      mutedForeground: "0 40% 60%",
      accent: "15 80% 50%", // Blood orange
      accentForeground: "0 60% 85%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 60% 85%",
      border: "0 25% 25%",
      input: "0 25% 25%",
      ring: "0 100% 55%",
    },
  },
  {
    name: "Ionian Harmony",
    colors: {
      background: "300 40% 96%", // Soft pink-white
      foreground: "280 60% 20%", // Deep purple
      card: "295 35% 97%",
      cardForeground: "280 60% 20%",
      popover: "295 35% 97%",
      popoverForeground: "280 60% 20%",
      primary: "290 80% 60%", // Ionian pink-purple
      primaryForeground: "300 40% 96%",
      secondary: "320 50% 85%", // Light cherry blossom
      secondaryForeground: "280 60% 20%",
      muted: "320 50% 85%",
      mutedForeground: "285 50% 45%",
      accent: "270 70% 70%", // Mystical purple
      accentForeground: "280 60% 20%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "300 40% 96%",
      border: "310 40% 80%",
      input: "310 40% 80%",
      ring: "290 80% 60%",
    },
  },
  {
    name: "Void Corruption",
    colors: {
      background: "280 40% 5%", // Deep void black
      foreground: "280 100% 80%", // Void purple light
      card: "285 35% 8%",
      cardForeground: "280 100% 80%",
      popover: "285 35% 8%",
      popoverForeground: "280 100% 80%",
      primary: "285 100% 65%", // Void purple
      primaryForeground: "280 40% 5%",
      secondary: "270 50% 15%", // Dark void
      secondaryForeground: "280 100% 80%",
      muted: "270 50% 15%",
      mutedForeground: "280 70% 60%",
      accent: "300 90% 70%", // Bright void magenta
      accentForeground: "280 40% 5%",
      destructive: "320 100% 60%", // Void pink
      destructiveForeground: "280 100% 80%",
      border: "275 40% 20%",
      input: "275 40% 20%",
      ring: "285 100% 65%",
    },
  },
  {
    name: "Freljord Ice",
    colors: {
      background: "200 60% 96%", // Icy white
      foreground: "200 100% 15%", // Deep ice blue
      card: "195 50% 97%",
      cardForeground: "200 100% 15%",
      popover: "195 50% 97%",
      popoverForeground: "200 100% 15%",
      primary: "190 100% 45%", // Freljord blue
      primaryForeground: "200 60% 96%",
      secondary: "210 40% 88%", // Light frost
      secondaryForeground: "200 100% 15%",
      muted: "210 40% 88%",
      mutedForeground: "200 60% 35%",
      accent: "180 80% 70%", // Ice crystal blue
      accentForeground: "200 100% 15%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "200 60% 96%",
      border: "205 40% 80%",
      input: "205 40% 80%",
      ring: "190 100% 45%",
    },
  },
  {
    name: "Shuriman Gold",
    colors: {
      background: "45 70% 95%", // Desert sand
      foreground: "35 80% 15%", // Deep bronze
      card: "50 60% 96%",
      cardForeground: "35 80% 15%",
      popover: "50 60% 96%",
      popoverForeground: "35 80% 15%",
      primary: "42 100% 55%", // Shuriman gold
      primaryForeground: "45 70% 95%",
      secondary: "55 50% 85%", // Light sand
      secondaryForeground: "35 80% 15%",
      muted: "55 50% 85%",
      mutedForeground: "40 60% 35%",
      accent: "38 100% 65%", // Bright gold
      accentForeground: "35 80% 15%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "45 70% 95%",
      border: "50 40% 78%",
      input: "50 40% 78%",
      ring: "42 100% 55%",
    },
  },
  {
    name: "Shadow Isles",
    colors: {
      background: "120 20% 8%", // Cursed dark green
      foreground: "120 60% 75%", // Spectral green
      card: "125 15% 12%",
      cardForeground: "120 60% 75%",
      popover: "125 15% 12%",
      popoverForeground: "120 60% 75%",
      primary: "130 80% 50%", // Spectral green
      primaryForeground: "120 20% 8%",
      secondary: "110 30% 18%", // Dark cursed green
      secondaryForeground: "120 60% 75%",
      muted: "110 30% 18%",
      mutedForeground: "120 50% 55%",
      accent: "140 70% 60%", // Bright spectral
      accentForeground: "120 20% 8%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "120 60% 75%",
      border: "115 25% 22%",
      input: "115 25% 22%",
      ring: "130 80% 50%",
    },
  },
  {
    name: "Piltovan Tech",
    colors: {
      background: "200 40% 95%", // Clean tech white
      foreground: "200 80% 20%", // Tech blue-gray
      card: "195 35% 96%",
      cardForeground: "200 80% 20%",
      popover: "195 35% 96%",
      popoverForeground: "200 80% 20%",
      primary: "190 100% 50%", // Hextech blue
      primaryForeground: "200 40% 95%",
      secondary: "45 80% 80%", // Gold accents
      secondaryForeground: "200 80% 20%",
      muted: "205 30% 88%",
      mutedForeground: "200 50% 40%",
      accent: "50 100% 65%", // Bright gold
      accentForeground: "200 80% 20%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "200 40% 95%",
      border: "200 30% 82%",
      input: "200 30% 82%",
      ring: "190 100% 50%",
    },
  },
  {
    name: "Zaun Chemtech",
    colors: {
      background: "80 30% 12%", // Toxic green-black
      foreground: "80 80% 75%", // Toxic green light
      card: "85 25% 15%",
      cardForeground: "80 80% 75%",
      popover: "85 25% 15%",
      popoverForeground: "80 80% 75%",
      primary: "75 100% 55%", // Chemtech green
      primaryForeground: "80 30% 12%",
      secondary: "70 40% 25%", // Dark toxic
      secondaryForeground: "80 80% 75%",
      muted: "70 40% 25%",
      mutedForeground: "80 60% 55%",
      accent: "65 90% 60%", // Bright toxic yellow
      accentForeground: "80 30% 12%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "80 80% 75%",
      border: "75 35% 28%",
      input: "75 35% 28%",
      ring: "75 100% 55%",
    },
  },
  {
    name: "Targonian Cosmic",
    colors: {
      background: "240 60% 95%", // Celestial white
      foreground: "240 80% 20%", // Deep cosmic blue
      card: "235 50% 96%",
      cardForeground: "240 80% 20%",
      popover: "235 50% 96%",
      popoverForeground: "240 80% 20%",
      primary: "250 100% 65%", // Cosmic purple-blue
      primaryForeground: "240 60% 95%",
      secondary: "280 60% 85%", // Light cosmic purple
      secondaryForeground: "240 80% 20%",
      muted: "280 60% 85%",
      mutedForeground: "245 60% 45%",
      accent: "270 80% 70%", // Bright cosmic purple
      accentForeground: "240 80% 20%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "240 60% 95%",
      border: "250 40% 80%",
      input: "250 40% 80%",
      ring: "250 100% 65%",
    },
  },
  {
    name: "Bilgewater Depths",
    colors: {
      background: "200 40% 92%", // Sea foam white
      foreground: "200 80% 15%", // Deep ocean blue
      card: "195 35% 94%",
      cardForeground: "200 80% 15%",
      popover: "195 35% 94%",
      popoverForeground: "200 80% 15%",
      primary: "185 100% 40%", // Deep sea teal
      primaryForeground: "200 40% 92%",
      secondary: "30 70% 75%", // Weathered gold
      secondaryForeground: "200 80% 15%",
      muted: "205 30% 85%",
      mutedForeground: "200 50% 35%",
      accent: "25 80% 60%", // Pirate gold
      accentForeground: "200 80% 15%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "200 40% 92%",
      border: "200 30% 78%",
      input: "200 30% 78%",
      ring: "185 100% 40%",
    },
  },
  {
    name: "Ixtal Jungle",
    colors: {
      background: "140 50% 94%", // Light jungle green
      foreground: "140 80% 15%", // Deep jungle green
      card: "135 45% 95%",
      cardForeground: "140 80% 15%",
      popover: "135 45% 95%",
      popoverForeground: "140 80% 15%",
      primary: "145 100% 35%", // Ixtal green
      primaryForeground: "140 50% 94%",
      secondary: "60 80% 80%", // Golden vines
      secondaryForeground: "140 80% 15%",
      muted: "150 40% 85%",
      mutedForeground: "140 60% 35%",
      accent: "55 90% 65%", // Bright jungle gold
      accentForeground: "140 80% 15%",
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "140 50% 94%",
      border: "145 35% 78%",
      input: "145 35% 78%",
      ring: "145 100% 35%",
    },
  },
]

interface ThemeContextType {
  currentPalette: ColorPalette
  palettes: ColorPalette[]
  selectedColorKey: string | null
  setCurrentPalette: (palette: ColorPalette) => void
  addCustomPalette: (palette: ColorPalette) => void
  updateCustomPalette: (palette: ColorPalette) => void
  exportTheme: () => string
  selectColorForEditing: (colorKey: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentPalette, setCurrentPalette] = useState<ColorPalette>(defaultPalettes[0])
  const [palettes, setPalettes] = useState<ColorPalette[]>(defaultPalettes)
  const [selectedColorKey, setSelectedColorKey] = useState<string | null>(null)

  useEffect(() => {
    const root = document.documentElement
    Object.entries(currentPalette.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`, value)
    })
  }, [currentPalette])

  const addCustomPalette = (palette: ColorPalette) => {
    setPalettes((prev) => [...prev, palette])
  }

  const updateCustomPalette = (palette: ColorPalette) => {
    setPalettes((prev) => prev.map((p) => (p.name === palette.name ? palette : p)))
    if (currentPalette.name === palette.name) {
      setCurrentPalette(palette)
    }
  }

  const selectColorForEditing = (colorKey: string) => {
    setSelectedColorKey(colorKey)
  }

  const exportTheme = () => {
    const cssVariables = Object.entries(currentPalette.colors)
      .map(([key, value]) => `  --${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value};`)
      .join("\n")

    const exportData = {
      name: currentPalette.name,
      cssVariables: `:root {\n${cssVariables}\n}`,
      tailwindConfig: {
        theme: {
          extend: {
            colors: Object.fromEntries(
              Object.entries(currentPalette.colors).map(([key, value]) => [
                key.replace(/([A-Z])/g, "-$1").toLowerCase(),
                `hsl(${value})`,
              ]),
            ),
          },
        },
      },
      palette: currentPalette,
    }

    return JSON.stringify(exportData, null, 2)
  }

  return (
    <ThemeContext.Provider
      value={{
        currentPalette,
        palettes,
        selectedColorKey,
        setCurrentPalette,
        addCustomPalette,
        updateCustomPalette,
        exportTheme,
        selectColorForEditing,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
