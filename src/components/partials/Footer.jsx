import { ArrowUpRightIcon } from "lucide-react";
import { Link } from "react-router";
import { LetsTalkIcon } from "../icons";

const skillsBanner = [{ title: "WEBFLOW" }, { title: "FIGMA" }, { title: "DESIGNER" }, { title: "DEVELOPER" }];

function SkillsBanner() {
    return (
        <div className="w-full py-8 mb-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {skillsBanner.map(({ title, img }, i) => (
                    <div key={i} className="mx-8 flex items-center gap-2">
                        <img src={img} alt={title} className="w-10 h-10 object-contain" />
                        <span className="text-lg font-semibold text-secondary-foreground ">{title}</span>
                    </div>
                ))}
            </ul>
            <ul
                className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
                aria-hidden="true"
            >
                {skillsBanner.map(({ title, img }, i) => (
                    <div key={i} className="mx-8 flex items-center gap-2">
                        <img src={img} alt={title} className="w-10 h-10 object-contain" />
                        <span className="text-lg font-semibold text-secondary-foreground ">{title}</span>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="w-full  bg-background py-8">
            <div className="container mx-auto mb-10">
                <SkillsBanner />
                <div>
                    <div className="flex justify-center mb-6">
                        <LetsTalkIcon />
                    </div>
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
