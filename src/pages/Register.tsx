import DefaultLayout from "@/layouts/DefaultLayout";
import RegisterForm from "@/components/RegisterForm";
import OnboardingForm from "@/components/OnboardingForm";

export default function Page() {
  return (
    <DefaultLayout>
      <RegisterForm />
      <OnboardingForm />
    </DefaultLayout>
  );
}
