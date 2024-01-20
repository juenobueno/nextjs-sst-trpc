import { createHydratingApi } from "@/app/utils/trpc/hydrate/serverPreFill";
import { ExampleComponent } from "../client-fetch/Example";
import { api } from "@/app/utils/trpc/server";

export default async function Server() {
  const userData = await api.user.userDetails.query();

  return (
    <div>
      <h1 className="mb-3 text-xl font-medium">Server Side Page</h1>
      <div className="mb-3">
        This is an example of a page that fetches information purely on the
        server side and renders it. This is useful if youre displaying static
        data and dont mind if its refetched on the client ( if there are client
        side components doing fetching too )
        <br />
        You can see that the data is server side fetched by looking at the
        network tab in your browser.
      </div>

      <h1 className="my-4 text-xl font-medium">Fetched User Data</h1>

      <div>User Name: {userData?.name}</div>
      <div>User Email: {userData?.email}</div>
      <div>User Id: {userData?.userId}</div>
    </div>
  );
}