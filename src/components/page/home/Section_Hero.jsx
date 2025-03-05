import { DoraDesignIcon, SilsilaIcon, WavefunIcon } from "@/components/icons";

export default function Section_Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center py-16 md:py-24 lg:py-32  bg-background">
            {/* Hero Text */}
            <div className="text-center px-4">
                <p className="text-3xl md:text-5xl xl:text-7xl font-syne font-extrabold text-foreground flex flex-wrap items-center md:justify-center space-x-2">
                    <span className="inline-block">I AM A</span>
                    <img src="/home/hero/Rectangle.png" alt="Icon" className="h-8 md:h-12" />
                    <span className="inline-block">FREELANCE</span>
                </p>
                <p className="text-3xl md:text-5xl xl:text-7xl font-syne font-extrabold text-foreground flex flex-wrap items-center md:justify-center space-x-2  mt-4 md:mt-8">
                    <span className="inline-block">DESIGNER</span>
                    <img src="/home/hero/Rectangle (1).png" alt="Icon" className="h-8 md:h-12" />
                    <span className="inline-block">FROM</span>
                </p>
                <p className="text-3xl md:text-5xl xl:text-7xl font-syne font-extrabold text-foreground flex flex-wrap items-center md:justify-center space-x-2  mt-4 md:mt-8">
                    <span className="inline-block">San Francisco</span>
                </p>
            </div>

            {/* Branding & Introduction */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-32 max-w-6xl px-8">
                <div className="grid grid-cols-3 gap-8 justify-items-start items-center">
                    <DoraDesignIcon className="w-36" aria-label="Dora Design" />
                    <WavefunIcon className="w-36" aria-label="Wavefun" />
                    <SilsilaIcon className="w-36" aria-label="Silsila" />
                </div>
                <div className="col-span-1">
                    <p className="text-sm lg:text-lg text-muted-foreground leading-relaxed">
                        Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of
                        distinctive branding and web designs, each crafted to captivate and inspire.
                    </p>
                </div>
            </div>
        </section>
    );
}
