import { productsActions } from "./productsSlice";

export const getAllProducts = async (dispatch, productsError) => {
  try {
    dispatch(productsActions.productsLoading());
    const response = await fetch("https://course-api.com/react-store-products");
    if (!response.ok) throw new Error("Problem Getting Data");
    const data = await response.json();
    dispatch(productsActions.productsLoading());
    if (productsError) dispatch(productsActions.productsError());

    dispatch(
      productsActions.getAllProducts({
        products: data,
      })
    );
  } catch (err) {
    dispatch(productsActions.productsLoading());
    dispatch(productsActions.productsError());
  }
};
