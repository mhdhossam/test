const baseUrl: string = "https://daleel-back.zeeploy.xyz/api"; // Your Django API base URL

interface FetchParams {
  [key: string]: string | number | boolean; // Define the type of query parameters
}

async function fetchFromApi<T>(path: string, params: FetchParams = {}): Promise<T> {
  const queryString: string = new URLSearchParams(params as Record<string, string>).toString();
  const url: string = `${baseUrl}/${path}?${queryString}`;
  
  const res: Response = await fetch(url);
  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  
  return await res.json();
}

export default fetchFromApi;
