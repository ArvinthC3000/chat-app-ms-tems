import Header from '../Header';

const About = () => {
  return (
    <>
      <Header />
      <h1>About This App</h1>
      <p>App to search Movies</p>
      <p>Version 2.0.0</p>
      <div>
        <h3>Updates</h3>
        <ul>
          <li>Context API is replaced by Redux</li>
        </ul>
      </div>
    </>
  );
};

export default About;
