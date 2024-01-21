import GitHub from "../services/GitHub";

export default defineEventHandler(async (event) => {
  // get the GitHub code from the query parameters
  const query = getQuery(event);
  const { code } = query;

  // missing code
  if (!code)
    throw createError({ statusCode: 400, statusMessage: "Missing code" });

  // get access token
  let access_token = await GitHub.getAccessToken(code);
  console.log({ access_token });
  // get user
  let user = await GitHub.getAuthUser(access_token);
  console.log(user);
  // get public repos
  let repos = await GitHub.getPublicRepositories({
    username: user.login,
    access_token,
  });
  console.log(repos);

  return { user, repos };
});
