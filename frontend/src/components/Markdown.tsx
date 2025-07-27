import React from "react";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import hljs from "markdown-it-highlightjs";

const md = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
})
  .use(anchor)
  .use(hljs);

interface Props {
  children: string;
}

const Markdown: React.FC<Props> = ({ children }) => {
  const htmlContent = md.render(children);
  return (
    <div
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default Markdown;
