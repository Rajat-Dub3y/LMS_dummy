import NonDashboardNavbar from "@/components/NonDashBoardNavbar";
import Landing from "@/app/(nondashboard)/landing/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar />
      <main className="nondashboard-layout__main">
        <Landing/>
      </main>
      <h1>Hi</h1>
      <Footer/>
    </div>
  );
}
