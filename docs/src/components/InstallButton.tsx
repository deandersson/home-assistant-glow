import Head from "@docusaurus/Head";
import React, { useMemo } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

/**
 * Define the global JSX types for esp-web-install-button
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "esp-web-install-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

/**
 * Load the ESP Web Tools script and handle potential errors during loading
 */
const loadEspWebToolsScript = () => (
  <script
    type="module"
    src="https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module"
    onError={(e) => console.error("Failed to load esp-web-tools script", e)}
  />
);

export default function InstallButton() {
  const manifestUrl = useBaseUrl("/home-assistant-glow/manifest.json");
  return (
    <>
      <Head>{loadEspWebToolsScript()}</Head>
      <esp-web-install-button manifest={manifestUrl}></esp-web-install-button>
    </>
  );
}
