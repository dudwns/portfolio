type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h1 className="text-4xl font-bold relative">
      {title}
      <div className="absolute -bottom-1 left-0 h-0.5 bg-foreground w-full" />
    </h1>
  );
}
