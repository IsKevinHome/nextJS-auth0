"use client";

import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";


function HomePage() {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <div> Loading </div>}
      {user && <> Hi {user.name}, you are login successfully</>}
    </>
  );
}

export default withPageAuthRequired(HomePage, {
  onRedirecting: () => <div> Loading </div>,
  onError: (error) => <div> Loading </div>,
});
