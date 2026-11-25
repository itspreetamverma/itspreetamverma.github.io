import { useEffect, useState } from 'react';
import { apiRoutes } from '../data/apiRoutes';
import { concepts } from '../data/concepts';

const requests = [
  { method: 'GET', path: '/api/developer' },
  { method: 'GET', path: '/api/skills' },
  { method: 'GET', path: '/api/projects' },
  { method: 'GET', path: '/api/unknown' },
];

function mockRequest(method, path) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const hit = method === 'GET' ? apiRoutes[path] : undefined;
      if (hit) {
        resolve({ status: 200, text: 'OK', json: hit });
      } else {
        resolve({ status: 404, text: 'Not Found', json: { error: 'not_found', path } });
      }
    }, 350);
  });
}

export default function ApiPlayground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [response, setResponse] = useState(null);
  const { method, path } = requests[activeIndex];

  useEffect(() => {
    let cancelled = false;
    setResponse(null);
    mockRequest(method, path).then((result) => {
      if (!cancelled) setResponse(result);
    });
    return () => {
      cancelled = true;
    };
  }, [method, path]);

  return (
    <>
      <p className="tag text-term-dim">Try my API</p>
      <div className="flex flex-wrap gap-2" data-concept={concepts.events}>
        {requests.map((request, index) => (
          <button
            key={request.path}
            type="button"
            className={index === activeIndex ? 'req on' : 'req'}
            onClick={() => setActiveIndex(index)}
          >
            {request.method} {request.path}
          </button>
        ))}
      </div>
      <div className="api-line" aria-live="polite">
        {response ? (
          <>
            <span className="text-term-dim">
              {method} {path}
            </span>
            <span className={response.status === 200 ? 'text-term-ok' : 'text-term-err'}>
              {response.status} {response.text}
            </span>
          </>
        ) : (
          <span className="text-term-dim">
            Sending {method} {path} ...
          </span>
        )}
      </div>
      <pre className="api-body" data-concept={concepts.asyncCall}>
        {response ? JSON.stringify(response.json, null, 2) : 'Waiting for the mock server...'}
      </pre>
      <p className="note">
        A mock server running inside this page answers these requests. Nothing is sent over the network. It shows how I shape routes,
        status codes and snake_case JSON.
      </p>
    </>
  );
}
