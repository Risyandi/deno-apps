import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Header from "../components/Header.tsx";

let checkObject = function (value: object) {
  let lengthObject = Object.keys(value).length;
  return lengthObject !== 0 ? true : false;
}

export default function Home(props: PageProps) {
  return (
    <>
      <Head>
        <title>Fresh App | { checkObject(props.params) ? props.params.name : 'Homepage'}</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
      <Header/>
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
