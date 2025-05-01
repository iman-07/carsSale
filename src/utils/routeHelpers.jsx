export const routeHelpers = (pathname) => {
    const isCarDetailsPage = pathname.startsWith('/car/');
    const isFavoritePage = pathname === '/favorites';
    const isCartPage = pathname === '/cart';
  
    return {
      isCarDetailsPage,
      isFavoritePage,
      isCartPage,
    };
  };
  