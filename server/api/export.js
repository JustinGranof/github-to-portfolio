import Template from "../services/Template";

export default defineEventHandler(async (event) => {
  let files = await Template.build();

  return { success: true, files };
});
