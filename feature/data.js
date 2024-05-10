const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showBreadcrumb: true,
    showTreeView: true,
    showTabs : true
  };
  
  function featureFlags() {
    return new Promise((resolve, reject) => {
      if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
      else reject("Some error occured! Please try again");
    });
  }
  
  export default featureFlags;