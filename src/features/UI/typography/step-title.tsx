import classNames from "classnames";
import { JSX } from "react";

export const StepTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <div
      className={classNames([
        "text-3xl my-8 font-heavy text-center",
        className,
      ])}
    >
      <div>{children}</div>
    </div>
  );
};
