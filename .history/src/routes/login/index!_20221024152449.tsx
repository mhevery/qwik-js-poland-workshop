import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <form>
      <label>Username</label>
      <input type="text" name="username" />
      <label>Password</label>
      <input type="password" name="password" />
    </form>
  );
});
