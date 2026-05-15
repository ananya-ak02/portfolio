export default function Footer() {
  return (
    <footer className="w-full px-8 md:px-16 py-8 border-t border-border mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
        <p>© {new Date().getFullYear()} Ananya Khanduja.</p>
        <p>Built with Next.js & Tailwind.</p>
      </div>
    </footer>
  );
}
