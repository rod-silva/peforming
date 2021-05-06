import { RiAddLine } from "react-icons/ri";

import { Layout } from "../../components/Dashboard";
import {
  NewExpensesButton,
  FormExpense,
  FirstSection,
} from "../../styles/pages/Dashboard/expenses";

import { Input } from "../../components/Dashboard/Form";

export default function Expenses(): JSX.Element {
  return (
    <Layout title="Expenses">
      <NewExpensesButton>
        <RiAddLine />
        Add a new expense
      </NewExpensesButton>
      <FormExpense>
        <FirstSection>
          <div>
            <Input name="date" label="Date" type="text" />
            <Input name="establishment" label="Establishment" type="text" />
          </div>
          <div>
            <Input name="value" label="Value" type="text" />
            <Input name="value" label="Value" type="text" />
          </div>
        </FirstSection>
      </FormExpense>
    </Layout>
  );
}
