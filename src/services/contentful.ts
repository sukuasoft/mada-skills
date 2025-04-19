import { get } from "./api";

const baseUrl= 'https://cdn.contentful.com';
const spaceId= 'qkqs61iqi4qb';
const environmentId= 'master';
const accessToken='YjhWoAy3g4JUegPXHtSKIVutgwqSI3j7GZTla2fQX7Y';


async function baseQuery (query:string){
  const queryUrl = `${baseUrl}/spaces/${spaceId}/environments/${environmentId}${query}${query[query.length-1] != '?' && '&'}access_token=${accessToken}`;
  
  return get(queryUrl);
}

export async function getEntries(contentType?: string,  include?: number, select?: string,extras?:string) {
  const query = contentType ? `?content_type=${contentType}` : '?';
  const includeQuery = include != undefined ? `${contentType && '&'}include=${include}` : '';
  const selectQuery = select ? `${(contentType || include != undefined) && '&'}select=${select}` : '';
  const extrasQuery = extras ? `${(contentType || include != undefined || select) && '&'}${extras}` : '';

  return await baseQuery(`/entries${query}${includeQuery}${selectQuery}${extrasQuery}`);

}

