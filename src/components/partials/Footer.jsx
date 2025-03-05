export default function Footer() {
    return (
        <footer className="w-full  bg-background py-8">
            <div className="container mx-auto flex flex-col items-center justify-between space-y-4 px-4 md:flex-row md:space-y-0 md:px-6">
                {/* Copyright Section */}
                <div className="text-sm text-muted-foreground">© Rehan Raihan - {new Date().getFullYear()}</div>

                {/* Social Media Links */}
                <div className="flex space-x-6">
                    <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                        Dribbble
                    </a>
                    <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                        Behance
                    </a>
                    <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                        Twitter
                    </a>
                    <a href="#" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}
