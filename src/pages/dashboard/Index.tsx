// In your Dashboard.tsx file
import { Outlet } from "react-router-dom";

import DashboardLayout from "@/layouts/DashboardLayout";

export default function Page() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}
