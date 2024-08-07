import Breadcrumbs from "@/components/layout/Breadcrumbs"
import { Button } from "@/components/ui-library/button"
import { Separator } from "@/components/ui-library/separator"
import { Heading } from "@/components/ui/Heading"
import { Plus } from "lucide-react"
import Link from "next/link"
const breadcrumbItems = [
  { title: "Tableau de bord", link: "/" },
  { title: "Achat", link: "/achat" },
  { title: "Articles", link: "/achat/articles" }
]
export default function ArticlesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="flex items-start justify-between">
        <Heading title={`Articles`} />
        <Button className="text-xs md:text-sm" asChild>
          <Link href="/dashboard/user/new" className="inline-flex items-center">
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </Button>
      </div>
      <Separator className="my-4" />
    </>
  )
}
