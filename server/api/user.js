import GitHub from "../services/GitHub";

export default defineEventHandler(async (event) => {
  // get the GitHub code from the query parameters
  const query = getQuery(event);
  const { code } = query;

  // missing code
  if (!code)
    throw createError({ statusCode: 400, statusMessage: "Missing code" });

  let access_token = await GitHub.getAccessToken(code);
  let user = await GitHub.getAuthUser(access_token);
  let repos = await GitHub.getPublicRepositories({
    username: user.login,
    access_token,
  });

  return { user, repos };
});
