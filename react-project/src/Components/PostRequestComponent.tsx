import { useFetch } from "../CustomHooks/useFetch";

export default function PostRequestComponent() {
  let CustomHookUtilityFunction: () => Promise<void>;
  try {
    const { data, err, ApiCall } = useFetch(
      "https://jsonplaceholder.typicode.com/todos/",
      "POST",
      {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: 4,
          id: 1001010,
          title: "delectus aut autem",
          completed: false,
        }),
      }
    );
    console.log(data);
    CustomHookUtilityFunction = ApiCall;
  } catch (err) {
    console.log("Error");
    console.log(err);
  }


  return (
    <div>
      <button
        onClick={() => {
          CustomHookUtilityFunction();
        }}
      >
        Execute Custom Hook
      </button>
    </div>
  );
}
