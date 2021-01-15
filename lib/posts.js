import path from "path";
import matter from "gray-matter";
import fs from "fs";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDirectory);
  // lấy danh sách data trong file md
  const allPostData = fileNames.map((fileName) => {
    //remove .md ra name của file
    const id = fileName.replace(/.md/, "");
    //đọc file như string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    // use gray-matter to parse the post metadata
    const matterRedult = matter(fileContent);
    return {
      id,
      ...matterRedult.data,
    };
  });
  return allPostData;
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, "") },
  }));
}

export function getAllPostData(id) {
  const filePath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const matterResult = matter(fileContent);
  return {
    id,
    ...matterResult.data,
  };
}
