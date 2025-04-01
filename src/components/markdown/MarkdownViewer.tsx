import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getProject } from "@/service/project";
import ModalOverlay from "../modal/ModalOverlay";
import Button from "../button/Button";
import { IoArrowBack } from "react-icons/io5";
import { PROJECT_BACKGROUND_COLOR } from "@/constants/projects";

export default async function MarkdownViewer({ slug }: { slug: string }) {
  const markdown = await getProject(slug);

  return (
    <ModalOverlay>
      <article className=" max-w-screen-lg mx-auto my-auto max-h-[90vh] overflow-y-auto no-scrollbar shadow-xl fixed inset-0 z-40 scrollbar-hide  bg-white">
        <div className={`w-full h-80 flex flex-col relative p-4 ${PROJECT_BACKGROUND_COLOR[slug]}`}>
          <Button isBack className="hover:text-gray-300">
            <IoArrowBack size={30} />
          </Button>
          <div className="w-100 h-60 rounded-xl overflow-hidden border border-gray-300 p-2 absolute -bottom-28 left-0 right-0 mx-auto bg-white">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={`/images/project/${slug}_thumbnail.webp`}
                alt={slug}
                fill
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="no-global-styles text-black p-20 pt-28">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: (href) =>
                href.href && (
                  <Link href={href.href} target="_blank">
                    {href.children}
                  </Link>
                ),
              code(props) {
                const { children, className, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");

                return match ? (
                  <SyntaxHighlighter PreTag="div" language={match[1]} style={oneDark}>
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },

              img: (image) => (
                <Image
                  src={image.src || ""}
                  alt={image.src || ""}
                  width={0}
                  height={0}
                  sizes="100%"
                  style={{
                    objectFit: "contain",
                    maxHeight: "600px",
                    width: "100%",
                    height: "auto",
                  }}
                />
              ),
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </article>
    </ModalOverlay>
  );
}
