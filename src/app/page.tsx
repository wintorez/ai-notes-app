import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <main className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logo */}
        <div className="mb-8">
          <Image src={logo} alt="My Smart Notes Logo" width={120} height={120} className="mx-auto" priority />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">My Smart Notes</h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A simple note-taking app with AI chatbot integration. Ask the chatbot anything about your notes to retrieve
          and summarize that information.
        </p>

        {/* CTA Button */}
        <div className="pt-4">
          <Button asChild size="lg" className="text-lg px-8 py-3">
            <Link href="/notes">Get Started</Link>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-16 pb-8">
        <div className="text-center">
          <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            This software is provided &quot;as is&quot; without warranty of any kind.
          </span>
        </div>
      </footer>
    </div>
  )
}
