"use client";

import { useEffect, useState } from "react";

export default function useQuery(feacher, deps = []) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(
    function () {
      const featch = async () => {
        setIsLoading(true);
        try {
          const data = await feacher();
          setData(data);
        } catch (error) {
          setIsError(true);
        }
        setIsLoading(false);
      };
      featch();
    },
    [feacher]
  );

  return { data, isLoading, isError };
}
