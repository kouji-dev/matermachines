import { FC } from "react";

export const Loading: FC<{}> = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="
          loader
          ease-linear
          rounded-full
          border-4 border-t-4 border-gray-200
          h-7
          w-7
        "
      ></div>
    </div>
  );
};
