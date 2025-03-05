import Section_Hero from "@/components/page/home/Section_Hero";
import Section_Expertise from "@/components/page/home/Section_Expertise";
import Section_Work from "@/components/page/home/Section_Work";
import Section_Experience from "@/components/page/home/Section_Experience";
import Section_Blogs from "@/components/page/home/Section_Blogs";
import Section_WhatTheySay from "@/components/page/home/Section_WhatTheySay";
import Section_FrequentlyAskedQuestions from "@/components/page/home/Section_FrequentlyAskedQuestions";
import Section_LetsTalk from "@/components/page/home/Section_LetsTalk";
export default function RootRoute() {
    return (
        <main className="min-h-[calc(100svh-10.7rem)]">
            <Section_Hero />
            <Section_Expertise />
            <Section_Work />
            <Section_Experience />
            <Section_Blogs />
            <Section_WhatTheySay />
            <Section_FrequentlyAskedQuestions />
            <Section_LetsTalk />
        </main>
    );
}
