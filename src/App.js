import './App.css';
import { getMemes } from './utils/api';
import React from 'react';

function App() {
  const [memes, setMemes] = React.useState([])
  React.useEffect(() => {
    getMemes().then(({ data }) => {
      console.log(data.data.children)
      setMemes(data.data.children)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>13 Memes for 13 Years of Survival</h1>
        <ul>
          {
            memes.map((post) => (
              <li>
                <div>
                  <a href={`https://reddit.com${post.data.permalink}`}><h5>{post.data.title}</h5></a>
                  <img height="250" src={post.data.preview.images[0].source.url.replace('&amp;', '&')}/>
                </div>
              </li>
            ))
          }
        </ul>
        <p style={{fontSize: 14, textAlign: 'center'}}><a href="https://github.com/kidsonfilms-python-rules/13-memes">Source Code Found Here. Hosted on GitHub ❤️</a></p>
      </header>
    </div>
  );
}

export default App;
