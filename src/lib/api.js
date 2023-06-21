const fetcher = async ({ url, method, body, json = true }) => {
    const res = await fetch(url, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("API ERROR");
    }

    if (json) {
        const data = await res.json();
        return data
    }
};

export const GetForms = async () => {
    const baseUrl = 'http://localhost:3000'; 
    const noCache = Date.now().toString(16);
    const url = new URL(`/api/forms?noCache=${noCache}`, baseUrl);
    return fetcher({
      url: url.toString(),
      method: 'get',
      json: true,
    });
  };
  