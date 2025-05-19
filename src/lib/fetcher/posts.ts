export const getAllPosts = async () => {
  const response = await fetch("http://localhost:3001/api/v1/posts");
  const data = await response.json();
  return data;
};
