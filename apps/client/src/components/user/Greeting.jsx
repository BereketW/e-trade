import React, { useEffect, useState } from "react";
import Loader from "../global/Loader";
import { getMe } from "@app/client/data/users";
import useQuery from "../hooks/useQuery";

export default function Greeting({
  email = false,
  name = false,
  fullName = false,
}) {
  const { data, isLoading, isError } = useQuery(getMe);
  // const { data, isLoading, isError } = use(getMe);
  return (
    <div>
      {name && (
        <span>
          {isLoading ? (
            <Loader size={40} color={"black"} />
          ) : (
            data &&
            data?.firstName.charAt(0).toUpperCase() + data?.firstName.slice(1)
          )}
        </span>
      )}
      {email && (
        <span>
          {isLoading ? (
            <Loader size={40} color={"black"} />
          ) : (
            data && data.email
          )}
        </span>
      )}
      {fullName && (
        <span>
          {isLoading ? (
            <Loader size={40} color={"black"} />
          ) : (
            data && data.firstName + data.lastName
          )}
        </span>
      )}
    </div>
  );
}
