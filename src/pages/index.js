import {
  Feature,
  Hero,
  Stats,
  Faq,
  AllTools,
  AboutSection,
} from "../components";
import Faqs from "../../data/HomePage/homepage.json";
import { NextSeo } from "next-seo";
export default function Home() {
  const { homeFaqs } = Faqs;
  return (
    <div>
      <NextSeo
        title="Web Soft Tools"
        canonical="https://www.websofttools.com"
      />
      <main>
        {/* Hero Section Here */}
        <Hero />

        {/* All tools here */}
        <AllTools />

        {/* Feature Section here */}
        <section className="mt-20">
          <Feature />
        </section>

        {/* About Section */}
        <section className="mt-20">
          <AboutSection />
        </section>

        {/* Stats Section here */}
        <section className="mt-20">
          <Stats />
        </section>

        {/* CTA Section here */}
        <section className=" mb-20 mt-20 bg-white">
          <Faq faqs={homeFaqs} />
        </section>
      </main>
    </div>
  );
}
