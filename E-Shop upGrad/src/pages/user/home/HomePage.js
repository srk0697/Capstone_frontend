import React, { useState, useEffect } from "react";

// imports for 3rd party libraries
import { useHistory } from "react-router";

// imports for routes
import { routeUtils } from "../../../routes";

// imports for utils
import * as constants from "../../../utils/constants";

// imports for components from Material UI library
import Typography from "@material-ui/core/Typography";

// imports for MUI components
import { MuiPrimarySearchAppBar } from "../../../components/MUI/MuiPrimarySearchAppBar";
import { EnhancedSingleLineGridList } from "../../../components/MUI/MuiSingleLineGridList";
import { MuiCard } from "../../../components/MUI/MuiCard";

// imports for custom components
import { Footer } from "../../../components/UI/Footer";

// imports for custom hooks
import useLoader from "../../../hooks/useLoader";
import useNotification from "../../../hooks/useNotification";

// imports for APIs
import * as coursesApi from "../../../api/productApi";

// imports for styles
import classes from "./HomePage.module.css";

const HomePage = () => {
  const history = useHistory();
  const { loader, isLoading, showLoader, hideLoader } = useLoader();
  const { notification, showNotification } = useNotification();

  const [newProductList, setNewCoursesList] = useState([]);
  const [productList, setCoursesList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const handleNameSearch = (name) => {
   
  };

  const handleCategorySearch = (category) => {
    
  };

  const showProductDetailsPage = (productId) => {
    history.push(routeUtils.getDetailsPageRouteUrl(productId)); 
  };

  useEffect(() => {
    

  }, []);

  useEffect(() => {
     
     productApi.getAllProduct(
       (response)=>{
         //console.log(response);
         setProductList(response.data.product);
       },
       (error,errorMessage)=>{

       }
       )
  }, []);

  return (
    <div className={classes.homePage}>
      {/* Header */}
      <MuiPrimarySearchAppBar
        isSearchVisible={true}
        isCategoriesVisible={true}
        isProfileVisible={true}
        handleTitleSearch={handleTitleSearch}
        handleCategorySearch={handleCategorySearch}
        categoryList={categoryList}
      />
      {isLoading ? (
        <section className={classes.loaderContainer}>{loader}</section>
      ) : (
        <main className={classes.homePageContent}>
          {/* New Courses */}
          <section>
            <div className={classes.titleBar}>
              <h4>New Product</h4>
            </div>
            {newCoursesList.length > 0 ? (
              <EnhancedSingleLineGridList
                data={newCoursesList}
                handleClick={(course) => showProductDetailsPage(product._id)}
              />
            ) : (
              <Typography
                variant="inherit"
                component="h4"
                className={classes.noCourseFoundText}
              >
                No new Product
              </Typography>
            )}
          </section>

          {/* Course Cards */}
          {coursesList.length > 0 ? (
            <section className={classes.courseCardsContainer}>
              {coursesList.map((course) => (
                <MuiCard
                  key={course._id}
                  data={course}
                  handleClick={() => showCourseDetailsPage(course._id)}
                />
              ))}
            </section>
          ) : (
            <Typography
              variant="inherit"
              component="h4"
              className={classes.noCourseFoundText}
            >
              No product found
            </Typography>
          )}
          {notification}
        </main>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
