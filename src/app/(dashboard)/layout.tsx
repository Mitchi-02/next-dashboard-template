import Header from "@/components/layout/Header"
import Sidebar from "@/components/layout/Sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[100dvh]">
      <Sidebar className="shrink-0" />
      <main className="flex max-h-full grow flex-col overflow-y-auto">
        <Header className="flex-shrink-0" />
        <main className="page-container flex flex-grow flex-col">{children}</main>
      </main>
    </div>
  )
}
