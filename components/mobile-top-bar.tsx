"use client"

import React, { useState } from "react"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MenuItem {
  label: string
  href: string
}

interface MobileTopBarProps {
  logoSvg: React.ReactNode
  menuItems: MenuItem[]
  onMenuItemClick?: (item: MenuItem) => void
}

export function MobileTopBarComponent({ 
  logoSvg, 
  menuItems, 
  onMenuItemClick 
}: MobileTopBarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleMenuItemClick = (item: MenuItem) => {
    toggleMenu()
    onMenuItemClick?.(item)
  }

  return (
    <header className="flex justify-between items-center p-4 bg-primary text-primary-foreground">
      <div className="w-8 h-8">
        {logoSvg}
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="text-primary-foreground" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80%] sm:w-[350px]">
          <nav className="flex flex-col h-full py-6">
            <ul className="space-y-8">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-2xl font-semibold hover:text-primary"
                    onClick={() => handleMenuItemClick(item)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}