import TestRenderer from "react-test-renderer";
import MultiLineChart from "../components/MultiLineChart";
import { ILineData } from "../types";

const data: ILineData[] = [
    {
        name: "low",
        color: "#D50000",
        values: [
            {
                day: new Date("2021-01-01"),
                value: 1037,
            },
            {
                day: new Date("2021-01-02"),
                value: 1037,
            },
            {
                day: new Date("2021-01-03"),
                value: 1007,
            }
        ]
    }
]

test("MultiLineChart Component Testing.", () => {
    const domain = {

        yMinValue: 1007,
        yMaxValue: 1037
    }

    const component = TestRenderer.create(
        <MultiLineChart data={data} domain={domain} />
    );

    let tree: any = component.toJSON();
    expect(tree).toMatchSnapshot();
});