import React, { memo, useCallback, useState } from "react";
import classNames from "classnames";
import type { Node } from "relatives-tree/lib/types";
import { Relations } from "./Relations";
import css from "./NodeDetails.module.css";

interface NodeDetailsProps {
  allNodes: any[];
  node: any;
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
  const [nodeSelected, setNodeSelected] = useState("");
  const [listOfUnsuedRelations, setListOfUnusedRelations] = useState<any>([]);
  const closeHandler = useCallback(() => props.onSelect(undefined), [props]);

  React.useEffect(() => {
    let allRelations = [
      ...node.children,
      ...node.siblings,
      ...node.spouses,
      ...node.parents,
    ];

    console.log("All realtions", allRelations);
    console.log("ALl nodes ", allNodes);

    let newAllNodes = allNodes.filter((ad) =>
      allRelations.every((fd) => fd.id !== ad.id)
    );
    console.log("All nodes test", newAllNodes);
    setListOfUnusedRelations(newAllNodes);
  }, []);

  function handleSubmit() {
    if (existRelation == "children") {
      const check = node.children;
      const format = { id: nodeSelected, type: "blood" };
      check.push(format);
    }
  }
  console.log("Node selected ", node);

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

      <div id="existRelation" className="flex flex-col justify-center">
        <span className="text-4xl">Enter Details of {existRelation}</span>
        {/* <input
          type="text"
          className=" m-8 h-12"
          placeholder={`Enter ${existRelation} name`}
        /> */}
        <select
          onChange={(event) => setNodeSelected(event.target.value)}
          className="h-12"
        >
          {listOfUnsuedRelations.map((no: any) => (
            <option>{no.id}</option>
          ))}
        </select>
        <button
          onClick={() => handleSubmit()}
          className="bg-red-400 w-24 scale-150 m-8"
        >
          Submit
        </button>
      </div>
    </section>
  );
});
