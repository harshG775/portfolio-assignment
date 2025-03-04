import Section from "@/components/partials/Section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const whatTheySay = [
    {
        user: {
            imgUrl: "/avatars/floyd-miles.jpg",
            name: "Floyd Miles",
            from: "eBay",
        },
        description:
            "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. The process was smooth and intuitive!",
    },
    {
        user: {
            imgUrl: "/avatars/jane-doe.jpg",
            name: "Jane Doe",
            from: "Google",
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
                            <CarouselItem
                                key={index}
                                className="grid sm:grid-cols-2 items-start gap-6 p-8 bg-muted/40 rounded-lg"
                            >
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
                                <p className="md:text-base text-muted-foreground leading-relaxed max-w-md">
                                    {description}
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
