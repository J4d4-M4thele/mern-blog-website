import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FaComments } from "react-icons/fa";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { getEnv } from "@/helpers/getEnv";
import { showToast } from "@/helpers/showToast";
import { Textarea } from "./ui/textarea";

const Comment = () => {
  const formSchema = z.object({
    comment: z.string().min(3, "Comment must be at least 3 character long."),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  async function onSubmit(values) {
    try {
      const response = await fetch(
        `${getEnv("VITE_API_BASE_URL")}/blog/comment`,
        {
          method: "post",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(values),
        },
      );
      const data = await response.json();
      if (!response.ok) {
        return showToast("error", data.message);
      }
      form.reset();
      navigate(RouteCategoryDetails);
      showToast("success", data.message);
    } catch (error) {
      showToast("error", error.message);
    }
  }
  return (
    <div>
      <h4 className="flex items-center gap-2 font-bold">
        <FaComments className="text-violet-500" /> Comment
      </h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="mb-3">
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold">Comment</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type your comment..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">
            Post
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Comment;
