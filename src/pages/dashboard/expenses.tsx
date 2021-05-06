import { RiAddLine } from "react-icons/ri";

import { Layout } from "../../components/Dashboard";
import {
  NewExpensesButton,
  FormExpense,
  FirstSection,
  SecondSection,
  Receipt,
  FormWraper,
  ButtonGroup,
  Divider,
} from "../../styles/pages/Dashboard/expenses";

import { Button, Collapse, DashInput } from "../../components/";
import { useState } from "react";
import { Select } from "../../components/forms/Select";

export default function Expenses(): JSX.Element {
  const [collapseForm, setCollapseForm] = useState(false);
  return (
    <Layout title="Expenses">
      <NewExpensesButton onClick={() => setCollapseForm(!collapseForm)}>
        {!collapseForm && <RiAddLine />}
        {collapseForm ? "Cancel" : "Add a new expense"}
      </NewExpensesButton>
      <Collapse isCollpase={collapseForm}>
        <Divider />
        <FormExpense>
          <FormWraper>
            <div>
              <FirstSection>
                <div>
                  <DashInput name="date" label="Date" type="date" />
                  <DashInput
                    name="establishment"
                    label="Establishment"
                    type="text"
                  />
                </div>
                <div>
                  <DashInput name="value" label="Value" type="number" />
                  <Select name="currency" label="Currency">
                    <option value="brl"> BRL</option>
                    <option value="usd">USD</option>
                    <option value="lml"> LML </option>
                  </Select>
                </div>
              </FirstSection>
              <Divider />
              <SecondSection>
                <div>
                  <DashInput name="category" type="text" label="Category" />
                  <DashInput name="payWith" type="text" label="Pay with..." />
                </div>
                <div>
                  <DashInput name="project" label="Project" type="text" />
                  <DashInput name="taxTaxa" label="Tax taxa" type="number" />
                  <DashInput name="tax" label="Tax (%)" type="number" />
                  <DashInput name="taxValue" label="Tax Value" type="number" />
                </div>
                <div className="comentary">
                  <label htmlFor="comentary">Cometary</label>
                  <textarea id="comentary" name="comentary" />
                </div>
              </SecondSection>
            </div>
            <Receipt>
              <div>
                <span>Without receipt</span>
                <input />
              </div>
              <button type="button">Make Upload</button>
            </Receipt>
          </FormWraper>
          <Divider />
          <ButtonGroup>
            <Button
              borderRadius="0.35rem"
              backgroundColor="#30B4FE"
              color="#fff"
              type="submit"
            >
              Save
            </Button>
          </ButtonGroup>
        </FormExpense>
      </Collapse>
    </Layout>
  );
}
