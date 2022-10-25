import { component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";

export const onPost: RequestHandler<unknown> = async ({
  request,
  response,
}) => {
  const data = await request.formData();
  if (data.get("username") === data.get("password")) {
    console.log("LOGIN success");
    response.headers.set("set-cookie", "username=" + data.get("username"));
    return {};
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
