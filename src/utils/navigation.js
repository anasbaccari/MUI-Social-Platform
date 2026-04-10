export const toExperience = (actionId, options = {}) => {
  const params = new URLSearchParams();

  if (options.title) {
    params.set("title", options.title);
  }
  if (options.context) {
    params.set("context", options.context);
  }

  const query = params.toString();
  return `/experience/${actionId}${query ? `?${query}` : ""}`;
};
