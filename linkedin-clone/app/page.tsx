import PostForm from "@/components/PostForm";
import { Button } from "@/components/ui/button";
import UserInformation from "@/components/UserInformation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-cols-8 mt-5 sm:px-5">
      <section className="hidden md:inline md:col-span-2  ">
        <UserInformation />
        {/* userinformation */}
      </section>

      <section
        className="col-span-full md:col-span-6 xl:col-span-4
      xl:max-w-xl  mx-auto w-full
      "
      >
        <div className="bg-red-500"></div>
        {/* Postform */}
        <PostForm />

        {/* Postfeed */}
      </section>

      <section className="hidden xl:inline justify-center  col-span-2">
        {/* Widget */}
      </section>
    </main>
  );
}
