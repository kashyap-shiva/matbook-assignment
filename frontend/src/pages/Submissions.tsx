import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";
import type { Submission } from "../types/form";
import Loading from "../components/Loading";
import Error from "../components/Error";

interface SubmissionsResponse {
  records: Submission[];
  totalPages: number;
}

const fetchSubmissions = async (
  page: number,
  limit: number,
  sortOrder: string
): Promise<SubmissionsResponse> => {
  const res = await api.get("/submissions", {
    params: { page, limit, sortOrder },
  });
  return res.data;
};

const Submissions: React.FC = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [sortOrder] = useState("desc");

  const { data, isLoading, error } = useQuery<SubmissionsResponse>({
    queryKey: ["submissions", page, limit, sortOrder],
    queryFn: () => fetchSubmissions(page, limit, sortOrder),
    placeholderData: (prev) => prev, // ⬅ replacement for keepPreviousData
  });

  if (isLoading) return <Loading />;
  if (error) return <Error message="Failed to load submissions" />;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submissions</h1>

      {data?.records.length === 0 ? (
        <p>No submissions found</p>
      ) : (
        <table className="min-w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">ID</th>
              <th className="border px-2 py-1">Created At</th>
            </tr>
          </thead>
          <tbody>
            {data?.records.map((sub) => (
              <tr key={sub.id}>
                <td className="border px-2 py-1">{sub.id}</td>
                <td className="border px-2 py-1">
                  {new Date(sub.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* PAGINATION */}
      <div className="flex justify-between mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          Page {page} of {data?.totalPages}
        </span>

        <button
          disabled={page === data?.totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Submissions;
