import averageTree from "relatives-tree/samples/average-tree.json";
import couple from "relatives-tree/samples/couple.json";
import diffParents from "relatives-tree/samples/diff-parents.json";
import divorcedParents from "relatives-tree/samples/divorced-parents.json";
import empty from "relatives-tree/samples/empty.json";
import severalSpouses from "relatives-tree/samples/several-spouses.json";
import simpleFamily from "relatives-tree/samples/simple-family.json";
import testTreeN1 from "relatives-tree/samples/test-tree-n1.json";
import testTreeN2 from "relatives-tree/samples/test-tree-n2.json";
import type { Node } from "relatives-tree/lib/types";

export const NODE_WIDTH = 210;
export const NODE_HEIGHT = 250;

console.log("AVerage tree json", diffParents);

export const SOURCES = {
  "average-tree.json": averageTree,
  "couple.json": couple,
  "diff-parents.json": diffParents,
  "divorced-parents.json": divorcedParents,
  "empty.json": empty,
  "several-spouses.json": severalSpouses,
  "simple-family.json": simpleFamily,
  "test-tree-n1.json": testTreeN1,
  "test-tree-n2.json": testTreeN2,
} as Readonly<{ [key: string]: any[] }>;

export const DEFAULT_SOURCE = Object.keys(SOURCES)[0];

export const URL_LABEL = "URL (Gist, Paste.bin, ...)";

export const RELATION_TYPE = [
  "Father",
  "Mother",
  "Brother",
  "Sister",
  "Son",
  "Daughter",
  "Wife",
  "Husband",
];
