import React from "react";
import { SearchFormProps } from "../types/types";
import { InputWithLabel } from "../components/InputWithLabel";

export const SearchForm = ({
  searchTerm,
  onSearchInput,
  onSearchSubmit,
}: SearchFormProps) => {
  return (
    <form onSubmit={onSearchSubmit} className="flex items-center">
      <InputWithLabel
        id="search"
        // label="Search"
        value={searchTerm}
        isFocused
        onInputChange={onSearchInput}
      >
        Search:
      </InputWithLabel>

      <button
        type="submit"
        className="px-2 py-1 ml-2 border rounded-md hover:bg-green-300 border-slate-500"
        disabled={!searchTerm}
      >
        Submit
      </button>
    </form>
  );
};
