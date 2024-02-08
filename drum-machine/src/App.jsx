import React from "react";
import DrumMachine from "./components/DrumMachine.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

function App () {
  return (
    <div className="d-flex flex-column align-items-center justify-content-between pt-5 px-2" style={{ height: '100vh' }}>
      <DrumMachine />

      <footer class="d-flex flex-column justify-content-center align-items-center pt-2 pb-0">
        <p class='mb-1'>
          Coded by
          <a
            id="footer-link"
            href="https://github.com/Nix7amcm"
            target='_blank'
            rel='noopener noreferrer'
          > Nix7amcm⚡</a>
        </p>
        <p class='credit mb-0'>
          Photo by <a href="https://unsplash.com/@juliolopez?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Julio Lopez</a> on <a href="https://unsplash.com/photos/man-playing-drum-on-stage-rHjqxNZU5OY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
