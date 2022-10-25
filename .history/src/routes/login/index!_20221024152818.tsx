import { component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";

export const onPost: RequestHandler<unknown> = async ({
  request,
  response,
}) => {
  const data = await request.formData();
  if (data.get("username") === data.get("password")) {
    response.headers.set("cookie", "username=" + data.get("username"));
  }
};

export default component$(() => {
  return (
    <form action="/login" method="post">
      <label>Username</label>
      <input type="text" name="username" />
      <label>Password</label>
      <input type="password" name="password" />
      <input type="submit" />
    </form>
  );
});
