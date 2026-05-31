import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Chapter",
};

export default function CourseChapterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
