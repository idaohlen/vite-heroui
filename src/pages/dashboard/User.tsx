import TrainingCard from "@/components/TrainingCard";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <TrainingCard
        description="Fördjupa dina kunskaper i speluppbyggnad, press och positionsspel"
        link="https://svenskfotboll.learnifier.se/a1/catalog/selfreg/v1-30979-37e4540ea7478b72/overview"
        progress={50}
        tags={["Grundnivå", "3v3", "Speluppbyggnad"]}
        title="Spelförståelse"
      />

      <TrainingCard
        description="Fördjupa dina kunskaper i ledarskap"
        link="https://google.com"
        progress={70}
        tags={["Avancerad", "3v3", "Ledarskap"]}
        title="Ledarskap"
      />
    </div>
  );
}
