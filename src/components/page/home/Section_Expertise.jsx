import Section from "@/components/partials/Section";
import { CircleIcon } from "lucide-react";

const expertise = [
    {
        title: "Branding",
        description:
            "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
        title: "UI Design",
        description:
            "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
        title: "UX Design",
        description:
            "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.",
    },
    {
        title: "Development",
        description:
            "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites.",
    },
];

export default function Section_Expertise() {
    return (
        <Section title="Expertise">
            <ul className="grid gap-6 sm:grid-cols-2">
                {expertise.map(({ title, description }, index) => (
                    <li key={index} className="p-4 bg-muted rounded-xl shadow-sm">
                        <div className="flex items-center gap-2">
                            <CircleIcon className="w-4 h-4"/>
                            <div className="font-semibold text-lg ">{title}</div>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-2">{description}</p>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
