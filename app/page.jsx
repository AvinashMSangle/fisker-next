import Header from "@/components/Header";

function homePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col sm:flex-row justify-between"></main>
      <section className=" w- full md:w-3/4 bg-blue-400">
        Preview Component
      </section>
      <aside className=" w- full md:w-3/4 bg-red-300">
        Configaurator Component
      </aside>
    </>
  );
}

export default homePage;
