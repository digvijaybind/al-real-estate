import axios from "axios";
import qs from "qs";

const CORS_PROXY_URL = "https://webto.salesforce.com/servlet/servlet.WebToLead";

export const submitLead = async (formData) => {
  try {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const data = qs.stringify(formData);

    // Send request through the CORS proxy
    const response = await axios.post(CORS_PROXY_URL, data, {headers});

    console.log("Salesforce Response:", response.data);

    if (response.status === 200) {
      return true;
    } else {
      throw new Error(`Error submitting lead: ${response.status}`);
    }
  } catch (error) {
    console.error("Error submitting lead:", error.message);
    throw new Error("Failed to submit lead. Please try again later.");
  }
};
