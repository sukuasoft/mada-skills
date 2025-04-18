async function genericRequest(
  url: string,
  method: string,
  data?: string,
  token?: string
): Promise<any | null> {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    const response = await fetch(`${url}`, {
      method: method,
      headers: headers,
      body: data ? JSON.stringify(data) : undefined,
    });

    const responseData = await response.json();

    return responseData;
  } catch (ex: any) {
    console.log(ex);
  }
  return null;
}

async function get(url: string, token?: string): Promise<any | null> {
  return genericRequest(url, "GET", undefined, token);
}

async function post(
  url: string,
  data: any,
  token?: string
): Promise<any | null> {
  return genericRequest(url, "POST", data, token);
}

async function update(
  url: string,
  data: any,
  token?: string
): Promise<any | null> {
  return genericRequest(url, "PUT", data, token);
}

async function patch(
  url: string,
  data: any,
  token?: string
): Promise<any | null> {
  return genericRequest(url, "PATCH", data, token);
}

async function destroy(url: string, token?: string): Promise<any | null> {
  return genericRequest(url, "DELETE", undefined, token);
}

export { get, post, update, patch, destroy };
