import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";
import type { FormSchema } from "../types/form";

export const useFormSchema = () =>
  useQuery<FormSchema, Error>({
    queryKey: ["form-schema"],
    queryFn: async () => {
      const res = await api.get("/form-schema");
      return res.data;
    },
  });
