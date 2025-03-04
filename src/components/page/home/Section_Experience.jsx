import Section from "@/components/partials/Section";

const experiences = [
    {
        title: "Lead Product Designer",
        company: "Fortknox",
        startDate: "Mar 2022",
        endDate: "Oct 2023",
    },
    {
        title: "Intern Designer",
        company: "OmniSafe",
        startDate: "Mar 2022",
        endDate: "Oct 2023",
    },
    {
        title: "UI Designer",
        company: "Doradesign",
        startDate: "Mar 2022",
        endDate: "Oct 2023",
    },
    {
        title: "Frontend Developer",
        company: "OpacityAuthor",
        startDate: "Mar 2022",
        endDate: "Oct 2023",
    },
];

export default function Section_Experience() {
    return (
        <Section title="Experience">
            <ul className="space-y-6">
                {experiences.map(({ title, company, startDate, endDate }, index) => (
                    <li 
                        key={index} 
                        className="flex flex-col md:flex-row md:items-center justify-between border-b-2 py-4"
                    >
                        <div className="font-medium text-lg">{title}</div>
                        <div className="flex flex-col md:text-right md:items-end">
                            <div className="text-secondary-foreground">{company}</div>
                            <div className="text-sm text-secondary-foreground/50">{`${startDate} - ${endDate}`}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
}
