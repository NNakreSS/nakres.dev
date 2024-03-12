import classNames from "classnames";

// navbar butonlarının classları
export const navButtonClass = ({ isActive }: { isActive: boolean }) =>
  classNames(
    "bg-card/30 lg:bg-card/0 p-2 text-center font-semibold transition duration-300 w-full",
    {
      "text-warning border-b-2 border-warning": isActive,
    }
  );
