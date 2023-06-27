const fetcher = async ({
  url, method, body, json = true,
}) => {
  const res = await fetch(url, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('API ERROR');
  }

  if (json) {
    const data = await res.json();
    return data;
  }
};

export const GetForms = async () => {
  try {
    const baseUrl = 'http://localhost:3000';
    const noCache = Date.now().toString(16);
    const url = new URL(`/api/forms?noCache=${noCache}`, baseUrl);
    return await fetcher({
      url: url.toString(),
      method: 'get',
      json: true,
    });
  } catch (error) {
    // Handle error when fetching forms
    console.error('Failed to fetch forms:', error);
    throw error;
  }
};

export const updateForm = async (formId, updatedFields) => {
  try {
    const baseUrl = 'http://localhost:3000';
    const noCache = Date.now().toString(16);
    const url = new URL(`/api/forms?noCache=${noCache}`, baseUrl);
    // Send the updated form data to the API
    return await fetcher({
      url: url.toString(),
      method: 'put',
      body: { updatedFields, formId },
      json: true,
    });
  } catch (error) {
    // Handle error when updating form
    console.error('Failed to update form:', error);
    throw error;
  }
};
