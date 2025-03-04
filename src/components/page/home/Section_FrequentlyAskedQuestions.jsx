import { useState } from "react";
import Section from "@/components/partials/Section";

const frequentlyAskedQuestions = [
    {
        question: "What is your design process?",
        solution:
            "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
    },
    {
        question: "What tools and software do you use for UX design?",
        solution:
            "I use a variety of tools, including Figma, Sketch, Adobe XD, and Webflow for prototyping and design.",
    },
    {
        question: "How do you measure the success of your UX designs?",
        solution:
            "Success is measured through user feedback, usability testing, and key performance indicators (KPIs) like engagement, conversion rates, and task completion times.",
    },
];

export default function Section_FrequentlyAskedQuestions() {
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <Section title="Frequently Asked Questions">
            <ul className="space-y-4">
                {frequentlyAskedQuestions.map(({ question, solution }, index) => (
                    <li key={index} className="p-4 border rounded-lg shadow-sm bg-muted">
                        <button
                            className="w-full text-left flex justify-between items-center font-semibold text-lg focus:outline-none"
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        >
                            <span>{question}</span>
                            <span className="text-xl">{expandedIndex === index ? "−" : "+"}</span>
                        </button>
                        {expandedIndex === index && (
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-2">
                                {solution || "This question is currently unanswered."}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </Section>
    );
}
