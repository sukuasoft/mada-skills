"use client";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Link } from "lucide-react";

type RichContentProps = {
  content: any;
};

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <span className="font-bold">{text}</span>
    ),
    [MARKS.ITALIC]: (text: React.ReactNode) => (
      <span className="  italic">{text}</span>
    ),
    [MARKS.STRIKETHROUGH]: (text: React.ReactNode) => (
      <span className="line-through">{text}</span>
    ),
    [MARKS.UNDERLINE]: (text: React.ReactNode) => (
      <span className="underline">{text}</span>
    ),
    [MARKS.CODE]: (text: React.ReactNode) => (
      <code className="bg-[#eee] block px-4 rounded-xl py-4 text-xs">
        <pre>{text}</pre>
      </code>
    ),
  },

  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => {
      return <div className="text-sm mb-4">{children}</div>;
    },
    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
      <h1 className="text-2xl font-bold">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-xl font-bold">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-lg font-bold">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
      <h4 className="text-base font-bold">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => (
      <h5 className="text-sm font-bold">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => (
      <h6 className="text-xs font-bold">{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="list-disc ">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol className="list-decimal">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li className="text-sm ml-8">{children}</li>
    ),
    [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
      <blockquote className="border-l-4 border-[#eee] mb-2 pl-4 italic text-sm">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: (node: any) => <hr className="border-[#eee] my-4" />,
    ["hyperlink"]: (node: any, children: React.ReactNode) => {
      const { uri } = node.data;
      return (
        <a
          href={uri}
          className="text-blue-500 flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Link size={12}  />
          {children}
        </a>
      );
    },
  },
};

export default function RichContent({ content }: RichContentProps) {

  return <div>{documentToReactComponents(content, options)}</div>;
}
