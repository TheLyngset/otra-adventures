import {CampingActivitiesOnepager} from "@/components/camping-activities-onepager";
import { MobileTopBarComponent } from "@/components/mobile-top-bar";
import { FileText } from "lucide-react";

export default function Home() {
  const logoSvg = (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L1 21h22L12 2zm0 3.516L20.297 19H3.703L12 5.516zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"/>
    </svg>
  )

  const menuItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Activities PDF', 
      href: '/camping-activities.pdf', 
      icon: <FileText className="h-6 w-6" />,
      download: true
    },
  ]

  const handleMenuItemClick = (item) => {
    console.log(`Clicked on ${item.label}`)
    // Add any additional logic here
  }

  return (
    <div className="flex flex-col h-screen">
      <MobileTopBarComponent
        logoSvg={logoSvg}
        menuItems={menuItems}
      />
      <main className="flex-1 p-4">
        <CampingActivitiesOnepager/>
      </main>
    </div>
  )
}