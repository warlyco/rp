import classNames from "classnames";
import { JSX } from "react";

export const StepSubtitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element => {
  return (
    <div className={classNames(["text-xl mb-8 -mt-4", className])}>
      <div>{children}</div>
    </div>
  );
};
