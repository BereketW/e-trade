export default function user() {
  async function getUsername() {
    try {
      const user = await getMe();
      username = !user.error ? user.name : "";
      return username;
    } catch (error) {
      return { error };
    }
  }
  getUsername();
}
