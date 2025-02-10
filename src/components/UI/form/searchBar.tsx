"use client";

import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  useForm,
  UseFormStateReturn,
} from "react-hook-form";
import { z } from "zod";
import { searchFormSchema } from "./schema/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../form";
import { Input } from "../input";
import { Button } from "../button";
import { SearchIcon } from "lucide-react";

export default function SearchBar() {
  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: { search: "" },
  });

  function onSubmit(values: z.infer<typeof searchFormSchema>) {
    // do something with search form input
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-1 w-auto"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl className="ring-0 focus-visible:ring-0 lg:w-52">
                  <Input placeholder="search by order..." {...field} />
                </FormControl>
                {/* <FormMessage /> */}
              </FormItem>
            );
          }}
        />
        <Button
          type="submit"
          className="shadow-none border-0 bg-transparent hover:none hover:border-0 hover:bg-slate-100"
        >
          <SearchIcon type="submit" className="text-gray-600 hover:shadow-md" />
        </Button>
      </form>
    </Form>
  );
}
