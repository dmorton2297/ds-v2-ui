import PageGroup from "./common/page-group/PageGroup";
import { TopNav } from "./common/top-navigation/TopNav";
const test = () => {
  return <div>Test 1</div>
}

const test2 = () => {
  return <div>Test 2</div>
}

/**
 * Root element of the application
 * @returns {element}
 */
export default function ApplicationContainer() {
  return (
    <>
      <TopNav icon="react.svg" title="Devspace" />
    </>
  );
};
