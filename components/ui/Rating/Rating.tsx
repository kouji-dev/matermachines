import { FC, memo, useState } from "react";
import { Star } from "@components/icons";
import cn from "classnames";
import rangeMap from "@utils/range-map";

export interface RatingProps {
  value: number;
  onRate: (rating: number) => void;
}

const Quantity: FC<RatingProps> = ({ value = 5, onRate }) => {
  const [hoveredRate, setRate] = useState(-1);

  const onEnter = (i: number) => {
    setRate(i);
  };

  const onLeave = () => {
    setRate(-1);
  };

  return (
    <div className="flex flex-row items-center py-6 text-yellow-300">
      {rangeMap(5, (i) => (
        <span
          key={`star_${i}`}
          className={cn("inline-block ml-1 cursor-pointer", {
            "hover:text-yellow-400": i <= hoveredRate,
            "text-gray-200":
              hoveredRate === -1 ? i >= Math.floor(value) : i >= hoveredRate,
          })}
          onClick={() => onRate(i)}
          onMouseEnter={() => onEnter(i)}
          onMouseLeave={() => onLeave()}
        >
          <Star />
        </span>
      ))}
      <span className="text-black font-bold mx-2">{value}</span>
    </div>
  );
};

export default memo(Quantity);
