import { SparklesIcon } from "lucide-react";
export default function Section({ title, titleRight, children }) {
    return (
        <section className="py-16 px-4 sm:px-8">
            <div className="lg:max-w-7xl container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <SparklesIcon />
                    <h2 className="text-2xl font-bold text-foreground">{title}</h2>
                </div>
                {titleRight}
            </div>
            <div className="lg:max-w-7xl container mx-auto py-6">{children}</div>
        </section>
    );
}
