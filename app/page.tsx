import { CampingActivitiesOnepager } from "@/components/camping-activities-onepager";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-1">
        <CampingActivitiesOnepager />
      </main>
    </div>
  );
}
