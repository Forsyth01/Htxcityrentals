// ===== src/utils/navigation.js =====
export const Anchor = ({ to }) => {
  const handle = (e) => {
    e.preventDefault();
    document.querySelector(to)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return handle;
};