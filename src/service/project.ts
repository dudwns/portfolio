import fs from "fs";
import path from "path";

export async function getProject(slug: string) {
  const project = fs.readFileSync(path.join(process.cwd(), "public/md", `${slug}.md`), "utf-8");

  return project;
}
