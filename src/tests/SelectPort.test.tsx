import TestRenderer from "react-test-renderer";
import SelectPort from "../components/SelectPort";

const ports = [
    {
        code: "CNSGH",
        name: "Shanghai"
    },
    {
        code: "NOOSL",
        name: "Oslo"
    }
]

test("SelectPort Component Testing.", () => {
    const component = TestRenderer.create(
        <SelectPort ports={ports} placeholder="test_placeholder" onSelect={() => {}} />
    );

    let tree: any = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByType("input").props.placeholder).toEqual("test_placeholder");
});