import Section from "@/components/partials/Section";
import { Button } from "@/components/ui/button";
const works = [
    {
        imgUrl: "", // Empty image
        title: "Analysis Application",
        description:
            "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
        tags: ["Figma", "UX"],
    },
    {
        imgUrl: "", // Empty image
        title: "How UX works in web",
        tags: ["Mobile", "Web"],
    },
    {
        imgUrl: "", // Empty image
        title: "How UX works in web",
        tags: ["App", "UX"],
    },
];

export default function Section_Work() {
    return (
        <Section title="Work" titleRight={<Button variant="link">View All</Button>}>
            <ul className="space-y-6">
                {works.map(({ imgUrl, title, tags }, index) => (
                    <li
                        key={index}
                        className="grid sm:grid-cols-2 gap-4 p-4 rounded-2xl  bg-gradient-to-r from-accent-foreground/60 via-orange-200/80 to-accent-foreground/60 "
                    >
                        <div>
                            <img
                                src={imgUrl || "https://placehold.co/600x400"} // Default image
                                alt={title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                            <h3 className="text-2xl font-semibold">{title}</h3>
                            <div className="flex gap-2 mt-2">
                                {tags?.map((el, i) => (
                                    <Button key={i} variant="outline" className="text-xs rounded-full h-8 px-6 bg-transparent border-foreground hover:bg-foreground hover:text-background">
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
