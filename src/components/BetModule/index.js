import { CamelButton } from "./index.styled";

const BetModule = ({ betOptions, setBet }) => {
    return (
        <div>
            {Object.keys(betOptions).map(camel =>
                <CamelButton key={camel}
                    onClick={() => setBet(camel)}
                    camel={!betOptions[camel] ? camel : undefined}
                    disabled={betOptions[camel]}
                />
            )}
        </div>
    )
}

export default BetModule;