import Section from "@/components/partials/Section";
import { Button } from "@/components/ui/button";

const blogs = [
    {
        imgUrl: "/home/Analysis-Application.png",
        date: "Nov 9, 2023",
        title: "How UX works in web",
        tags: ["UI", "UX"],
    },
    {
        imgUrl: "/home/Fortknox-Application.png",
        date: "Nov 9, 2023",
        title: "How UX works in web",
        tags: ["UI", "UX"],
    },
    {
        imgUrl: "/home/Zenocide-Application.png",
        date: "Nov 9, 2023",
        title: "How UX works in web",
        tags: ["UI", "UX"],
    },
];

export default function Section_Blogs() {
    return (
        <Section title="Blogs" titleRight={<Button variant="link">View All</Button>}>
            <ul className="space-y-6">
                {blogs.map(({ imgUrl, date, title, tags }, index) => (
                    <li key={index} className="flex flex-col md:flex-row items-start md:items-center gap-4  py-4">
                        {/* Image */}
                        <img
                            src={imgUrl || "https://placehold.co/600x400"} // Default image
                            alt={title}
                            className="md:max-w-64 w-full h-full object-cover rounded-lg"
                        />

                        {/* Blog Content */}
                        <div className="flex-1">
                            <div className="text-sm text-muted-foreground">{date}</div>
                            <h3 className="text-xl font-semibold">{title}</h3>
                            <div className="flex gap-2 mt-2">
                                {tags?.map((el, i) => (
                                    <Button key={i} variant="outline" className="text-xs px-3 py-1 rounded-full">
                                        {el}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Read Button */}
                        <div>
                            <Button className="rounded-full px-6 py-2">Read</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
