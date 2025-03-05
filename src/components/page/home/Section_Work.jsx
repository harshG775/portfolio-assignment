import Section from "@/components/partials/Section";
import { Button } from "@/components/ui/button";
const works = [
    {
        imgUrl: "/home/Analysis-Application.png",
        title: "Analysis Application",
        description:
            "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
        tags: ["Figma", "UX"],
    },
    {
        imgUrl: "/home/Fortknox-Application.png",
        title: "Fortknox Application",
        description:
            "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",

        tags: ["Mobile", "Web"],
    },
    {
        imgUrl: "/home/Zenocide-Application.png",
        title: "Zenocide Application",
        description:
            "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",

        tags: ["App", "UX"],
    },
];

export default function Section_Work() {
    return (
        <Section title="Works" titleRight={<Button variant="link">View All</Button>}>
            <ul className="space-y-6">
                {works.map(({ imgUrl, title, description, tags }, index) => (
                    <li key={index} className="relative overflow-hidden grid md:grid-cols-2 gap-4 p-4 rounded-2xl bg-secondary dark:bg-secondary-foreground/50 backdrop-blur-md ">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#FF804A] opacity-50 blur-3xl h-52 w-52 rounded-full"></div>
                        <div className="z-10">
                            <img
                                src={imgUrl || "https://placehold.co/600x400"} // Default image
                                alt={title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="z-10 flex-1 flex flex-col gap-2">
                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <p className="text-sm md:text-base leading-relaxed mt-2">{description}</p>
                            <div className="flex gap-2 mt-2">
                                {tags?.map((el, i) => (
                                    <Button
                                        key={i}
                                        variant="outline"
                                        className="text-xs rounded-full h-8 px-6 bg-transparent border-foreground hover:bg-foreground hover:text-background"
                                    >
                                        {el}
                                    </Button>
                                ))}
                            </div>

                            <div className="mt-auto">
                                <Button className="rounded-full h-10 px-5">View Case Study</Button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
