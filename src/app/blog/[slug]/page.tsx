import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../lib/getPostMetadata";
import PostMetadata from "../../../lib/getPostMetadata"
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { GetStaticPaths, GetStaticProps } from 'next';

interface PostProps {
  post: PostMetadata;
  content: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPostMetadata();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const folder = path.join(process.cwd(), "posts");
  const file = path.join(folder, `${slug}.md`);
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return {
    props: {
      post: matterResult.data as PostMetadata,
      content: matterResult.content,
    },
  };
}

const PostPage: React.FC<PostProps> = ({ post, content }) => {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-5xl px-6 lg:pb-32 pb-20 pt-14 lg:px-8">
        <div className="my-12 text-center">
          <h1 className="text-2xl text-slate-600 ">{post.title}</h1>
          <p className="text-slate-400 mt-2">{post.date}</p>
        </div>
        <article className="prose">
          <Markdown>{content}</Markdown>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PostPage;
