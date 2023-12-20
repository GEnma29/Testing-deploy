
import { useState } from "react";

export const usePagination = ({currentPage, limit, total}:{currentPage: number, limit: number, total: number}) => {
    const [page, setPage] = useState(currentPage);

  const nextPage = () => setPage((prev)=> prev <= total ? prev + 1 : prev);
  const prevPage = () => setPage((prev)=> prev > 0 ? prev - 1 : prev);

  return { total, nextPage, prevPage, page };

}