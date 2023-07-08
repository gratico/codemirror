/** @jsx h **/

import { component, h } from "rocky7";
import styles from "./Layout.module.scss";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

const setupCodemirror = (el: HTMLIFrameElement) => {
  console.log(el);
  console.log(el.contentDocument, el.contentDocument?.body);
  (el.contentDocument as Document).body.innerHTML = `<style>
      html, body { margin: 0; padding: 0; height: 100vh; }
      #codemirrorContainer {
        height: 100vh;
      }
      #codemirrorContainer > div {
        height: 100vh;
      }
      </style>
      <div id="codemirrorContainer"></div>
      `;
  let editor = new EditorView({
    extensions: [basicSetup, javascript()],
    parent: el.contentDocument?.querySelector("#codemirrorContainer")!,
  });
  return editor;
};

export const Layout = component("Layout", (props, utils) => {
  let container: HTMLElement | undefined;
  let editor: EditorView | undefined;
  return (
    <iframe
      frameBorder={"none"}
      ref={(el) => {
        container = el;
      }}
      onLoad={() => {
        if (container) {
          editor = setupCodemirror(container as HTMLIFrameElement);
        }
      }}
      class={styles.container}
    ></iframe>
  );
});

export type A = any;
