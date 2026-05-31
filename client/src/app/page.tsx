import type { Metadata } from "next";
import NonDashboardNavbar from "@/components/NonDashBoardNavbar";
import Landing from "@/app/(nondashboard)/landing/page";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <Landing/>
      </main>
      <Footer/>
    </div>
  );
}
