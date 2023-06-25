import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";

export default function Greet(props: PageProps) {
  return (
    <>
    <Head>
        <title>Fresh web app | {props.params.name}</title>
      </Head>
    <div class="p-4 mx-auto max-w-screen-md">
      <Header/>
      <div>Hello {props.params.name}</div>
    </div>
    </>
  );
}
