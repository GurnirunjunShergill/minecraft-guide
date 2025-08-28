import NavigationBar from "../../common/components/navigation-bar/NavigationBar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <NavigationBar />
      {children}
    </section>
  );
}
