import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturedPosts } from "@/components/featured-posts"
import { RevenueCTA } from "@/components/revenue-cta"
import { NewsletterSection } from "@/components/newsletter-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedPosts />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <RevenueCTA />
        </div>
      </section>
      <NewsletterSection />
    </>
  )
}
