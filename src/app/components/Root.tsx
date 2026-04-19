import { Outlet } from "react-router";
import { LanguageProvider } from "../context/LanguageContext";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function Root() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
