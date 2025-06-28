import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchBlock } from "../api/client";

export default function BlockDetail() {
  const { height } = useParams<{height:string}>();
  const [block, setBlock] = useState<any>(null);
  useEffect(() => { if (height) fetchBlock(+height).then(setBlock); }, [height]);
  if (!block) return <div>Loading…</div>;
  return (
    <div>
      <h2>Block #{block.height}</h2>
      <p>Hash: {block.hash}</p>
      <p>Time: {new Date(block.timestamp).toLocaleString()}</p>
      <Link to="/">← Back</Link>
    </div>
  );
}
