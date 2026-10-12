import React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { getEnv } from "@/helpers/getEnv";
import { showToast } from "@/helpers/showToast";
import slugify from "slugify";
import { useNavigate } from "react-router-dom";
import { RouteBlogDetails } from "@/helpers/RouteName";
import { useFetch } from "@/hooks/useFetch";
import Dropzone from "react-dropzone";
import Editor from "@/components/Editor";

const AddBlog = () => {
  const [filePreview, setFilePreview] = useState();
  const [file, setFile] = useState();
  const {
    data: categoryData,
    loading,
    error,
  } = useFetch(`${getEnv("VITE_API_BASE_URL")}/category/all-categories`, {
    method: "get",
    credentials: "include",
  });

  const navigate = useNavigate();
  const formSchema = z.object({
    category: z.string().min(3, "Category is required."),
    title: z.string().min(3, "Title must be at least 3 character long."),
    slug: z.string().min(3, "Slug must be at least 3 character long."),
    blogContent: z.string().min(3, "Blog content is required."),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      title: "",
      slug: "",
      blogContent: "",
    },
  });

  const blogTitle = form.watch("title");

  useEffect(() => {
    if (blogTitle) {
      const slug = slugify(blogTitle, { lower: true });
      form.setValue("slug", slug);
    }
  }, [blogTitle]);

  const handleEditorData = (event, editor) => {};

  async function onSubmit(values) {
    // try {
    //   const response = await fetch(
    //     `${getEnv("VITE_API_BASE_URL")}/category/add`,
    //     {
    //       method: "post",
    //       headers: { "Content-type": "application/json" },
    //       body: JSON.stringify(values),
    //     },
    //   );
    //   const data = await response.json();
    //   if (!response.ok) {
    //     return showToast("error", data.message);
    //   }
    //   form.reset();
    //   navigate(RouteBlogDetails);
    //   showToast("success", data.message);
    // } catch (error) {
    //   showToast("error", error.message);
    // }
  }

  const handleFileSelection = (files) => {
    const file = files[0];
    const preview = URL.createObjectURL(file);
    setFile(file);
    setFilePreview(preview);
  };

  return (
    <div>
      <Card className="pt-5">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="mb-3">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categoryData &&
                              categoryData.categories.length > 0 &&
                              categoryData.categories.map((category) => (
                                <SelectItem
                                  key={category._id}
                                  value={category._id}
                                >
                                  {category.name}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-3">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter the blog title"
                          {...field}
                          className="border-input rounded-md text-sm px-4"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-3">
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title Slug</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Title slug"
                          {...field}
                          className="border-input rounded-md text-sm px-4"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-3">
                <span className="mb-2 block">Featured Image</span>
                <Dropzone
                  onDrop={(acceptedFiles) => handleFileSelection(acceptedFiles)}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div className="flex items-center justify-center w-36 h-28 border-2 border-dashed rounded">
                        <img src={filePreview} alt="Preview" />
                      </div>
                    </div>
                  )}
                </Dropzone>
              </div>
              <div className="mb-3">
                <FormField
                  control={form.control}
                  name="blogContent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Blog Content</FormLabel>
                      <FormControl>
                        <Editor
                          props={{
                            initialData: "",
                            onChange: handleEditorData,
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full">
                Create
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBlog;
