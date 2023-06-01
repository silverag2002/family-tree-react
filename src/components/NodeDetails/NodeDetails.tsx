import React, { memo, useCallback } from "react";
import classNames from "classnames";
import type { Node } from "relatives-tree/lib/types";
import { Relations } from "./Relations";
import css from "./NodeDetails.module.css";

interface NodeDetailsProps {
  node: Readonly<Node>;
  className?: string;
  onSelect: (nodeId: string | undefined) => void;
  onHover: (nodeId: string) => void;
  onClear: () => void;
}

export const NodeDetails = memo(function NodeDetails({
  node,
  className,
  ...props
}: NodeDetailsProps) {
  const closeHandler = useCallback(() => props.onSelect(undefined), [props]);

  return (
    <section
      className={`classNames(css.root, className) h-full w-full bg-yellow-400 p-6 text-lg z-20`}
    >
      <header
        className={`${css.header} flex flex-row text-[70px] p-6 justify-between`}
      >
        <div></div>
        <h3 className={css.title}>{node.id}</h3>
        <button className={css.close} onClick={closeHandler}>
          &#10005;
        </button>
      </header>
      <div className="text-[50px] flex flex-col justify-between py-20 items-center">
        <Relations {...props} title="Parents" items={node.parents} />
        <Relations {...props} title="Children" items={node.children} />
        <Relations {...props} title="Siblings" items={node.siblings} />
        <Relations {...props} title="Spouses" items={node.spouses} />
      </div>
    </section>
  );
});
