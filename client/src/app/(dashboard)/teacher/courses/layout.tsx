import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teacher Courses",
};

export default function TeacherCoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
