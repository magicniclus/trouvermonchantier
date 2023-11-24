import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../lib/getPostMetadata";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
    <NavBar />
    <main className="">
        <div className="mx-auto flex max-w-5xl px-6 lg:pb-32 pb-20 pt-14 lg:px-8 flex-col justify-between items-center">

        <div className="my-12 text-center">
            <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
            <p className="text-slate-400 mt-2">{post.data.date}</p>
        </div>

        <article className="prose">
            <Markdown>{post.content}</Markdown>
        </article>
        </div>
    </main>
    <Footer />
    </>
  );
};

export default PostPage;