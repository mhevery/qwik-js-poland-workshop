import { component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";

export const onPost: RequestHandler<unknown> = ({ request, response }) => {
  console.log(request.formData());
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
