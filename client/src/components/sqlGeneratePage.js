import SideNav from "./sideNav";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { CircleStackIcon } from "@heroicons/react/24/outline";
import {
  ArrowPathIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/20/solid";
import DatabaseDropdown from "./databaseDropdown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SqlGeneratePage() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <SideNav currentHerf="/sql-generate" />
      <main className="py-10 sm:pl-72">
        <div className="mx-auto px-8 max-w-2xl">
          <div className="overflow-hidden rounded-md bg-gray-800 shadow">
            <ul role="list" className="divide-y divide-gray-700">
              <li className="px-6 py-4 text-white text-2xl">Generate SQL</li>
              <li className="px-6 py-4">
                <Switch.Group as="div" className="flex items-center">
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={classNames(
                      enabled ? "bg-indigo-600" : "bg-gray-200",
                      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        enabled ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                      )}
                    />
                  </Switch>
                  <Switch.Label as="span" className="ml-3 text-sm">
                    <CircleStackIcon className="h-5 w-5 text-gray-300 inline-block" />{" "}
                    <span className="text-gray-300">Add database schema</span>
                  </Switch.Label>
                </Switch.Group>
                {enabled ? (
                  <div>
                    <label
                      htmlFor="about"
                      className="mt-4 flex text-sm font-medium leading-6 text-white"
                    >
                      Add your database tables here:
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="h-48 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </li>
              <li className="px-6 py-4 text-white text-2xl">
                <label
                  htmlFor="about"
                  className="flex text-sm font-medium leading-6 text-white"
                >
                  Write here what you want:
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="h-48 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <ArrowPathIcon
                      className="-ml-0.5 h-5 w-5"
                      aria-hidden="true"
                    />
                    Generate
                  </button>
                  <DatabaseDropdown />
                </div>
              </li>

              <li className="px-6 py-4 text-white text-2xl">
                <label
                  htmlFor="about"
                  className="flex text-sm font-medium leading-6 text-white"
                >
                  Your AI-Generated SQL querie:
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    disabled={true}
                    rows={3}
                    className="h-48 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <DocumentDuplicateIcon
                      className="-ml-0.5 h-5 w-5"
                      aria-hidden="true"
                    />
                    Copy
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
