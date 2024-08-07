"use client"
import DashboardNav from "@/components/layout/DashboardNav"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui-library/sheet"
import { navItems } from "@/routes"
import { MenuIcon } from "lucide-react"
import { useState } from "react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="!px-0">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="space-y-1">
              <DashboardNav items={navItems} isMobileNav={true} setOpen={setOpen} />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
