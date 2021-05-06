import { RiBankLine, RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { FaBalanceScaleLeft } from "react-icons/fa";

import { Container, Card } from "./styles";

const cardMotionProps = {
  whileHover: {
    y: -10,
  },
};

export const Statistic: React.FC = () => {
  return (
    <Container>
      <Card {...cardMotionProps}>
        <div>
          <p>Current balance</p>
          <p>$0.0</p>
        </div>
        <div className="round balance">
          <RiBankLine />
        </div>
      </Card>
      <Card {...cardMotionProps}>
        <div>
          <p>Incomes</p>
          <p>$0.0</p>
        </div>
        <div className="round incomes">
          <RiArrowUpLine />
        </div>
      </Card>
      <Card {...cardMotionProps}>
        <div>
          <p>Expenses</p>
          <p>$0.0</p>
        </div>
        <div className="round expenses">
          <RiArrowDownLine />
        </div>
      </Card>
      <Card {...cardMotionProps}>
        <div>
          <p>Monthly balance</p>
          <p>$0.0</p>
        </div>
        <div className="round monthly-balance">
          <FaBalanceScaleLeft />
        </div>
      </Card>
    </Container>
  );
};
