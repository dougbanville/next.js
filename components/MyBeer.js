import Link from "next/link";
import css from "../styles.scss";

const MyBeer = props => (
  <div>
    <div className={`grid-x ${css.box}`}>
      <div className={`cell large-4 small-6`}>
        <Link as={`/p/${props.beer.id}`} href={`/post?id=${props.beer.id}`}>
          <img src={props.beer.image_url} />
        </Link>
      </div>
      <div className="cell large-8">
        <h1 className={css.header}>{props.beer.name}</h1>
        <button className="tiny button">{props.beer.abv}%</button>
        <p>{props.beer.description}</p>
      </div>
    </div>
    <style jsx>{`
      img {
        max-height: 300px;
        display: block;
        margin: 0 auto;
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default MyBeer;
