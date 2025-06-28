import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchTx } from "../api/client";

export default function TxDetail() {
  const { hash } = useParams<{hash:string}>();
  const [tx, setTx] = useState<any>(null);
  useEffect(() => { if (hash) fetchTx(hash).then(setTx); }, [hash]);
  if (!tx) return <div>Loading…</div>;
  return (
    <div>
      <h2>Tx {tx.hash}</h2>
      <pre>{JSON.stringify(tx.body, null, 2)}</pre>
      <Link to="/">← Back</Link>
    </div>
  );
}
