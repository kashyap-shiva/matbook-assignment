import React from "react";
import { useFormSchema } from "../hooks/useFormSchema";
import { useForm, Field as FormField } from "@tanstack/react-form";
import { api } from "../api/api";
import Error from "../components/Error";
import Loading from "../components/Loading";
import type { Field } from "../types/form";

const DynamicForm: React.FC = () => {
  const { data: schema, isLoading, error } = useFormSchema();

  const form = useForm({
    defaultValues: {},
    onSubmit: async ({ value }) => {
      try {
        await api.post("/submissions", value);
        alert("Submission successful!");
        form.reset();
      } catch (err: any) {
        alert(err.response?.data?.errors || "Submission failed");
      }
    },
  });

  if (isLoading) return <Loading />;
  if (error || !schema)
    return <Error message={error?.message || "Failed to load form"} />;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">{schema.title}</h1>
        <p className="text-gray-600 mb-10">{schema.description}</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-8"
        >
          {schema.fields.map((schemaField: Field) => (
            <FormField key={schemaField.name} name={schemaField.name} form={form}>
              {(fieldApi) => {
                const inputValue =
                  fieldApi.state.value === undefined ||
                  fieldApi.state.value === null
                    ? ""
                    : String(fieldApi.state.value);

                return (
                  <div className="grid grid-cols-[200px_1fr] gap-4 items-start">
                    <label className="text-sm font-semibold text-gray-700 pt-2.5 text-right">
                      {schemaField.label}
                    </label>

                    <div className="space-y-1.5">
                      <input
                        type={schemaField.type}
                        placeholder={schemaField.placeholder}
                        value={inputValue}
                        onChange={(e) =>
                          fieldApi.setValue(
                            schemaField.type === "number"
                              ? e.target.value === ""
                                ? undefined
                                : Number(e.target.value)
                              : e.target.value
                          )
                        }
                        className="
                          w-full
                          px-4 py-3
                          bg-gray-50
                          hover:bg-gray-100
                          border border-gray-300
                          rounded-xl
                          shadow-sm
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                          outline-none
                          transition-all
                        "
                      />
                      {fieldApi.state.meta.errors?.[0] && (
                        <p className="text-sm text-red-600">
                          {fieldApi.state.meta.errors[0]}
                        </p>
                      )}
                    </div>
                  </div>
                );
              }}
            </FormField>
          ))}

          {/* Submit Button */}
          <div className="grid grid-cols-[200px_1fr] gap-4">
            <div></div>
            <button
              type="submit"
              className="
                bg-blue-600 hover:bg-blue-700
                text-white font-semibold
                px-7 py-3.5
                rounded-xl
                shadow-md
                transition-all duration-200
                disabled:bg-gray-400 disabled:cursor-not-allowed
              "
              disabled={form.state.isSubmitting}
            >
              {form.state.isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DynamicForm;
