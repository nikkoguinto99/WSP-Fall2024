/*  This file is used to fetch data from the server
 */

const API_URL = 'http://localhost:3000/api/v1/'

export function rest<T>(url: string, data?: any, method?: string): Promise<T> {
  return fetch(url,
    {
      method: method ?? data ? 'POST' : 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  ).then((x) => x.json())
}

export function api<T>(url: string, data?: any, method?: string): Promise<T> {
  return rest<T>(API_URL + url)
}


/** Alternative Method
 * export async function rest(url: string) {
  const data = await fetch(url)   //returns promise of url
  return await data.json()        //returns promise of json data
}
 */
