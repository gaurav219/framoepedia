import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import imageQuery from "./queries/image";
import { Images } from "./interfaces/Image";

function App() {
  const { loading, error, data } = useQuery<Images>(imageQuery);
  console.log(error, "er");

  return (
    <div className="App">
      {error ? (
        <p>"{error.message}</p>
      ) : loading || !data ? (
        <p>Loading...</p>
      ) : (
        data.images.map((image) => (
          <div>
            <ul>
              <li>{image.id}</li>
              <li>{image.title}</li>
              <li>{image.url}</li>
            </ul>
          </div>
        ))
      )}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello from admin-frontend
        </a>
      </header>
    </div>
  );
}

export default App;
