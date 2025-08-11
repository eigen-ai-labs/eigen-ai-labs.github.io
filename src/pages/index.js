import matter from "gray-matter";
import fs from "fs";
import Link from "next/link";
import md from "markdown-it";
import Tags from "../components/Tags";
import dateFormat from "dateformat";
import ExportedImage from "next-image-export-optimizer";

// Reusable component for blog post preview
const BlogPostPreview_url = ({ frontmatter, content, date }) => {
  let cont = md()
    .render(content)
    .replace(/<[^>]+>/g, "");

  if (cont.length > 300) {
    cont = cont.slice(0, 300) + "...";
  }

  return (
    <div className="border mb-5 hover:bg-[#1B3D6D] hover:text-sky transition-colors cursor-pointer bg-sky border-paper flex flex-col lg:flex-row items-stretch shadow-lg shadow-neutral-800/20">
      <div className="basis-1/2 team-wrap">
        <ExportedImage
          src={frontmatter.previewImg}
          alt={frontmatter.title}
          layout="responsive"
          width={1600}
          height={900}
        />
      </div>
      <div className="p-5 basis-4/5">
        <p className="text-lg font-bold">{frontmatter.title}</p>
        <p className="text-[0.95rem] pb-1">
          by: {frontmatter.author}, {dateFormat(date, "dd mmm, yyyy")}
        </p>
        <hr />
        <p className="pt-2">{cont}</p>
      </div>
    </div>
  );
};

const BlogPostPreview = ({ frontmatter, content, date, slug }) => {
  let cont = md()
    .render(content)
    .replace(/<[^>]+>/g, "");

  if (cont.length > 300) {
    cont = cont.slice(0, 300) + "...";
  }

  return (
    <Link href={"/" + slug}>
      <div className="border mb-5 hover:bg-[#1B3D6D] hover:text-sky transition-colors cursor-pointer bg-sky border-paper flex flex-col lg:flex-row items-stretch shadow-lg shadow-neutral-800/20">
        <div className="basis-1/2 team-wrap">
          <ExportedImage
            src={frontmatter.previewImg}
            alt={frontmatter.title}
            layout="responsive"
            width={1600}
            height={900}
          />
        </div>
        <div className="p-5 basis-4/5">
          <p className="text-lg font-bold">{frontmatter.title}</p>
          <p className="text-[0.95rem] pb-1">
            by: {frontmatter.author}, {dateFormat(date, "dd mmm, yyyy")}
          </p>
          <hr />
          <p className="pt-2">{cont}</p>
        </div>
      </div>
    </Link>
  );
};

export default function Home({ posts }) {
  return (
    <div className="w-full flex justify-center pt-16 md:pt-2">
      <Tags title="Blog" />
      <div className="container px-5">
        <h1 className="text-2xl md:text-2xl md:text-[#1B3D6D] font-bold font-consolas pb-2">BLOG</h1>
        <div className="text-[0.88rem] pb-4 font-consolas">
          Welcome to the Eigen AI blog! Here, you will find commentaries, news, and updates on our latest research projects and progress in the field of efficient generative AI.
        </div>
        <hr className="mb-5 md:hidden" />

        {posts.map(({ slug, frontmatter, content, date }) => {
          if (frontmatter.url) {
            // External link: use <a> with target="_blank"
            return (
              <a
                key={slug}
                href={frontmatter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block external-blog-post-link"
              >
                <BlogPostPreview_url frontmatter={frontmatter} content={content} date={date} />
              </a>
            );
          } else {
            // Internal link: use Next.js Link with key on BlogPostPreview
            return (
              <BlogPostPreview
                key={slug}
                frontmatter={frontmatter}
                content={content}
                date={date}
                slug={slug}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync("blog");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`blog/${fileName}`, "utf-8");
    const { data: frontmatter, content } = matter(readFile);
    const date = Date.parse(frontmatter.date);

    return {
      slug,
      frontmatter,
      content,
      date,
    };
  });

  posts.sort((a, b) => b.date - a.date);

  return {
    props: {
      posts,
    },
  };
}
