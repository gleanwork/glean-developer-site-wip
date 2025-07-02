import splitInfo from '../../openapi/client/split-apis/split-info.json';

interface Endpoint {
  method: string;
  path: string;
  summary: string;
  description: string;
  operationId: string;
}

interface ApiFamily {
  name: string;
  displayName: string;
  description: string;
  file: string;
  configId: string;
  paths: number;
  endpoints: Endpoint[];
}

let apiDataCache: { [key: string]: ApiFamily } | null = null;

function loadApiData(): { [key: string]: ApiFamily } {
  if (apiDataCache) {
    return apiDataCache;
  }

  apiDataCache = {};

  splitInfo.tags.forEach((tag) => {
    apiDataCache![tag.configId] = tag as ApiFamily;
    apiDataCache![tag.name.toLowerCase()] = tag as ApiFamily;
  });

  return apiDataCache;
}

export function getApiFamily(apiFamily: string): ApiFamily | null {
  const apiData = loadApiData();
  return apiData[apiFamily.toLowerCase()] || null;
}

export function getEndpointsForApi(apiFamily: string): Endpoint[] {
  const apiData = getApiFamily(apiFamily);

  if (!apiData || !apiData.endpoints) {
    console.warn(`No endpoint data found for API family: ${apiFamily}`);
    return [];
  }

  return apiData.endpoints;
}

export function getAllApiFamilies(): ApiFamily[] {
  const apiData = loadApiData();
  return splitInfo.tags as ApiFamily[];
}
