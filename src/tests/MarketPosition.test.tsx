import TestRenderer from "react-test-renderer";
import { act } from 'react-dom/test-utils';
import MarketPosition from "../components/MarketPosition";
import ReactDOM from "react-dom";

let selectedPositions: string[] = [];
const setSelectedPositions = (data: string[]) => {
    selectedPositions = [...selectedPositions, ...data]
}

test("MarketPosition Component Testing.", () => {
    const component = TestRenderer.create(
        <MarketPosition selectedPositions={selectedPositions} setSelectedPositions={setSelectedPositions} />
    )

    let tree: any = component.toJSON();
    expect(tree).toMatchSnapshot();
});

let container: any;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it('Click the checkbox to see if state is updated.', () => {
    act(() => {
        ReactDOM.render(<MarketPosition selectedPositions={selectedPositions} setSelectedPositions={setSelectedPositions} />, container);
    });

    const input = container.querySelector("input")
    act(() => {
        input.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(selectedPositions).toEqual(["high"]);
});