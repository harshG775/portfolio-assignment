import { ArrowUpRightIcon } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="w-full border-t bg-background py-6">
            <div className="container mx-auto mb-6">
                <div className="flex overflow-x-auto mb-6">
                    <div className="p-20">FIGMA</div>
                    <div className="p-20">FIGMA</div>
                    <div className="p-20">FIGMA</div>
                    <div className="p-20">FIGMA</div>
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-center mb-6">LET’S TALK!</h2>
                    <div className="flex justify-center">
                        <Link to={"mailto:rehanurraihan@gmail.com"}>rehanurraihan@gmail.com</Link>
                        <ArrowUpRightIcon />
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex flex-col items-center justify-between space-y-4 px-4 md:flex-row md:space-y-0 md:px-6">
                {/* Copyright Section */}
                <div className="text-sm text-muted-foreground">© Rehan Raihan - {new Date().getFullYear()}</div>

                {/* Social Media Links */}
                <div className="flex space-x-6">
                    <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                        Dribbble
                    </a>
                    <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                        Behance
                    </a>
                    <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                        Twitter
                    </a>
                    <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}
