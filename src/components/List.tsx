import { useState, memo } from "react";
import { ISort, ListProps, ItemProps } from "../types/types";
import { sortBy } from "lodash";

export const Item = ({ item, onRemoveItem }: ItemProps) => {
  return (
    // <li key={item.objectID} className="whitespace-nowrap">
    <li key={item.objectID} className="flex border-b border-slate-300">
      <a
        className=" hover:text-emerald-400 w-[400px] px-1 mr-2"
        href={item.url}
      >
        {item.title}
        {/* 📰 {item.title} */}
      </a>

      <span className="w-[140px] px-1 mr-2 break-words text-center">
        {item.author}
      </span>
      {/* <span className="w-3/10">🧑 {item.author}</span> */}
      <span className="w-[130px]  px-1 mr-2 text-center">
        📄{item.num_comments}
      </span>
      {/* <span className="w-1/10">📄 {item.num_comments}</span> */}
      <span className="w-[100px]  px-1 mr-2 text-center">➕{item.points}</span>
      {/* <span className="w-1/10">➕ {item.points}</span> */}
      <span className="w-[100px] mr-2 px-0 text-center">
        <button
          className="transition-all duration-100 ease-in hover:bg-white hover:transition-bg hover:duration-150 text-red-400 px-2 border border-red-400 rounded-lg text-sm"
          type="button"
          onClick={() => onRemoveItem(item)}
        >
          Dismiss
        </button>
      </span>
    </li>
  );
};

const SORTS: any = {
  NONE: (list: ItemProps) => list,
  TITLE: (list: ItemProps) => sortBy(list, "title"),
  AUTHOR: (list: ItemProps) => sortBy(list, "author"),
  COMMENT: (list: ItemProps) => sortBy(list, "num_comments").reverse(),
  POINT: (list: ItemProps) => sortBy(list, "points").reverse(),
};

export const List = memo(({ list, onRemoveItem }: ListProps) => {
  const [sort, setSort] = useState<ISort>({
    sortKey: "NONE",
    isReverse: false,
  });

  const handleSort = (sortKey: string) => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;
    setSort({ sortKey, isReverse });
  };

  const sortFunction = SORTS[sort.sortKey];

  // const sortedList = sortFunction(list);
  const sortedList = sort.isReverse
    ? sortFunction(list).reverse()
    : sortFunction(list);

  return (
    // console.log("B:List") || (
    <ul className="inline-block overflow-x-auto">
      <li className="text-nowrap">
        <button
          type="button"
          onClick={() => handleSort("TITLE")}
          className="w-[400px] mr-2 text-center border border-slate-600 rounded-lg bg-slate-200 hover:bg-slate-100 active:translate-y-0.5 mb-2 px-2 py-1 text-lg"
        >
          Title
        </button>
        <button
          type="button"
          onClick={() => handleSort("AUTHOR")}
          className="w-[140px] mr-2 text-center border border-slate-600 rounded-lg bg-slate-200 hover:bg-slate-100 active:translate-y-0.5 mb-2 px-2 py-1 text-lg"
        >
          Author
        </button>
        <button
          type="button"
          onClick={() => handleSort("COMMENT")}
          className="w-[130px] mr-1 text-center border border-slate-600 rounded-lg bg-slate-200 hover:bg-slate-100 active:translate-y-0.5 mb-2 px-2 py-1 text-lg"
        >
          Comments
        </button>
        <span className="">
          <button
            type="button"
            onClick={() => handleSort("POINT")}
            className="w-[100px] mr-1 text-center border border-slate-600 rounded-lg bg-slate-200 hover:bg-slate-100 active:translate-y-0.5 mb-2 px-2 py-1 text-lg"
          >
            Points
          </button>
        </span>
        <span className="inline-block w-[100px] mr-1 text-center border border-slate-600 rounded-lg bg-slate-200 hover:bg-slate-100 active:translate-y-0.5 mb-2 px-2 py-1 text-lg">
          Actions
        </span>
      </li>
      {sortedList.map((item: any) => {
        return (
          <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
        );
      })}
    </ul>
    // );
  );
});
