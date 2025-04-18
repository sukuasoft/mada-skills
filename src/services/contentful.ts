import { get } from "./api";

const baseUrl= 'https://cdn.contentful.com';
const spaceId= 'qkqs61iqi4qb';
const environmentId= 'master';
const accessToken='YjhWoAy3g4JUegPXHtSKIVutgwqSI3j7GZTla2fQX7Y';


async function baseQuery (query:string){
 return get(`${baseUrl}/spaces/${spaceId}/environments/${environmentId}${query}${query[query.length-1] != '?' && '&'}access_token=${accessToken}`);
}

export async function getEntries(contentType?: string, include?: number) {
  const query = contentType ? `?content_type=${contentType}` : '?';
  const includeQuery = include ? `${contentType && '&'}include=${include}` : '';

  return await baseQuery(`/entries${query}${includeQuery}`);

}

