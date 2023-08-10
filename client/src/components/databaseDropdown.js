import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";

const databaseTypes = [
  { id: 1, type: "PostgreSQL" },
  { id: 2, type: "MySQL" },
  { id: 3, type: "MySQL Server" },
  { id: 4, type: "MariaDB" },
  { id: 5, type: "Snowflake" },
  { id: 6, type: "BigQuery" },
  { id: 7, type: "SQLite" },
  { id: 8, type: "IBM DB2" },
  { id: 9, type: "Hive" },
  { id: 10, type: "FlinkSQL" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DatabaseDropdown() {
  const [query, setQuery] = useState("");
  const [selectedDatabase, setSelectedDatabase] = useState(null);

  const filteredDatabaseTypes =
    query === ""
      ? databaseTypes
      : databaseTypes.filter((database) => {
          return database.type.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      className="relative inline-block text-left"
      value={selectedDatabase}
      onChange={setSelectedDatabase}
    >
      <div className="relative">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-2.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(database) =>
            database ? database.type : "Database Type"
          }
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredDatabaseTypes.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredDatabaseTypes.map((database) => (
              <Combobox.Option
                key={database.id}
                value={database}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-8 pr-4",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {database.type}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 left-0 flex items-center pl-1.5",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
