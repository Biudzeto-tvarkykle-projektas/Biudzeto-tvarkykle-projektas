import axiosClient from "./apiClient";

export async function getAllIncomes() {
  const response = await axiosClient.get("/incomes");
  // const response = await axiosClient.get("/");
  return response;
}

export async function addIncome(data) {
  const response = await axiosClient.post("/incomes", JSON.stringify(data));
  return response;
}
