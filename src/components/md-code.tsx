import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const CodeBlock = ({ ...props }) => {
  return (
    <SyntaxHighlighter
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      language={props.className?.replace(/(?:lang(?:uage)?-)/, "")}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      style={materialOceanic}
      wrapLines={true}
      className="not-prose rounded-md"
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

export const Pre = ({ ...props }) => {
  return <div className="not-prose">{props.children}</div>;
};
