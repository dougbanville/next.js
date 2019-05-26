import { withRouter } from "next/router";
import Layout from "../components/MyLayout.js";
import fetch from "isomorphic-unfetch";

const Post = props => (
  <Layout>
    <h1>{props.beer.name}</h1>
    <img src={props.beer.image_url} />
    <p>{props.beer.description}</p>

    <style jsx>{`
      img {
        max-height: 200px;
        float: left;
      }
    `}</style>
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
