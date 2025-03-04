import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const getLinkClass = (path) =>
        `text-sm font-medium transition-colors px-4 py-1 rounded-2xl ${
            location.pathname === path ? "bg-foreground text-background" : ""
        }`;

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-foreground/5 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold">LOGO</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center">
                    <Link to="/" className={getLinkClass("/")}>
                        Home
                    </Link>
                    <Link to="/about" className={getLinkClass("/about")}>
                        About
                    </Link>
                    <Link to="/projects" className={getLinkClass("/projects")}>
                        Projects
                    </Link>
                    <Link to="/contacts" className={getLinkClass("/contacts")}>
                        Contacts
                    </Link>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button variant={"outline"} className="rounded-2xl border-2">
                        Hire Me
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <div className="flex flex-col space-y-4 py-6">
                            <Link to="/" className={getLinkClass("/")} onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                            <Link to="/about" className={getLinkClass("/about")} onClick={() => setIsOpen(false)}>
                                About
                            </Link>
                            <Link to="/projects" className={getLinkClass("/projects")} onClick={() => setIsOpen(false)}>
                                Projects
                            </Link>
                            <Link to="/contacts" className={getLinkClass("/contacts")} onClick={() => setIsOpen(false)}>
                                Contacts
                            </Link>
                            <div className="pt-4">
                                {/* <Button className="w-full">Hire Me</Button> */}
                                <Button variant={"outline"} className="rounded-2xl border-2 w-full">
                                    Hire Me
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
