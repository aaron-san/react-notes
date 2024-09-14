import { IStory } from "../types/types";

export const initialStories: IStory[] = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
    list: "",
    page: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
    list: "",
    page: 0,
  },
];

// export const getAsyncStories1 = () => {
//   Promise.resolve({ data: { stories: initialStories } });
// };

// export const getAsyncStories2 = () => {
//   new Promise((resolve) => {
//     resolve({ data: { stories: initialStories } });
//   });
// };

// Simulate an external API call
// export const getAsyncStories3 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ data: { stories: initialStories } });
//     }, 2000);
//   });
// };

// Simulate an error
export const getAsyncStoriesErr = () => {
  new Promise((resolve, reject) => setTimeout(reject, 2000));
};

// useEffect(() => {
// setIsLoading(true);
// dispatchStories({ type: "STORIES_FETCH_INIT" });

// getAsyncStories()
//   .then((result: any) => {
//     // setStories(result.data.stories);
//     dispatchStories({
//       type: "STORIES_FETCH_SUCCESS",
//       payload: result.data.stories,
//     });
//     // setIsLoading(false);
//   })
// .catch(() => setIsError(true));
// .catch(() => {
//   dispatchStories({ type: "STORIES_FETCH_FAILURE" });
// });
// promise.then((res: any) => setStories(res.data.stories));

// .json() converts from json to JS object!

// }, []);
