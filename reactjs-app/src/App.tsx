import { useEffect } from "react";
import { getProperties } from "./actions/get-properties";
import useProperties, { Property } from "./zustand/useProperties";

function App() {
  const { setPropeties, properties } = useProperties();

  const getData = async () => {
    const data = await getProperties();

    setPropeties(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      {properties?.map((item: Property) => (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            className="rounded-t-lg"
            src={item?.imageUrl}
            alt={item?.title}
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item?.title}
            </h5>
          </div>
        </div>
      ))}
    </main>
  );
}

export default App;
