import { redirect } from "next/navigation";


export async function resetPassword(token: string, newPassword: string) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Reset password with token: ", token);
    console.log("New password: ", newPassword);
    redirect("/auth/login")
}