import { camelForbidden, Camels } from "../../consts/consts";
import { BetModuleWrapper, CamelButton } from "./index.styled";

const BetModule = ({ betOptions, setBet }) => {
  return (
    <BetModuleWrapper>
      {Object.keys(betOptions).map((camel) => (
        <CamelButton
          key={camel}
          onClick={() => setBet(camel)}
          camel={!betOptions[camel] ? camel : Camels[camelForbidden]}
          disabled={betOptions[camel]}
        />
      ))}
    </BetModuleWrapper>
  );
};

export default BetModule;
