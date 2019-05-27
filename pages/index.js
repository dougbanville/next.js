import Layout from "../components/MyLayout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import MyBeer from "../components/MyBeer";
import NextSeo from "next-seo";

const Index = props => (
  <Layout>
    <NextSeo
      config={{
        title: "Simple Usage Example",
        description: "A short description goes here."
      }}
    />
    <h1>Beers!</h1>
    <div className="grid-container">
      {props.beers.map(beer => (
        <div className="grid-x grid-margin-x" key={beer.id}>
          <div className="cell small-12 large-6" key={beer.id}>
            <img src={`${beer.image_url}`} />
            <Link as={`/p/${beer.id}`} href={`/post?id=${beer.id}`}>
              <a>{beer.name}</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
    <style jsx>{`
      img {
        max-height: 100px;
        float: left;
      }
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
        height: 120px;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch(
    "https://api.punkapi.com/v2/beers?page=2&per_page=80"
  );
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    beers: data.map(entry => entry)
  };
};

export default Index;
