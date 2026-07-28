/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
type LoginState = {
  success: true;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (
  prevState: LoginState,
  formData: FormData,
): Promise<any> => {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const cookieStore = await cookies();

    const response = await axios.post(
      `${process.env.BACKEND_API_URL}/api/auth/login`,
      { email, password },
    );

    const { success } = response.data;
    const { accessToken, refreshToken } = response.data.data;

    if (success) {
      // 3. Set the access token cookie
      cookieStore.set({
        name: "accessToken",
        value: accessToken,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 15, // e.g., 15 minutes
        sameSite: "lax",
      });

      // 4. Set the refresh token cookie
      if (refreshToken) {
        cookieStore.set({
          name: "refreshToken",
          value: refreshToken,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          path: "/",
          maxAge: 60 * 60 * 24 * 7, // e.g., 7 days
          sameSite: "lax",
        });
      }
      // 5. Redirect
      redirect("/dashboard");
    }
  } catch (error: any) {
    // Handle error appropriately (e.g., return error message to the client)
    console.error("Login failed:", error.response?.data || error.message);
    // throw new Error(error.response?.data?.message || "Failed to login");
  }
};
