import Link from "next/link";

import {
  RiHome4Line,
  RiFileTextLine,
  RiCalendarLine,
  RiNumbersFill,
  RiSettings2Fill,
  RiMapFill,
} from "react-icons/ri";

import { Header, InnerContent } from "./styles";

export const SidebarLayout: React.FC = () => {
  return (
    <>
      <Header>
        <img src="/assets/growth.svg" alt="logo" />
        <span>Performing</span>
      </Header>
      <InnerContent>
        <li>
          <Link href="/dashboard">
            <a>
              <RiHome4Line /> Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/expenses">
            <a>
              <RiFileTextLine />
              Expenses
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/goals">
            <a>
              <RiMapFill />
              Goals
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/calendar">
            <a>
              <RiCalendarLine /> Calendar
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/my-performance">
            <a>
              <RiNumbersFill />
              My performance
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/settings">
            <a>
              <RiSettings2Fill />
              Settings
            </a>
          </Link>
        </li>
      </InnerContent>
    </>
  );
};
