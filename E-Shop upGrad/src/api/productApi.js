// imports for utils
import { utilsApi, apiConstants } from "./utils-api";
// imports for utils
import * as utils from "../utils";

/**
 * Function to search for a course
 * @param {String} title - substring which needs to be searched in course title
 * @param {Function} successCallback - callback method to be called when API succeeds
 * @param {Function} failureCallback - callback method to be called when API fails
 * @returns {Array} array of courses whose title contains the given substring (each course is an object consisting of course details)
 */

export async function searchCourseByTitle(
  title,
  successCallback,
  failureCallback
) {
  try {
    await utilsApi.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.COURSES_API_ROUTE.TUTORIALS,
      null,
      { title: title },
      null,
      null,
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

/**
 * Function to get all courses within a given category
 * @param {String} category - category string corresponding to which courses are to be fetched
 * @param {Function} successCallback - callback method to be called when API succeeds
 * @param {Function} failureCallback - callback method to be called when API fails
 * @returns {Array} array of courses which belong to the given category (each course is an object consisting of course details)
 */
export async function getCoursesByCategory(
  category,
  successCallback,
  failureCallback
) {
  try {
    await utilsApi.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.COURSES_API_ROUTE.GET_CATEGORY,
      [category],
      null,
      null,
      null,
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

/**
 * Function to get all courses (published as well as non-published)
 * @param {Function} successCallback - callback method to be called when API succeeds
 * @param {Function} failureCallback - callback method to be called when API fails
 * @returns {Array} array of all courses in the database (each course is an object consisting of course details)
 */
export async function getAllProducts(successCallback, failureCallback) {
  try {
    await utilsApi.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.COURSES_API_ROUTE.Products,
      null,
      null,
      null,
      null,
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

/**
 * Function to get all published courses
 * @param {Function} successCallback - callback method to be called when API succeeds
 * @param {Function} failureCallback - callback method to be called when API fails
 * @returns {Array} array of all published courses in the database (each course is an object consisting of course details)
 */
export async function getAllCategoryProduct(successCallback, failureCallback) {
  try {
    await utilsApi.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.COURSES_API_ROUTE.TUTORIALS,
      [apiConstants.COURSES_API_PATH_PARAMETER.PUBLISHED],
      null,
      null,
      null,
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

/**
 * Function to get course with given id
 * @param {*} productId - id of the course to be fetched
 * @param {*} successCallback - callback method to be called when API succeeds
 * @param {*} failureCallback - callback method to be called when API fails
 * @returns {Object} course with given ID
 */
export async function getProductById(
  courseId,
  successCallback,
  failureCallback
) {
  try {
    await utilsApi.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.COURSES_API_ROUTE.PRODUCTS,
      [courseId],
      null,
      null,
      null,
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

/**
 * Function to delete a course with given id
 * @param {*} productId - id of the course to be deleted
 * @param {*} successCallback - callback method to be called when API succeeds
 * @param {*} failureCallback - callback method to be called when API fails
 */
export async function deleteProduct(productId, successCallback, failureCallback) {
  try {
    await utilsApi.sendApiRequest(
      apiConstants.HTTP_METHOD.DELETE,
      apiConstants.COURSES_API_ROUTE.PRODUCT,
      [productId],
      null,
      null,
      null,
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

export async function addProduct(ProductData, successCallback, failureCallback) {
  try {
    await utilsApi.sendApiRequest(
      apiConstants.HTTP_METHOD.POST,
      apiConstants.COURSES_API_ROUTE.ADD_COURSE,
      null,
      null,
      courseData,
      null,
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

export async function editProduct(productId, productData, successCallback, failureCallback) {
  try {
    await utilsApi.sendApiRequest(
      apiConstants.HTTP_METHOD.PUT,
      apiConstants.COURSES_API_ROUTE.PRODUCT,
      [courseId],
      null,
      courseData,
      null,
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}

export async function getAllCategory(successCallback, failureCallback) {
  try {
    await utilsApi.sendApiRequest(
      apiConstants.HTTP_METHOD.GET,
      apiConstants.COURSES_API_ROUTE.GET_CATEGORY,
      null,
      null,
      null,
      null,
      successCallback,
      failureCallback
    );
  } catch (error) {
    if (failureCallback) {
      failureCallback(error);
    }
  }
}
