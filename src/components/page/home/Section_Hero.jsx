export default function Section_Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 bg-background">
            {/* Hero Text */}
            <div className="text-center">
                <p className="text-3xl md:text-5xl font-bold text-foreground flex items-center justify-center space-x-2">
                    <span>I AM A</span>
                    <img src="/your-image-path.svg" alt="Icon" className="h-8 md:h-12" />
                    <span>FREELANCE</span>
                </p>
                <p className="text-3xl md:text-5xl font-bold text-foreground flex items-center justify-center space-x-2 mt-2">
                    <span>DESIGNER</span>
                    <img src="/your-image-path.svg" alt="Icon" className="h-8 md:h-12" />
                    <span>FROM</span>
                </p>
                <p className="text-3xl md:text-5xl font-bold text-foreground flex items-center justify-center space-x-2 mt-2">
                    <span>San Francisco</span>
                </p>
            </div>

            {/* Branding & Introduction */}
            <div className="grid grid-cols-6 gap-4 mt-12 max-w-4xl">
                <div className="flex items-center justify-center">
                    <div className="p-4 bg-muted rounded-lg shadow-md">Brand icon</div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="p-4 bg-muted rounded-lg shadow-md">Brand icon</div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="p-4 bg-muted rounded-lg shadow-md">Brand icon</div>
                </div>
                <div className="col-span-3">
                    <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                        Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of
                        distinctive branding and web designs, each crafted to captivate and inspire.
                    </p>
                </div>
            </div>
        </section>
    );
}
