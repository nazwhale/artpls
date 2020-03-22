import React from "react";
import "./DemoText.css";

export default function DemoText() {
  return (
    <div className="banner">
      <span>
        This site was set up to support artists who've been out of work due to
        the coronavirus. Right now we're still getting set up, but you're
        welcome to donate in the meantime. Every little is greatly appreciated{" "}
        <span role="img" aria-label="raised hands">
          🙌
        </span>
      </span>
    </div>
  );
}
