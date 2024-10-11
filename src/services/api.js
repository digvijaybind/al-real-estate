import axios from "axios";
import qs from "qs";

const LEAD_CAPTURE_URL =
  "https://webto.salesforce.com/servlet/servlet.WebToLead";

export const submitLead = async (formData) => {
  try {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    const data = qs.stringify(formData);

    const response = await axios.post(LEAD_CAPTURE_URL, data, {headers});

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
