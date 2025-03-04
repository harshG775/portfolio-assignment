import { SparklesIcon } from "lucide-react";
export default function Section({ title, children }) {
    return (
        <section className="py-16 px-4 sm:px-8">
            <div className="container mx-auto flex items-center gap-2">
                <SparklesIcon />
                <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            </div>
            <div className="container mx-auto py-6">{children}</div>
        </section>
    );
}
