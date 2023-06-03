

function Home(props) {
  // Inline styling in react component
  const styles = {
    backgroundColor: "blue",
    color: "white",
  };
  const { flag, data } = props;

  return (
    <div className="home" style={styles}>
      <h3>This is home page</h3>
      <p>Made using function component</p>
      {flag && <p>{data}</p>}
      <hr />
    </div>
  );
}

export default Home