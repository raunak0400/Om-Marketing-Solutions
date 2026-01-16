export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container py-12 md:py-16">{children}</div>;
}
