import MarkdownViewer from "@/components/markdown/MarkdownViewer";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectModal({ params }: Props) {
  const { slug } = await params;

  return <MarkdownViewer slug={slug} />;
}
