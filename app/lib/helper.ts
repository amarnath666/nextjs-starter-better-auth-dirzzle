export const getUserInitials = (name: string | null): string => {
  if (!name) return "U";
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);
};
