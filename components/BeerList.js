import Link from "next/link";

const BeerList = props => (
  <div>
    <h2>{props.beer.name}!</h2>
    <style jsx>{`
      img {
        max-height: 300px;
        display: block;
        margin: 0 auto;
      }
    `}</style>
  </div>
);
