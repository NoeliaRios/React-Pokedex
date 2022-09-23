import "./style.scss";
import Loading from "../../images/slowpoke-loading.gif";
import Box from "@material-ui/core/Box";


function LoadingPage() {
    return (
      <>
            <Box className="loadingBox" height="100vh" >
                <Box className="loadingWrapper">
          <img src={Loading} alt="" className="loading-img" />

                </Box>
        </Box>
      </>
    );
}

export default LoadingPage;