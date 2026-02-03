export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
      {children}
    </h2>
  );
}
