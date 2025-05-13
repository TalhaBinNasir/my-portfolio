import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="bg-lightBg dark:bg-darkBg text-textDark dark:text-textLight min-h-screen transition-colors duration-300">
      <ThemeToggle />
      {/* Your content will go here */}
    </main>
  );
}
