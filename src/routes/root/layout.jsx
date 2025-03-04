import Footer from "@/components/partials/Footer";
import Navbar from "@/components/partials/Navbar";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <div className="fixed bottom-4 right-4">
                <ModeToggle />
            </div>
        </>
    );
}
