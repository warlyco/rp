import classNames from "classnames";
import { JSX } from "react";

export const StepHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <div className={classNames(["text-2xl", className])}>
      <div>{children}</div>
    </div>
  );
};
