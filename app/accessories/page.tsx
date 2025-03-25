import { UserLayout } from "@/components/user-layout"
import { AccessoryCard } from "@/components/accessory-card"
import { accessories } from "@/lib/data"

export default function AccessoriesPage() {
  return (
    <UserLayout>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-3xl font-bold mb-6">All Surgical Items</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessories.map((accessory) => (
            <AccessoryCard key={accessory.id} accessory={accessory} />
          ))}
        </div>
      </div>
    </UserLayout>
  )
}

