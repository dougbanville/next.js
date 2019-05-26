import Link from "next/link";

const MyBeer = props => (
  <li key={props.beer.id}>
    <img src={`${beer.image_url}`} />
    <Link as={`/p/${beer.id}`} href={`/post?id=${beer.id}`}>
      <a>{beer.name}</a>
    </Link>
  </li>
);

export default MyBeer;
