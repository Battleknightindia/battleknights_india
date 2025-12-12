import { redirect } from "next/navigation";


export async function forgotPassword(email: string) {
    console.log("Forgot password for email: ", email);
    redirect("/auth/reset-password/757848")
}