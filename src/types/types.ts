export interface IStory {
  list: any;
  page: any;
  objectID: number;
  title: string;
  url: string;
  author: string;
  num_comments: number;
  points: number;
}

export interface IState {
  data: IStory[];
  isLoading: boolean;
  isError: boolean;
}

export type SearchFormProps = {
  searchTerm: string;
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export enum ActionType {
  STORIES_FETCH_INIT = "STORIES_FETCH_INIT",
  STORIES_FETCH_SUCCESS = "STORIES_FETCH_SUCCESS",
  STORIES_FETCH_FAILURE = "STORIES_FETCH_FAILURE",
  // SET_STORIES = "SET_STORIES",
  REMOVE_STORY = "REMOVE_STORY",
}

export interface ISetData {
  type: ActionType;
  payload: IStory;
}

export type Stories = Array<IStory>;

export type ListProps = {
  list: Stories;
  onRemoveItem: (item: IStory) => void;
};

export type ItemProps = {
  item: IStory;
  onRemoveItem: (item: IStory) => void;
};

export interface ISort {
  sortKey: string;
  isReverse: boolean;
}

export type InputWithLabelProps = {
  id: string;
  label?: string;
  value: string;
  type?: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused?: boolean;
  children?: React.ReactNode;
};
