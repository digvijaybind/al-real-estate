import axios from "axios";

// Define the proxy URL and target API URL
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl = "https://webto.salesforce.com/servlet/servlet.WebToLead";

// Function to submit the enquiry form data
export const submitEnquiry = async (formData) => {
  try {
    // Define the headers to include in the request
    const headers = {
      "Content-Type": "application/json",
      // Add other headers if needed, such as authorization
    };

    // Make the POST request through the CORS proxy
    const response = await axios.post(
      "https://cors-anywhere.herokuapp.com/https://webto.salesforce.com/servlet/servlet.WebToLead",
      formData,
      {
        headers,
      }
    );

    console.log("Response:", response.data); // Log the response data to the console
    return response.data; // Return the response data
  } catch (error) {
    // Enhanced error handling to capture response data and status
    const errorMessage = error.response
      ? `Error: ${error.response.status} - ${error.response.data}`
      : `Error: ${error.message}`;

    console.error("Error submitting enquiry:", errorMessage);
    throw new Error("Failed to submit enquiry. " + errorMessage);
  }
};
