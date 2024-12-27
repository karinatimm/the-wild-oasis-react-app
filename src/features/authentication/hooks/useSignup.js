import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../../api/apiAuth";
import { toast } from "react-hot-toast";

export const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () =>
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      ),
    onError: (error) =>
      toast.error(error.message || "An error occurred during registration"),
  });

  return { signup, isLoading };
};
