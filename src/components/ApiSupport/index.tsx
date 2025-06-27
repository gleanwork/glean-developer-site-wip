import React from 'react';

interface ApiSupportProps {
  clientApi?: boolean;
  indexingApi?: boolean;
}

export default function ApiSupport({
  clientApi = false,
  indexingApi = false,
}: ApiSupportProps): React.JSX.Element {
  return (
    <div
      style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}
      className="margin-bottom--md"
    >
      <span>Supported APIs:</span>
      {clientApi && <span className="badge badge--success">Client API</span>}
      {indexingApi && (
        <span className="badge badge--warning">Indexing API</span>
      )}
    </div>
  );
}
