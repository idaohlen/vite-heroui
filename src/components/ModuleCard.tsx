import type { Selection } from "@react-types/shared";

import { useState } from "react";
import {
  Button,
  PressEvent,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Select,
  SelectItem,
} from "@heroui/react";
import { motion } from "framer-motion";

interface ModuleCardProps {
  title: string;
  description: string;
  onSelect: (e: PressEvent) => void;
  selected: boolean;
  basePrice: number;
  durationLabel: string;
}

export function ModuleCard({
  title,
  description,
  onSelect,
  selected,
  basePrice,
  durationLabel,
}: ModuleCardProps) {
  const [selectedPlan, setSelectedPlan] = useState<number>(10);

  const calculatePrice = () => selectedPlan * basePrice;

  const handleTrainerChange = (keys: Selection) => {
    const value = Array.from(keys)[0];

    setSelectedPlan(Number(value));
  };

  return (
    <motion.div
      animate={{ scale: selected ? 1.1 : 1 }}
      initial={{ scale: 1 }}
      // whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className={`p-4 cursor-pointer transition-all duration-300 mb-5 ${selected ? "border-2 border-yellow-500 shadow-lg" : "border border-gray-300"}`}
      >
        <CardHeader>
          <h2 className="">{title}</h2>
        </CardHeader>
        <CardBody>
          <p className="text-lg font-bold">{description}</p>
          <label
            className="text-sm text-gray-500 block mb-1 mt-4"
            htmlFor="trainer-select"
          >
            Antal tränare:
          </label>
          <Select
            aria-label="Select trainers"
            className="mb-4 "
            id="trainer-select"
            selectedKeys={new Set([selectedPlan.toString()])}
            onSelectionChange={handleTrainerChange}
          >
            <SelectItem key="5">5 tränare</SelectItem>
            <SelectItem key="10">10 tränare</SelectItem>
            <SelectItem key="20">20 tränare</SelectItem>
            <SelectItem key="30">30 tränare</SelectItem>
          </Select>
          <p className="text-gray-500 self-center mt-4">
            {calculatePrice()}kr / {durationLabel}
          </p>
        </CardBody>
        <CardFooter>
          <Button className="mt-2 w-full" onPress={onSelect}>
            Välj
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
