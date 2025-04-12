import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function Page() {
  return (
    <DefaultLayout>
      <h1 className={title()}>Payment Success</h1>
    </DefaultLayout>
  );
}
