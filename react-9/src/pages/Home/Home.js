import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const getThreads = async () => {
  const response = await fetch('http://localhost:1338/api/threads');
  return response.json();
};

function Home() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    getThreads().then(({ data }) => setThreads(data));
  }, []);

  return (
    <div>
      {threads.map((thread, index) => (
        <ul key={index} data-test="thread">
          <li>{thread.title}</li>
          <li>{thread.total_replies}</li>
          <Link to={`/thread/${thread.slug}`} data-test="link">
            Continue lendo
          </Link>
        </ul>
      ))}
    </div>
  );
}

export default Home;
