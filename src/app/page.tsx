import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <main className="bg-lightBg dark:bg-darkBg text-textDark dark:text-textLight min-h-screen transition-colors duration-300">
      <LandingPage />
    </main>
  );
}
