import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import FeatureCard from "@/components/feature-card"
import { ArrowRight, FileText, Search, CheckCircle, Download, BarChart } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>

        <div className="container relative z-10 px-4 mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            AI-Powered Resume Analyzer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
            Optimize your resume with AI. Get instant feedback, job matches, and suggestions to land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Try It Now <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90 text-muted-foreground" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Powerful Resume Analysis Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FileText className="h-10 w-10 text-primary" />}
              title="Smart Resume Parsing"
              description="Upload your resume in PDF, Word, or image format. Our AI extracts key information automatically."
            />

            <FeatureCard
              icon={<Search className="h-10 w-10 text-primary" />}
              title="Semantic Job Matching"
              description="Find jobs that match your skills and experience with our advanced semantic search engine."
            />

            <FeatureCard
              icon={<CheckCircle className="h-10 w-10 text-primary" />}
              title="ATS Compatibility Check"
              description="Ensure your resume passes through Applicant Tracking Systems with our compatibility analysis."
            />

            <FeatureCard
              icon={<BarChart className="h-10 w-10 text-primary" />}
              title="Resume Score"
              description="Get a comprehensive score out of 100 based on content, format, and relevance to your target jobs."
            />

            <FeatureCard
              icon={<Download className="h-10 w-10 text-primary" />}
              title="AI-Optimized Export"
              description="Download your AI-enhanced resume in multiple formats, ready to impress employers."
            />

            <FeatureCard
              icon={<FileText className="h-10 w-10 text-primary" />}
              title="Bias Detection"
              description="Our AI checks for potential bias in your resume and ensures fairness in your application."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Supercharge Your Job Search?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of job seekers who have improved their resumes and landed interviews with our AI-powered
            platform.
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">Get Started For Free</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

