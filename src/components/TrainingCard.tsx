import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Progress,
  Button,
} from "@heroui/react";

type TrainingCardProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  progress: number;
};

export default function TrainingCard({
  title,
  description,
  tags,
  link,
  progress,
}: TrainingCardProps) {
  return (
    <Card className="w-full max-w-[400px]">
      <CardHeader className="flex flex-col items-start">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm text-gray-500 bg-white/10 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-4">
        <p>{description}</p>

        <div className="flex flex-col gap-1">
          <Progress
            aria-label={`Utbildningens framsteg: ${progress}% klar`}
            color="success"
            size="md"
            value={progress}
          />
          <p className="text-xs text-gray-500">{progress}% klar</p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button fullWidth as={Link} color="success" href={link} target="_blank">
          Gå till utbildningen
        </Button>
      </CardFooter>
    </Card>
  );
}
