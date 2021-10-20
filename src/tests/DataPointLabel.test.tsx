import TestRenderer from "react-test-renderer";
import DataPointsLabel from "../components/DataPointsLabel";
 
test("DataPointsLabel Component Testing.", () => {
    const component = TestRenderer.create(
        <DataPointsLabel info="10 Data Points" />
    );

    let tree: any = component.toJSON();
    expect(tree).toMatchSnapshot();

    //Checking if label is correct
    expect(component.root.findByType("div").props.children).toEqual("10 Data Points");
});