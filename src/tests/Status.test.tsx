import TestRenderer from "react-test-renderer";
import Status from "../components/Status";
import { EStatusType } from "../types";

test("DataRange Component Testing.", () => {
    const component = TestRenderer.create(
        <Status status={EStatusType.error} />
    );

    let tree: any = component.toJSON();
    expect(tree).toMatchSnapshot();

    let errorDiv = component.root.findAllByType("div")[1];
    expect(errorDiv.children).toEqual(['Sorry, please try another route']);
});