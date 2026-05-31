import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Course",
};

export default function TeacherCourseEditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
