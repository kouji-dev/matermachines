import { Link } from "@components/ui";
import { Category } from "@framework/types";
import { Popover, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { FC, Fragment } from "react";
import s from "./Search.module.css";

interface Props {
  categories: Category[] | null;
}

export const Search: FC<Props> = ({ categories }) => {
  return (
    <div id="search" className={s.container}>
      <div className="flex items-center font-bold text-sm uppercase">
        <CategoryUI categories={categories} />
      </div>
      <hr className="h-3/6 w-px bg-gray-500" />
      <div className={s.searchInputContainer}>
        <input
          className={s.input}
          placeholder="Search for products..."
          type="text"
        />
        <SearchIcon className="h-5 w-5 text-gray-500 hover:text-gray-600" />
      </div>
    </div>
  );
};

interface CategoryUIProps {
  categories: Category[] | null;
}

const CategoryUI: FC<CategoryUIProps> = ({ categories }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
            ${open ? "" : "text-opacity-90"}
            text-white group px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span>Categories</span>
            <ChevronDownIcon
              className={`${open ? "rotate-180" : "text-opacity-70"} transform
              ml-2 h-5 w-5 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-300`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform left-1/2 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7 grid-cols-2">
                  {categories?.map((category) => (
                    <div key={category.id}>
                      <Link href={`category/${category?.slug}`}>
                        <span className="text-md font-bold">
                          {category.name}
                        </span>
                      </Link>
                      <div className="flex flex-col mt-2">
                        {category?.children?.nodes?.map((child) => (
                          <Link
                            href={`category/${child?.slug}`}
                            key={child?.id}
                          >
                            <span className="text-sm text-gray-500">
                              {child?.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
