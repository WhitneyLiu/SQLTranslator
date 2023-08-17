import "../styles/sqlGeneratePage.scss";
import { useState } from "react";
import {
  ArrowPathIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/20/solid";
import DatabaseDropdown from "./databaseDropdown";
import SwitchButton from "./switchButton";
import Textarea from "./textarea";

export default function SqlGeneratePage() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <main>
        <div className="content-container">
          <div className="content-container-layout">
            <ul>
              <li className="li-text">Generate SQL</li>
              <li>
                <SwitchButton
                  enabled={enabled}
                  onChange={setEnabled}
                  label="Add database schema"
                />
                {enabled ? (
                  <div className="mt-4">
                    <label htmlFor="about">
                      Add your database tables here:
                    </label>
                    <div className="mt-2">
                      <Textarea />
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </li>
              <li className="li-text">
                <label htmlFor="about">Write here what you want:</label>
                <div className="mt-2">
                  <Textarea />
                </div>
                <div className="button-container">
                  <button type="button" className="indigo-button">
                    <ArrowPathIcon aria-hidden="true" />
                    Generate
                  </button>
                  <DatabaseDropdown />
                </div>
              </li>

              <li className="li-text">
                <label htmlFor="about">Your AI-Generated SQL querie:</label>
                <div className="mt-2">
                  <Textarea disabled={true} />
                </div>
                <div className="button-container">
                  <button type="button" className="indigo-button">
                    <DocumentDuplicateIcon aria-hidden="true" />
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
