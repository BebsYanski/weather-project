import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getWeather } from "./api";

const App = () => {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 25 }),
  });

  return <>{JSON.stringify(data)}</>;
};

export default App;
