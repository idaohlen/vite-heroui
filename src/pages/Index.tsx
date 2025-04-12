import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/DefaultLayout";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <h1 className={title({ color: "violet" })}>{siteConfig.name}</h1>
      <p className="p-4">{siteConfig.description}</p>
    </DefaultLayout>
  );
}
