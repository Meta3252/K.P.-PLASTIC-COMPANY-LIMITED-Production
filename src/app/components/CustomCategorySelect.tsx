'use client';

import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

interface CustomCategorySelectProps {
  categories: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function CustomCategorySelect({
  categories,
  selected,
  onChange,
}: CustomCategorySelectProps) {
  return (
    <div className="w-full sm:w-64 text-sm">
      <Listbox value={selected} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white border border-yellow-400 py-2 pl-4 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 text-[#a37d58]">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-yellow-600" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
              {categories.map((category, index) => (
                <Listbox.Option
                  key={index}
                  value={category}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-yellow-100 text-yellow-700' : 'text-gray-800'
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                      >
                        {category}
                      </span>
                      {selected ? (
                        <span className="absolute left-2 top-2.5 text-yellow-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
