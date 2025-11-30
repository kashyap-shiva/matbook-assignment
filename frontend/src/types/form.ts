export interface FieldValidation {
  minLength?: number;
  maxLength?: number;
  regex?: string;
  min?: number;
  max?: number;
  minDate?: string;
  minSelected?: number;
  maxSelected?: number;
}

export type FieldType = "text" | "number" | "select" | "multi-select" | "date" | "textarea" | "switch";

export interface Field {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
  validations?: FieldValidation;
}

export interface FormSchema {
  title: string;
  description: string;
  fields: Field[];
}

export interface Submission {
  id: string;
  createdAt: string;
  [key: string]: any;
}
