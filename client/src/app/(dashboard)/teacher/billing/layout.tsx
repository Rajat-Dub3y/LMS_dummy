import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teacher Billing",
};

export default function TeacherBillingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
