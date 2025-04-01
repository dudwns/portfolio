import MarkdownViewer from "@/components/common/markdown/MarkdownViewer";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProjectModal({ params: { slug } }: Props) {
  return <MarkdownViewer slug={slug} />;
}
