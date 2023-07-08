/** @jsx h **/

import { component, h } from "rocky7";
import styles from "./Layout.module.scss";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

const setupCodemirror = (el: HTMLElement) => {
  let editor = new EditorView({
    extensions: [basicSetup, javascript()],
    parent: el,
  });
};

export const Layout = component("Layout", (props, utils) => {
  let container: HTMLElement | undefined;
  return (
    <div
      ref={(el) => {
        container = el;
        setupCodemirror(el);
      }}
      class={styles.container}
    ></div>
  );
});

export type A = any;
