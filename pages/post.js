import { withRouter } from "next/router";
import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";
import NextSeo from "next-seo";
import MyBeer from "../components/MyBeer.js";

const Post = props => (
  <Layout>
    <NextSeo
      config={{
        title: props.beer.name,
        description: props.beer.tagline,
        canonical: "https://hello-next.dougbanville.now.sh/",
        openGraph: {
          url: "https://hello-next.dougbanville.now.sh/",
          title: props.beer.name,
          description: props.beer.tagline,
          images: [{ url: props.beer.image_url }],
          site_name: "Doug Loves Punk"
        },
        twitter: {
          handle: "@dougbanville",
          site: "@site",
          cardType: "summary_large_image"
        }
      }}
    />
    <MyBeer beer={props.beer} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  console.log(context.query);
  const { id } = context.query;
  const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
  const beers = await res.json();
  const beer = beers[0];
  console.log(beer);
  console.log(`Fetched beer: ${beer.name}`);

  return { beer };
};

export default withRouter(Post);
