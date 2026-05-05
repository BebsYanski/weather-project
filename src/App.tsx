import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getWeather } from "./api";
import Card from "./components/cards/Card";

const App = () => {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: 10, lon: 25 }),
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start py-10">
      <Card title="Current Weather">
        {JSON.stringify(data?.current).slice(0, 100)}
      </Card>
      <Card title="Hourly Forecast (48 hours)">
        {JSON.stringify(data?.hourly).slice(0, 100)}
      </Card>
      <Card title="Daily Forecast (7 days)">
        {JSON.stringify(data?.daily).slice(0, 100)}
      </Card>
    </div>
  );
};

export default App;
