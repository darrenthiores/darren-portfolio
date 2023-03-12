const container = {
  hidden: { opacity: 0, y: -20 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default container;

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
