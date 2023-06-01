import React, { memo, useCallback, useState } from "react";
import classNames from "classnames";
import type { Node } from "relatives-tree/lib/types";
import { Relations } from "./Relations";
import css from "./NodeDetails.module.css";

interface NodeDetailsProps {
  allNodes: any[];
  node: Readonly<Node>;
  className?: string;
  onSelect: (nodeId: string | undefined) => void;
  onHover: (nodeId: string) => void;
  onClear: () => void;
}

export const NodeDetails = memo(function NodeDetails({
  allNodes,
  node,
  className,
  ...props
}: NodeDetailsProps) {
  const [existRelation, setExistRelation] = useState("");
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
      <div className="text-[60px] my-20">
        <div>Add Relation with existing people</div>
        <ul>
          <li className="m-4 my-8">
            <button onClick={() => setExistRelation("children")}>
              Add Childrens
            </button>
          </li>
          <li className="m-4 my-8">
            <button onClick={() => setExistRelation("spouses")}>
              Add Spouses
            </button>
          </li>
          <li className="m-4 my-8">
            <button onClick={() => setExistRelation("parents")}>
              Add Parents
            </button>
          </li>
          <li className="m-4 my-8">
            <button onClick={() => setExistRelation("siblings")}>
              Add Siblings
            </button>
          </li>
        </ul>
      </div>

      <div className="text-[60px] my-20">
        <div>Add Relation by creating new profile</div>
        <ul>
          <li className="m-4 my-8">
            <button>Add Childrens</button>
          </li>
          <li className="m-4 my-8">
            <button>Add Spouses</button>
          </li>
          <li className="m-4 my-8">
            <button>Add Parents</button>
          </li>
          <li className="m-4 my-8">
            <button>Add Siblings</button>
          </li>
        </ul>
      </div>

      <div id="existRelation">
        <input type="text" placeholder={`Enter ${existRelation} name`} />
        <select>
          {allNodes.map((no) => (
            <option>{no.id}</option>
          ))}
        </select>
      </div>
    </section>
  );
});
