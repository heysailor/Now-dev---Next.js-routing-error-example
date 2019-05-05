function Hello({ name }) {
  return <div>Welcome to Next.js! | Hello {name}</div>;
}

Hello.getInitialProps = ({ query }) => {
  console.log('Query is', query);
  return { name: query.name };
};

export default Hello;
