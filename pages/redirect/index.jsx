function Redirect({ dest }) {
  return (
    <div>Welcome to Next.js! | This page should have redirected to {dest}</div>
  );
}

Redirect.getInitialProps = ({ query }) => {
  console.log('Query is', query);
  return { dest: query.dest };
};

export default Redirect;
