import { Input, Form, Button } from "@heroui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const formSchema = z.object({
  logo: z.any().nullable(), // enkel filhantering
  primaryColor: z.string().min(1),
  secondaryColor: z.string().min(1),
  trainerName: z.string().min(1),
  trainerEmail: z.string().email(),
  paymentEmail: z.string().email(),
});

type Inputs = z.infer<typeof formSchema>;

export default function OnboardingForm() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      logo: null,
      primaryColor: "#000000",
      secondaryColor: "#ffffff",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Onboarding-data:", data);
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    setValue("logo", file);
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      setLogoPreview(null);
    }
  };

  return (
    <div className="flex justify-center py-10">
      <Form
        className="w-full max-w-lg space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Logo */}
        <label className="font-medium" htmlFor="logo-upload">
          Upload the association logo
        </label>
        <input
          accept="image/*"
          id="logo-upload"
          type="file"
          onChange={handleLogoChange}
        />

        {logoPreview && (
          <img
            alt="Förhandsvisning"
            className="w-32 h-32 object-contain border rounded"
            src={logoPreview}
          />
        )}

        {/* Färger */}
        <div className="space-y-4">
          <label className="font-medium" htmlFor="primaryColor">
            Primary compound color
          </label>
          <input
            id="primaryColor"
            type="color"
            {...register("primaryColor")}
            className="w-16 h-10 p-0 border rounded space-y-2"
          />
          {errors.primaryColor && (
            <span className="text-red-500 text-sm">Ogiltig färg</span>
          )}
        </div>

        <div className="space-y-2">
          <label className="font-medium" htmlFor="secondaryColor">
            Secondary compound color
          </label>
          <input
            id="secondaryColor"
            type="color"
            {...register("secondaryColor")}
            className="w-16 h-10 p-0 border rounded"
          />
          {errors.secondaryColor && (
            <span className="text-red-500 text-sm">Ogiltig färg</span>
          )}
        </div>

        {/* Tränare */}
        <Input
          isRequired
          className="w-full justify-center items-center"
          defaultValue=""
          label="Coach's name plus team"
          {...register("trainerName")}
        />
        <Input
          isRequired
          className="w-full justify-center items-center"
          defaultValue=""
          label="Coach's email"
          type="email"
          {...register("trainerEmail")}
        />

        {/* Betalningsmejl */}
        <Input
          isRequired
          className="w-full justify-center items-center"
          defaultValue=""
          label="Payment email"
          type="email"
          {...register("paymentEmail")}
        />

        <Button className="w-full" color="primary" type="submit">
          Spara inställningar
        </Button>
      </Form>
    </div>
  );
}
