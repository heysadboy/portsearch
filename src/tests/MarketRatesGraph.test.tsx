import TestRenderer from "react-test-renderer";
import MarketRatesGraph from "../components/MarketRatesGraph";

const data = [
    {
        day: "2021-01-01",
        mean: 1615,
        low: 1037,
        high: 2436,
    },
    {
        day: "2021-01-02",
        mean: 1611,
        low: 1037,
        high: 2436,
    },
    {
        day: "2021-01-03",
        mean: 1613,
        low: 1007,
        high: 2436,
    }
]
test("MarketRatesGraph Component Testing.", () => {
    const component = TestRenderer.create(
        <MarketRatesGraph data={data} />
    );

    let tree: any = component.toJSON();
    expect(tree).toMatchSnapshot();
});