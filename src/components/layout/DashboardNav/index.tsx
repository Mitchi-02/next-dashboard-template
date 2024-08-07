"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import Icons from "@/components/layout/Icons"
import { cn } from "@/lib/utils"
import { Dispatch, SetStateAction } from "react"
import { useSidebar } from "@/hooks/useSidebar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../../ui-library/tooltip"
import { ChevronsDown } from "lucide-react"
import { Accordion } from "@radix-ui/react-accordion"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui-library/accordion"
import { NavItem } from "@/routes"

interface DashboardNavProps {
  items: NavItem[]
  setOpen?: Dispatch<SetStateAction<boolean>>
  isMobileNav?: boolean
}

function RouteItem({
  item,
  isMinimized,
  setOpen,
  path,
  isChild = false
}: {
  item: NavItem
  isMinimized: boolean
  setOpen?: Dispatch<SetStateAction<boolean>>
  path: string
  isChild?: boolean
}) {
  return (
    <Tooltip key={item.title}>
      <TooltipTrigger asChild>
        <Link
          href={item.href}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground flex items-center gap-2 overflow-hidden rounded-md px-3 py-3 text-sm font-medium",
            item.href === path ? "bg-accent" : "transparent"
          )}
        >
          <item.icon className={`size-5 flex-none`} />
          <span className="truncate">{item.title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent align="center" side="right" sideOffset={8} className={!isMinimized ? "hidden" : "inline-block"}>
        {item.label}
      </TooltipContent>
    </Tooltip>
  )
}

export default function DashboardNav({ items, setOpen, isMobileNav = false }: DashboardNavProps) {
  const path = usePathname()
  const { isMinimized } = useSidebar()

  if (!items?.length) {
    return null
  }

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>
        {items.map((item) => {
          if (item.isParent) {
            return (
              <Accordion type="single" collapsible className="w-full" key={item.title}>
                <AccordionItem
                  value={item.title}
                  className={cn(
                    "overflow-hidden rounded-md border-b-0",
                    path.startsWith(item.href) ? "bg-accent" : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <AccordionTrigger className={cn("px-3 py-3 text-sm font-medium hover:no-underline")}>
                    <Tooltip key={item.title}>
                      <TooltipTrigger asChild>
                        <span className={cn("flex items-center gap-2 overflow-hidden rounded-md text-sm font-medium")}>
                          <item.icon className={`size-5 flex-none`} />
                          <span className="truncate">{item.title}</span>
                        </span>
                      </TooltipTrigger>
                      <TooltipContent
                        align="center"
                        side="right"
                        sideOffset={8}
                        className={!isMinimized ? "hidden" : "inline-block"}
                      >
                        {item.label}
                      </TooltipContent>
                    </Tooltip>
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-0">
                    {item.children?.map((child) => {
                      return (
                        <RouteItem
                          key={child.title}
                          isChild={true}
                          item={child}
                          isMinimized={isMinimized}
                          setOpen={setOpen}
                          path={path}
                        />
                      )
                    })}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          }
          return <RouteItem key={item.title} item={item} isMinimized={isMinimized} setOpen={setOpen} path={path} />
        })}
      </TooltipProvider>
    </nav>
  )
}
