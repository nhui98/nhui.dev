import { z } from "zod";

const schema = z.object({
  SITE_URL: z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof schema> {}
  }
}

(function init() {
  const result = schema.safeParse(process.env);

  if (!result.success) {
    console.error(
      "Invalid environmaent variables:",
      result.error.flatten().fieldErrors,
    );

    throw new Error("Invalid environment variables");
  }

  console.log("Environment variables are valid and ready to go!");
})();
