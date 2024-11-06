import { useMutation } from "@tanstack/react-query";
import { postContactForm } from "../../services/apiContact";
import toast from "react-hot-toast";

export function useContact() {
  const { mutate: contactFormFn, isPending: isLoading } = useMutation({
    mutationFn: postContactForm,
    onSuccess: () => {
      toast.success(
        "Thank you for reaching me out. I will reply you as soon as possible."
      );
    },
    onError: () => {
      toast.error("Failed to send message. Please try again later.");
    },
  });
  return { isLoading, contactFormFn };
}
