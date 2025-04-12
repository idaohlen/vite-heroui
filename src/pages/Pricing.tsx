import { useState } from "react";

import DefaultLayout from "@/layouts/DefaultLayout";
import { ModuleCard } from "@/components/ModuleCard";

export default function Page() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-8">Modules</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ModuleCard
            basePrice={99}
            description="Basic module with limited features."
            durationLabel="1 månad"
            selected={selectedModule === "Basic"}
            title="Basic"
            onSelect={() => setSelectedModule("Basic")}
          />
          <ModuleCard
            basePrice={199}
            description="Pro module with advanced features."
            durationLabel="6 månader"
            selected={selectedModule === "Pro"}
            title="Pro"
            onSelect={() => setSelectedModule("Pro")}
          />
          <ModuleCard
            basePrice={299}
            description="Enterprise module with all features."
            durationLabel="12 månader"
            selected={selectedModule === "Enterprise"}
            title="Enterprise"
            onSelect={() => setSelectedModule("Enterprise")}
          />
        </div>
      </div>
    </DefaultLayout>
  );
}
