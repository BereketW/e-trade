import ItemsViewed from "@app/client/components/global/ItemsViewed";
import Message from "@app/client/components/global/Message";
import Subscribe from "@app/client/components/global/Subscribe";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <div>
        <ItemsViewed />
        <div className="mt-20 mb-5">
          <Subscribe />
        </div>
        <Message />
      </div>
    </div>
  );
}
