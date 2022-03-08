import React, { Fragment, useState } from "react";

// imports for 3rd party libraries
import { useHistory } from "react-router-dom";

// imports for routes
import * as routeConstants from "../../../routes/routeConstants";

// imports for MUI components
import { MuiPrimarySearchAppBar } from "../../../components/MUI/MuiPrimarySearchAppBar";

// imports for components from MUI library
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import Button from "@material-ui/core/Button";

// imports for custom components
import { Footer } from "../../../components/UI/Footer";

// imports for custom hooks
import { useForm } from "../../../hooks";
import validateCourseForm from "../validateProductForm";
import useLoader from "../../../hooks/useLoader";
import useNotification from "../../../hooks/useNotification";

// imports for styles
import classes from "../Course.module.css";
import { useStyles } from "../../../styles/formStyles";

// imports for APIs
import * as coursesApi from "../../../api/productApi";

const AddPage = () => {
  // merging all styles imported
  const cssClasses = { ...classes, ...useStyles() };

  const history = useHistory();
  const { loader, isLoading, showLoader, hideLoader  } = useLoader();
  const { notification, showNotification } = useNotification();

  const initialFormValues = {
    // the keys are similar to `name` attribute provided to form controls
    name: "",
    description: "",
    category: "",
    manufacturer: "",
    productID: "",
    available: "",
    priceInRupees: "",
    priceAfterDiscount: "",
    popularity: "",
    imageURL: "",
    videoURL: "",
  };

  const navigateToListPage = () => {
    history.push({
      pathname: routeConstants.ROUTE_URL.PRODUCT_LIST,
    });
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialFormValues,
    validateProductForm,
    navigateToListPage,
    false // determining if values of form control should be cleared
  );

  const {
    name,
    description,
    category,
    manufacturer,
    productID,
    available,
    priceInRupees,
    priceAfterDiscount,
    popularity,
    imageURL,
    videoURL,
  } = values;

  const [isPublishedFilterOn, setIsPublishedFilterOn] = useState(false);

  const handlePublishedFilterChange = (event) => {
    setIsPublishedFilterOn(event.target.checked);
  };

  const onProductAddHandler = () => {
    values.published = isPublishedFilterOn;
    showLoader();
    productApi.addProduct(
      values,
      //success callback
      (response) => {
        showNotification("Product added successfully");
        hideLoader();
        values = "";
      },
      //failure callback callback
      (error, errorMessage) => {
        showNotification(errorMessage)
        hideLoader();
      }
    )
  }

  return (
    <div className={cssClasses.productPage}>
      {/* Header */}
      <MuiPrimarySearchAppBar isLogoClickable={true} isProfileVisible={true} />

      {/* Main Content */}
      <main className={cssClasses.productPageContent}>
        {isLoading ? (
          loader
        ) : (
          <Fragment>
            <Button
              variant="contained"
              className={classes.backButton}
              onClick={navigateToListPage}
            >
              Go Back
            </Button>
            <Typography
              variant="inherit"
              component="h3"
              color="secondary"
              className={cssClasses.productPageHeading}
            >
              Add Product
            </Typography>
            <form
              id="addProductForm"
              noValidate
              autoComplete="off"
              className={cssClasses.productForm}
            >
              <FormControl variant="filled">
                <InputLabel htmlFor="title" color="secondary">
                  Name
                </InputLabel>
                <FilledInput
                  id="name"
                  name="name"
                  type="text"
                  value={title}
                  onChange={handleChange}
                  autoComplete="on"
                  color="secondary"
                />
                {errors.name && (
                  <div className={cssClasses.error}>{errors.name}</div>
                )}
              </FormControl>
              <TextField
                id="description"
                name="description"
                multiline
                rows={4}
                label="Description"
                value={description}
                onChange={handleChange}
                autoComplete="on"
                color="secondary"
                variant="filled"
              />
              {errors.description && (
                <div className={cssClasses.error}>{errors.description}</div>
              )}
              <div className={cssClasses.controlsGroup}>
                <FormControl variant="filled">
                  <InputLabel htmlFor="category" color="secondary">
                    Category
                  </InputLabel>
                  <FilledInput
                    id="category"
                    name="category"
                    type="text"
                    value={category}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.category && (
                    <div className={cssClasses.error}>{errors.category}</div>
                  )}
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel htmlFor="author" color="secondary">
                    Name
                  </InputLabel>
                  <FilledInput
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.name && (
                    <div className={cssClasses.error}>{errors.name}</div>
                  )}
                </FormControl>
              </div>
              <FormControl variant="filled">
                <InputLabel htmlFor="ProductID" color="secondary">
                  Skills
                </InputLabel>
                <FilledInput
                  id="productid"
                  name="productid"
                  type="text"
                  value={skills}
                  onChange={handleChange}
                  autoComplete="on"
                  color="secondary"
                />
                {errors.productid && (
                  <div className={cssClasses.error}>{errors.productid}</div>
                )}
              </FormControl>
              <FormControl variant="filled">
                <InputLabel htmlFor="chapters" color="secondary">
                  Available
                </InputLabel>
                <FilledInput
                  id="avail"
                  name="avail"
                  type="text"
                  value={chapters}
                  onChange={handleChange}
                  autoComplete="on"
                  color="secondary"
                />
                {errors.avail && (
                  <div className={cssClasses.error}>{errors.avail}</div>
                )}
              </FormControl>
              <div className={classes.controlsGroup}>
                <FormControl variant="filled">
                  <InputLabel htmlFor="priceInRupees" color="secondary">
                    Price before discount (INR)
                  </InputLabel>
                  <FilledInput
                    id="priceInRupees"
                    name="priceInRupees"
                    type="text"
                    value={priceInRupees}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.priceInRupees && (
                    <div className={cssClasses.error}>
                      {errors.priceInRupees}
                    </div>
                  )}
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel htmlFor="priceAfterDiscount" color="secondary">
                    Price after discount (INR)
                  </InputLabel>
                  <FilledInput
                    id="priceAfterDiscount"
                    name="priceAfterDiscount"
                    type="text"
                    value={priceAfterDiscount}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.priceAfterDiscount && (
                    <div className={cssClasses.error}>
                      {errors.priceAfterDiscount}
                    </div>
                  )}
                </FormControl>
              </div>
              <div className={classes.controlsGroup}>
                <FormControl variant="filled">
                  <InputLabel htmlFor="duration" color="secondary">
                    Warranty (years.)
                  </InputLabel>
                  <FilledInput
                    id="war"
                    name="war"
                    type="text"
                    value={warranty}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.war && (
                    <div className={cssClasses.error}>{errors.war}</div>
                  )}
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel htmlFor="popularity" color="secondary">
                    Popularity
                  </InputLabel>
                  <FilledInput
                    id="popularity"
                    name="popularity"
                    type="text"
                    value={popularity}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.popularity && (
                    <div className={cssClasses.error}>{errors.popularity}</div>
                  )}
                </FormControl>
              </div>
              <div className={classes.controlsGroup}>
                <FormControl variant="filled">
                  <InputLabel htmlFor="imageURL" color="secondary">
                    Image URL
                  </InputLabel>
                  <FilledInput
                    id="imageURL"
                    name="imageURL"
                    type="text"
                    value={imageURL}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.imageURL && (
                    <div className={cssClasses.error}>{errors.imageURL}</div>
                  )}
                </FormControl>
                <FormControl variant="filled">
                  <InputLabel htmlFor="videoURL" color="secondary">
                    Video URL
                  </InputLabel>
                  <FilledInput
                    id="videoURL"
                    name="videoURL"
                    type="text"
                    value={videoURL}
                    onChange={handleChange}
                    autoComplete="on"
                    color="secondary"
                  />
                  {errors.videoURL && (
                    <div className={cssClasses.error}>{errors.videoURL}</div>
                  )}
                </FormControl>
              </div>
              <FormControlLabel
                control={
                  <Switch
                    id="published"
                    name="published"
                    checked={isPublishedFilterOn}
                    value={isPublishedFilterOn}
                    onChange={handlePublishedFilterChange}
                    color="secondary"
                  />
                }
                label="Published"
              />

              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={`${cssClasses.courseButton} ${cssClasses.formButton}`}
                onClick={onCourseAddHandler}
              >
                Add
              </Button>
            </form>
          </Fragment>
        )}
        {notification}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AddPage;
