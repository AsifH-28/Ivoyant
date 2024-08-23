import { useEffect, useState } from "react";

export interface GetOptions extends RequestInit {
  body?: any;
}

interface GetResponse<T> {
  data: T | null;
  err: string | null;
  ApiCall:()=>Promise<void>
}

export const useFetch = (url: string, method: string, options: GetOptions):GetResponse<any> => {
  const [data, setData] = useState();
  const [err, setErr] = useState(null);

  const ApiCall = async () => {
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body:
          method === "GET" || method === "DELETE"
            ? undefined
            : JSON.stringify(options.body),
        ...options,
      });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      console.log(result);
      setData(result);

    } catch (error) {
      setErr(err);
    }
  };

  useEffect(() => {
    ApiCall();
  }, []);

  return { data, err,ApiCall };
};
