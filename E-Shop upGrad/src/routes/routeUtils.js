import * as routeConstants from "./routeConstants";

export const getDetailsPageRouteUrl = (productId) => {
  const regex = /:ID/i;
  return routeConstants.ROUTE_URL.DETAILS.replace(regex, productId);
};

export const getEditPageRouteUrl = (productId) => {
  const regex = /:ID/i;
  return routeConstants.ROUTE_URL.EDIT_PRODUCT.replace(regex, productId);
};
