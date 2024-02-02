import PropTypes from "prop-types";
import { useState } from "react";
import {
  CalendarIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon },
  { name: "Teams", href: "#", icon: DocumentDuplicateIcon },
  { name: "Projects", href: "#", icon: FolderIcon },
  { name: "Tasks", href: "#", icon: CalendarIcon },
];

const teams = [
  { id: 1, name: "Harry Potter", href: "#", initial: "P" },
  { id: 2, name: "Twilight", href: "#", initial: "T" }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Sidebar(props) {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-900 px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <p className="text-white px-12 text-2xl font-bold">Tech Project</p>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => {
                          void props.updateState(item.name.toUpperCase());
                          setActiveItem(item.name);
                        }}
                        className={classNames(
                          activeItem === item.name
                            ? "bg-blue-800 text-white hover:text-white"
                            : "text-white hover:text-white hover:bg-blue-800",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-white">Your Teams</div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                  {teams.map((team) => (
                    <li key={team.name}>
                      <a
                        href={team.href}
                        className={classNames(
                          activeItem === team.name
                            ? "bg-blue-800 text-white"
                            : "text-white hover:text-white hover:bg-blue-800",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        )}
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-blue-800 text-white font-medium group-hover:text-white">
                          {team.initial}
                        </span>
                        <span className="truncate">{team.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-blue-800 hover:text-white"
                >
                  <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  updateState: PropTypes.func,
};
