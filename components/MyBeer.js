import Link from "next/link";

const MyBeer = props => (
  <div>
    <div className="grid-x">
      <div className="cell large-4">
        <img src={props.beer.image_url} />
      </div>
      <div className="cell large-8">
        <h1>{props.beer.name}</h1>
        <p>{props.beer.description}</p>
      </div>
    </div>
    <div className="grid-x">
      <div className="cell small-4">6 cells</div>
      <div className="cell small-8">6 cells</div>
    </div>
    <style jsx>{`
      img {
        max-height: 300px;
        display: block;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

export default MyBeer;
