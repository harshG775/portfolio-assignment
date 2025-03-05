import Section from "@/components/partials/Section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const whatTheySay = [
    {
        user: {
            imgUrl: "/home/Flayd-Miles.png",
            name: "Floyd Miles",
            from: "eBay",
        },
        description:
            "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. The process was smooth and intuitive!",
    },
    {
        user: {
            imgUrl: "/home/Flayd-Miles.png",
            name: "john Doe",
            from: "Google",
        },
        description:
            "I was able to land my dream job thanks to Synergy. The resume builder made it incredibly easy to showcase my skills effectively!",
    },
    {
        user: {
            imgUrl: "/home/Flayd-Miles.png",
            name: "Doe Jane",
            from: "Meta",
        },
        description:
            "I was able to land my dream job thanks to Synergy. The resume builder made it incredibly easy to showcase my skills effectively!",
    },
];

export default function Section_WhatTheySay() {
    return (
        <Section title="What They Say">
            <div className="relative max-w-7xl mx-auto">
                <Carousel className="relative">
                    <CarouselContent>
                        {whatTheySay.map(({ user, description }, index) => (
                            <CarouselItem key={index} className="grid sm:grid-cols-2 items-start gap-6 p-8  rounded-lg">
                                {/* User Info with Avatar */}
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={user.imgUrl} alt={user.name} />
                                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-medium text-lg">{user.name}</div>
                                        <div className="text-sm text-secondary-foreground/80">{user.from}</div>
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <p className="relative md:text-base text-muted-foreground leading-relaxed max-w-md">
                                    <Quote
                                        fill="white"
                                        className="text-foreground/0 opacity-80 absolute -top-6 -left-8 rotate-180"
                                    />
                                    {description}
                                    <Quote fill="white" className="text-foreground/0 opacity-80 absolute -top-6 -right-6" />
                                </p>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Controls - Centered at Bottom */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-4">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </Section>
    );
}
