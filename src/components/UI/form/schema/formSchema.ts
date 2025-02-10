"use client";

import { z } from "zod";

export const searchFormSchema = z.object({
  search: z
    .string()
    .min(2, { message: "Try with your website name or order id." })
    .max(50),
});
