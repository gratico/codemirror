/** @jsx h **/

import { component, h } from "rocky7";
import { Layout } from "./components/Layout";
export const Application = component("Bodhi", (props, utils) => {
  return (
    <div>
      <Layout />
    </div>
  );
});
