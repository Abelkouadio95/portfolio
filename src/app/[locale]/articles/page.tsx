import AnimatedSection from "@/components/animation/animatedSection";

export default function ArticlesPage() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <AnimatedSection>
        <div className="w-full h-full inline-block z-0 bg-white p-32 pt-16">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <h2 className="text-6xl font-bold">Articles</h2>
              <p className="text-lg">
                Page articles en cours de développement...
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
