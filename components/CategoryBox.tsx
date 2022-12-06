import React from "react";
import { TagIcon } from "@heroicons/react/24/outline";

type Props = {
  category: Category;
};

const CategoryBox = ({ category }: Props) => {
  return (
    <div className="flex items-center space-x-2 px-3 py-2 bg-zinc-200 dark:bg-zinc-600 rounded-full w-fit">
      <TagIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      <h4 className="text-sm sm:text-md">{category.name}</h4>
    </div>
  );
};

export default CategoryBox;
