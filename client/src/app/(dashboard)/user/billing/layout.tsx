import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Billing",
};

export default function UserBillingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
