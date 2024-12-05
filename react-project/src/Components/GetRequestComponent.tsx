import { useFetch } from "../CustomHooks/useFetch";

export default function GetRequestComponent() {
  try {
    const { data, err } = useFetch(
      "https://jsonplaceholder.typicode.com/posts/",
      "GET",
      {}
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return <div></div>;
}
