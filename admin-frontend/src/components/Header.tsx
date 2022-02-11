function Header() {
  return (
    <header className="app">
      {/* {error ? (
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
      )} */}

      {/* <header className="App-header"> */}
      <div className="container">
        <nav className="max-w mx-auto">
          <div className="h-10 bg-violet-500 sm flex flex-row justify-evenly items-center">
            <a className="text-white" href="/">
              Hello
            </a>
            <a className="text-white" href="/">
              Introduction
            </a>
            <a className="text-white" href="/">
              Products
            </a>
            <a className="text-white" href="/">
              Add Images
            </a>
          </div>
        </nav>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h1 className="bg-blue-400 font-serif">
          Hello Create-React-App Using TailwindCSS
        </h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello from Admin-frontend
        </a> */}
        {/* <br />
        <button className="bg-red-500 hover:bg-red-900 text-xl font-bold py-2 px-4 rounded-xl">
          This is my button
        </button> */}
        {/* </header> */}
      </div>
    </header>
  );
}

export default Header;
