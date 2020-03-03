import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const getThread = async thread_slug => {
  const response = await fetch(
    `http://localhost:1338/api/threads/${thread_slug}`
  );

  if (response.status === 404) {
    return '404';
  }

  return response.json();
};

function Thread({ match }) {
  const [thread, setThread] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { thread_slug } = match.params;
    getThread(thread_slug).then(({ data }) => {
      setThread(data);
      setIsLoading(false);
    });
  }, [match.params]);

  if (!thread) {
    return <Redirect to="/404" />;
  }

  return (
    <div>
      <Link to="/" data-test="voltar">
        Voltar
      </Link>
      {!isLoading && (
        <div data-test="resposta">
          <h3>{thread.title}</h3>
          <p>{thread.body}</p>
          <p>{thread.total_replies}</p>

          {thread.replies.map((reply, index) => (
            <p key={index}>{reply.body}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Thread;
