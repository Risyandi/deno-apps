import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function Greet(props: PageProps) {
  return (
    <>
    <div class="p-4 mx-auto max-w-screen-md">
      <Header/>
      <div>Hello {props.params.name}</div>
    </div>
    </>
  );
}
