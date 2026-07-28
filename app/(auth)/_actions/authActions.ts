"use server";
export const loginAction = async (formData: FormData) => {
  console.log(formData);
  const email = formData.get("email");
  const password = formData.get("password");
};
