import MarkdownViewer from "@/components/markdown/MarkdownViewer";
import { getProject } from "@/service/project";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return [
    { slug: "linkhub" },
    { slug: "angola" },
    { slug: "mealkitary" },
    { slug: "notion" },
    { slug: "portfolio" },
  ];
}

export const dynamicParams = false;

export default async function ProjectModal({ params }: Props) {
  const { slug } = await params;
  const markdown = await getProject(slug);

  return <MarkdownViewer slug={slug} markdown={markdown} />;
}
