import { useEffect, useState, Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Transition } from "@headlessui/react";

export default function ExtendSessionNotification() {
  const [isSessionExpiring, setIsSessionExpiring] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkSessionValidity();
    const interval = setInterval(checkSessionExpiration, 15000); // Check every 15 seconds
    return () => clearInterval(interval);
  }, []);

  async function checkSessionValidity() {
    try {
      await Auth.currentSession();
      if (location.pathname === "/home" || location.pathname === "/Home") {
        navigate("/home/sql-generate");
      }
    } catch (error) {
      navigate("/");
    }
  }

  async function extendSession() {
    try {
      await Auth.currentAuthenticatedUser();
      setIsSessionExpiring(false);
    } catch (error) {
      // Handle error
    }
  }

  async function checkSessionExpiration() {
    try {
      const session = await Auth.currentSession();
      const currentTime = Math.floor(Date.now() / 1000); // Convert to seconds
      const expiresAt = session.getIdToken().getExpiration();
      const timeUntilExpiration = expiresAt - currentTime;
      console.log(timeUntilExpiration);

      // Show notification when session is about to expire (30s)
      if (timeUntilExpiration <= 30) {
        setIsSessionExpiring(true);
      } else {
        setIsSessionExpiring(false);
      }
    } catch (error) {
      // Handle error
    }
  }

  return (
    <>
      {/* Global notification live region, render this permanently at the end of the document */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={isSessionExpiring}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="w-0 flex-1 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <ExclamationTriangleIcon
                      className="h-6 w-6 text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      Your session will expire soon
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Your session will expire soon and you will be logged out
                      automatically. Click "Extend Session" to extend your
                      session.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={extendSession}
                >
                  Extend Session
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
