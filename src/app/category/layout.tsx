import CategoryLinks from "@/components/category/CategoryLinks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories - MyStore",
  description: "Explore all product categories on MyStore.",
};

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen font-mono">
      <aside className="w-64 bg-black border-r border-gray-200 p-4">
        <nav>
          <CategoryLinks />
        </nav>
      </aside>

      <main className="flex-grow p-12">{children}</main>
    </div>
  );
}
