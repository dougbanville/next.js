import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD",
  minHeight: 300
};

const Layout = props => (
  <div style={layoutStyle}>
    <h1>Every</h1>
    <Header />
    {props.children}
  </div>
);

export default Layout;
