import Head from "next/head";
import { useRouter } from "next/router";

export default function Tags(props) {
  const router = useRouter();

  const title = props.title ? props.title + " | Eigen AI" : "Eigen AI";
  const desc = props.desc
    ? props.desc
    : "Eigen AI - AGI Tomorrow, AEI Today.";
  const image = props.image ? props.image : "/social.png";
  const alt = props.alt
    ? props.alt
    : "The text: Eigen AI. AGI Tomorrow, AEI Today.";
  const slug = props.slug ? props.slug : router.route;

  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <meta name="twitter:description" content={desc} />

      <meta property="og:image" content={"https://eigenai.com" + image} />
      <meta name="twitter:image" content={"https://eigenai.com" + image} />

      <meta name="twitter:image:alt" content={alt} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={"https://eigenai.com" + slug} />
      <meta name="twitter:url" content={"https://eigenai.com" + slug} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#1B3D6D" />
      <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />

      <link
        rel="preload"
        href="/fonts/LiberationMono-Bold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="/fonts/LiberationMono-Regular.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="/fonts/LiberationMono-Italic.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="/fonts/LiberationMono-BoldItalic.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="/fonts/DinishCondensed-Bold.woff"
        as="font"
        type="font/woff"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="/fonts/DinishCondensed-Bold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="/fonts/Dinish-Regular.woff"
        as="font"
        type="font/woff"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="/fonts/Dinish-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="/fonts/Dinish-Italic.woff"
        as="font"
        type="font/woff"
        crossOrigin="true"
      />
      <link
        rel="preload"
        href="/fonts/Dinish-Italic.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="true"
      />
    </Head>
  );
}
