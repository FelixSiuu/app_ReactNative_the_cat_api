import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "live_7bdLCN9mAkvssXwjjqiM4654LBHOLhiwuEDyaqZNMUrsqyS88OA6jC0MlNFwGGRE";

// Ask for 1 Image, at full resolution
export const getImgRequest = () => {
  return axios.get("https://api.thecatapi.com/v1/images/search", {
    params: {
      limit: 1,
      size: "full"
    }
  });
};

// voting img
export const voteRequest = (payload: {
  image_id: string;
  sub_id: string;
  value: number;
}) => {
  return axios.post("https://api.thecatapi.com/v1/votes", payload);
};

// save an favourite image
export const favRequest = (payload: { image_id: string; sub_id: string }) => {
  return axios.post("https://api.thecatapi.com/v1/favourites", payload);
};

// delete an favourte image
export const unFavRequest = ({ favourite_id }: { favourite_id: string }) => {
  return axios.delete(
    `https://api.thecatapi.com/v1/favourites/${favourite_id}`
  );
};

// get fav list
export const getFavListRequest = (params: {
  sub_id: string;
  limit: number;
}) => {
  return axios.get("https://api.thecatapi.com/v1/favourites", {
    params: {
      ...params
    }
  });
};

// get breeds list
export const getBreedsListRequest = () => {
  return axios.get(`https://api.thecatapi.com/v1/breeds`);
};

// get breed info
export const getBreedInfoRequest = (params: { id: string | number }) => {
  return axios.get(`https://api.thecatapi.com/v1/images/search`, {
    params: {
      ...params
    }
  });
};

// get categories list
export const getCategoriesListRequest = () => {
  return axios.get("https://api.thecatapi.com/v1/categories");
};

// get filter images
export const getFilterImagesRequest = (params: {
  breed_id: string;
  category_ids: string;
  mime_types: string;
  limit: number;
}) => {
  return axios.get("https://api.thecatapi.com/v1/images/search", {
    params: {
      ...params
    }
  });
};
