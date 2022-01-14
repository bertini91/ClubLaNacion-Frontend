import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { HEROKU_URL } = publicRuntimeConfig;

const baseUrl: string | any = HEROKU_URL ;

const consultAPI = (endpoint: string, data: string, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export { consultAPI };
