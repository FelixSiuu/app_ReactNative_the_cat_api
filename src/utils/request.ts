import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "live_7bdLCN9mAkvssXwjjqiM4654LBHOLhiwuEDyaqZNMUrsqyS88OA6jC0MlNFwGGRE";
// axios.defaults.headers.common["x-api-key"] =
//   "e0c1cfae-90bc-4889-ba62-a4e0d629ff72";

// Ask for 1 Image, at full resolution
export const request_getImg = () => {
  return axios.get("https://api.thecatapi.com/v1/images/search", {
    params: {
      limit: 1,
      size: "full"
    }
  });
};

// voting img
export const request_vote = (payload: {
  image_id: string;
  sub_id: string;
  value: number;
}) => {
  return axios.post("https://api.thecatapi.com/v1/votes", payload);
};

// save an favourite image
export const request_fav = (payload: { image_id: string; sub_id: string }) => {
  return axios.post("https://api.thecatapi.com/v1/favourites", payload);
};

// delete an favourte image
export const request_unFav = ({ favourite_id }: { favourite_id: number }) => {
  return axios.delete(
    `https://api.thecatapi.com/v1/favourites/${favourite_id}`
  );
};

// get fav list
export const request_getFavList = (params: {
  sub_id: string;
  limit?: number;
}) => {
  return axios.get("https://api.thecatapi.com/v1/favourites", {
    params: {
      ...params,
      order: "DESC"
    }
  });
};

// get breeds list
export const request_getBreedsList = () => {
  return axios.get(`https://api.thecatapi.com/v1/breeds`);
};

// get breed info
export const request_getBreedInfo = (params: { breed_id: string | number }) => {
  return axios.get(`https://api.thecatapi.com/v1/images/search`, {
    params: {
      ...params
    }
  });
};

// get categories list
export const request_getCategoriesList = () => {
  return axios.get("https://api.thecatapi.com/v1/categories");
};

// get filter images
export const request_getFilterImages = (params: {
  breed_id: string;
  category_ids: string;
  mime_types: string;
  limit: string;
}) => {
  return axios.get("https://api.thecatapi.com/v1/images/search", {
    params: {
      ...params
    }
  });
};
