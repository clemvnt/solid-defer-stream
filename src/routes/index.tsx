import { Title, useRouteData } from "solid-start";
import { createServerData, redirect } from "solid-start/server";

export function routeData() {
  return createServerData(
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      throw redirect("/login");
    },
    { deferStream: true }
  );
}

export default function Index() {
  useRouteData<typeof routeData>();

  return (
    <>
      <Title>Index</Title>
      <h1>Index</h1>
    </>
  );
}
