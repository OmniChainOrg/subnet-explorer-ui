import axios from "axios";
const API = axios.create({ baseURL: process.env.REACT_APP_INDEXER_API });
export async function fetchLatestBlocks(n = 10) {
  return API.get(`/blocks/latest/${n}`).then(r => r.data);
}
export async function fetchBlock(height: number) {
  return API.get(`/block/${height}`).then(r => r.data);
}
export async function fetchTx(hash: string) {
  return API.get(`/tx/${hash}`).then(r => r.data);
}
