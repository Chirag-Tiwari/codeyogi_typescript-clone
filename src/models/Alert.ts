export type alert = {
  message: string;
  type?: "success" | "error" | "warning";
  timeOut?: number;
  id?: string;
};
