// Api
import { fetchCars } from "@/utils";
// components
import {
  Hero,
  CarCard,
  CustomFilter,
  SearchBar,
  ShowMore,
} from "../components";
// constants
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manuFacturer: searchParams.manuFacturer || "",
    model: searchParams.model || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
  });
  // console.log("response:", allCars);
  const isDataEmpty =
    allCars?.length < 1 || !Array.isArray(allCars) || !allCars;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div
        className='mt-13 padding-x padding-y max-width '
        id='discover'
      >
        <div className='home__text-container'>
          <h1 className='text-4xl'>Car Catalogue</h1>
          <p className=''>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter
              title='fuel'
              options={fuels}
            />
            <CustomFilter
              title='year'
              options={yearsOfProduction}
            />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
