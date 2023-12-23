export const itemsVariant = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0 },
  }


