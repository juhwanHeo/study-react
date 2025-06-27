import { tv } from "tailwind-variants";
import clsx from "clsx";

export const cx = clsx;
const cva = {
  row: tv({
    base: cx(
      "py-2",
      "grid",
      "border-gray-400",
    ),
    variants: {
      type: {
        header: cx("font-bold", "border-b-3"),
        body: "border-b",
      },
      cols: {
        4: "grid-cols-4 gap-4",
      }
    },
    defaultVariants: {
      type: "body",
      cols: 4,
    },
  }),
  cell: tv({
    base: cx("px-2"),
    variants: {
      align: {
        center: "text-center",
        right: "text-right",
        left: "text-left",
      },
      type: {
        full: cx("col-span-full", "grid auto-cols-auto"),
        text: cx("border-r border-gray-400"),
      }
    },
    defaultVariants: {
      align: "center",
      type: "text",
    },
  }),
  button: tv({
    base: cx("cursor-pointer", "flex-auto rounded-full", "border-1"),
    variants: {
      color: {
        blue: "bg-indigo-100 text-blue-600 hover:bg-blue-200 hover:text-blue-800",
        red: "bg-pink-100 text-red-600 hover:bg-pink-200 hover:text-red-800",
      },
    },
    defaultVariants: {
      color: "blue",
    },
  }),
}

export default cva;