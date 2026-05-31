import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Courses",
};

export default function UserCoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
