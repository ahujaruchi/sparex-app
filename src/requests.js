const API = `https://api.spaceXdata.com/v3/launches?limit=100`;

const requests = {
    firstLoad: `${API}`,
    lanuchYear: `&launch_year=`,
    launchSuccessFilter: `&launch_success=`,
    launchLandFilter: `&land_success=`,
    // allFilterTure: `${API}&launch_success=true&land_success=true&launch_year=`
}

export default requests; 