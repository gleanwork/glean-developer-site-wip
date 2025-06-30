import React from 'react';
import Link from '@docusaurus/Link';
import CardGroup from '../CardGroup';
import Card from '../Card';
import styles from './styles.module.css';
import { getEndpointsForApi } from '../../utils/apiData';

interface Endpoint {
  method: string;
  path: string;
  summary: string;
  description?: string;
  operationId: string;
}

interface UseCase {
  title: string;
  description: string;
  icon?: string;
}

interface ApiOverviewProps {
  title: string;
  description: string;
  useCases: UseCase[];
  apiFamily: string;
}

function MethodBadge({ method }: { method: string }) {
  const methodClass = method.toLowerCase();
  const badgeClass = `${styles.methodBadge} ${styles[methodClass] || styles.default}`;
  
  return (
    <span className={badgeClass}>
      {method}
    </span>
  );
}

function camelToKebab(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function getDocLinkForEndpoint(apiFamily: string, operationId: string): string {
  // Convert operationId to doc link format
  // camelCase operationIds need to be converted to kebab-case file names
  const kebabCaseId = camelToKebab(operationId);
  return `/api/client-api/${apiFamily.toLowerCase()}/${kebabCaseId}.api`;
}

export default function ApiOverview({
  title,
  description,
  useCases,
  apiFamily,
}: ApiOverviewProps) {
  const endpoints = getEndpointsForApi(apiFamily);

  return (
    <div>
      <p className="margin-bottom--lg">
        {description}
      </p>

      <div className="margin-bottom--xl">
        <h2>Use Cases</h2>
        <CardGroup>
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              title={useCase.title}
              icon={useCase.icon}
            >
              {useCase.description}
            </Card>
          ))}
        </CardGroup>
      </div>

      {endpoints.length > 0 && (
        <div className="margin-bottom--xl">
          <h2>API Endpoints</h2>
          <div className="table-responsive">
            <table className={`table table--striped ${styles.endpointsTable}`}>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Endpoint</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((endpoint, index) => {
                  const docLink = getDocLinkForEndpoint(apiFamily, endpoint.operationId);
                  return (
                    <tr key={index}>
                      <td className="text--center">
                        <MethodBadge method={endpoint.method} />
                      </td>
                      <td>
                        <Link to={docLink} className="text--no-decoration">
                          <code>{endpoint.path}</code>
                        </Link>
                      </td>
                      <td>
                        <Link to={docLink} className="text--no-decoration text--bold">
                          {endpoint.summary}
                        </Link>
                        {endpoint.description && (
                          <div>
                            {endpoint.description}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
} 