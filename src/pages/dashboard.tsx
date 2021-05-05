import NextHead from "next/head";

import {
  DashboardContainer,
  DashboardMain,
  DashboardNavbar,
  DashboardContent,
  Sidebar,
} from "../components/Dashboard";

export default function DashBoard(): JSX.Element {
  return (
    <>
      <NextHead>
        <title> Performing | Dashboard</title>
      </NextHead>
      <DashboardContainer>
        <Sidebar />
        <DashboardMain>
          <DashboardNavbar />
          <DashboardContent></DashboardContent>
        </DashboardMain>
      </DashboardContainer>
    </>
  );
}
