import TestRenderer from "react-test-renderer";
import DateRange from "../components/DateRange";

test("DataRange Component Testing.", () => {
    const component = TestRenderer.create(
        <DateRange startDate="2021-01-01" endDate="2021-01-31"/>
    );

    let tree: any = component.toJSON();
    expect(tree).toMatchSnapshot();

    let [startDateSpan, endDateSpan] = component.root.findAllByType("span");

    //Checking if date is being displayed correctly
    expect(startDateSpan.props.children).toEqual("2021-01-01");
    expect(endDateSpan.props.children).toEqual("2021-01-31");
});