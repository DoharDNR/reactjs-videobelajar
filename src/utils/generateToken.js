export const generateToken = (user) => {
  return btoa(
    JSON.stringify({
      userId: user.id,
      username: user.username,
      time: Date.now(),
    })
  );
};
