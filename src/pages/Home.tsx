import { useEffect, useState } from "react";
import { fetchLatestBlocks } from "../api/client";
import { Link } from "react-router-dom";

export default function Home() {
  const [blocks, setBlocks] = useState<any[]>([]);
  useEffect(() => { fetchLatestBlocks(20).then(setBlocks); }, []);
  return (
    <div>
      <h1>Latest Blocks</h1>
      <ul>
        {blocks.map(b => (
          <li key={b.height}>
            <Link to={`/block/${b.height}`}>#{b.height}</Link> @ {new Date(b.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
