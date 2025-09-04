import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Welcome to Your App</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Your Next.js application is now properly configured and ready to build amazing things.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Get started</Button>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
