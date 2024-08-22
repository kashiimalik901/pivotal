/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";

function ProcurementPlanning() {
  return (
    <Card>
      <SoftBox p={2} sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}`,
            backgroundSize: "cover",
          }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} sx={{ position: "relative", ml: "auto" }}>
            <SoftBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="info"
              borderRadius="lg"
              variant="gradient"
              sx={{
                backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                  `${linearGradient(
                    rgba(gradients.dark.main, 0.8),
                    rgba(gradients.dark.state, 0.8)
                  )}`,
                backgroundSize: "cover",
              }}
            >
              <SoftBox
               component="a"
                href="#"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="100%"
              />
              <SoftBox component="img" src={rocketWhite} alt="rocket" width="100%" pt={3} />
            </SoftBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%" component="a" href="#">
              <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
              Procurement planning
              </SoftTypography>
              <SoftBox mb={6}>
                <SoftTypography variant="body2" color="text">
                  Get the
                  <SoftTypography ml={6} variant="body2" color="text">
                    <ul>
                      <li>right goods</li>
                      <li>in the right place</li>
                      <li>at the right time</li>
                    </ul>
                  </SoftTypography>
                </SoftTypography>
              </SoftBox>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                color="text"
                fontWeight="medium"
              >
              </SoftTypography>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default ProcurementPlanning;
