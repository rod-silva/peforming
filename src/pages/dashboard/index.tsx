import { DashBoardLayout } from "../../components/Dashboard";
import { Statistic } from "../../components/Statistic";
import { Grid, Header } from "../../styles/pages/Dashboard/home";

export default function DashBoard(): JSX.Element {
  return (
    <DashBoardLayout title="home">
      <>
        <Header>Home</Header>
        <Statistic />
        <Grid>
          <div>
            <h1>Predictions (0)</h1>
            <img
              src="/assets/dashboard/home/predictions.svg"
              alt="predictions"
            />
            <p>It looks like your job is done. Very well!</p>
          </div>
          <div>
            <h1>Paids (0)</h1>
            <img src="/assets/dashboard/home/paids.svg" alt="paids" />
            <p>No payment pays off</p>
            <p>Try adding an expense first or adjust your filter</p>
          </div>
        </Grid>
      </>
    </DashBoardLayout>
  );
}
