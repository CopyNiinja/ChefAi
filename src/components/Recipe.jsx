import ReactMarkdown from "react-markdown";
// eslint-disable-next-line react/prop-types
export default function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </div>
  );
}
