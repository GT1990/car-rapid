import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import ShowMore from "@/components/ShowMore";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    year: searchParams.year || 2023,
    make: searchParams.make || "",
    model: searchParams.model || "",
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
  });
  console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 id="inventoryId" className="text-4xl font-extrabold">
            Inventory
          </h1>
          <p>
            Explore our ultimate selection of cars, trucks, suvs and more...
          </p>
        </div>

        <div className="home__filters">
          <SearchBar
            scrollValue={
              isNaN(parseInt(searchParams.scroll, 10))
                ? 0
                : parseInt(searchParams.scroll, 10)
            }
          />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
