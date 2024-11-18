/*  This file is used to fetch data from the server
 */

export function rest<T>(url: string): Promise<T> {
  return fetch(url).then((x) => x.json())
}
/** Alternative Method
 * export async function rest(url: string) {
  const data = await fetch(url)   //returns promise of url
  return await data.json()        //returns promise of json data
}
 */
