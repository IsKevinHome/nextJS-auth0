"use client";

import React from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";


function Profile() {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <div> Loading </div>}
      {user && <>{user.name}</>}
    </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <div> Loading </div>,
  onError: (error) => <div> Loading </div>,
});
