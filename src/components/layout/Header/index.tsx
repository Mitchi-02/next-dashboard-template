import { cn } from "@/lib/utils"
import MobileSidebar from "../MobileSidebar"
import UserNav from "../UserNav"
import { DateTime } from "luxon"

export default function Header({ className }: { className?: string }) {
  return (
    <header className={cn("bg-card", className)}>
      <nav className="flex items-center justify-between px-6 py-6">
        <div className={cn("flex items-center gap-4")}>
          <div className="block lg:hidden">
            <MobileSidebar />
          </div>
          <p className="text-lg font-medium capitalize">
            {DateTime.now().setLocale("fr").toFormat("cccc, dd MMMM yyyy - HH:mm")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <UserNav />
        </div>
      </nav>
    </header>
  )
}
