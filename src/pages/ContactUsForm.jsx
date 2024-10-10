import React, {useState} from "react";
import {submitEnquiry} from "../services/api"; 

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    FirstName: "TEST",
    LastName: "Name",
    Email: "mustafa.tarig@allegiance.ae",
    Phone: "+971522745591",
    Lead_Message__c: "TESTING THE API MESSAGE",
    Notes__c: "NOTES TO BE TESTED",
    Campaign_Name__c: "API End - Mustafa",
    Marketing_Campaign__c: "true",
    Pipeline__c: "Primary",
    Assignment_Status__c: "Assigned",
    LeadSource: "Whatsapp",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Send form data to API
      await submitEnquiry(formData);
      setSuccess("Your enquiry has been submitted successfully!");
    } catch (err) {
      setError("Failed to submit the enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5">
      <div className="max-w-lg w-full bg-white p-10 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Get in Touch
        </h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-600 text-center mb-4">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="FirstName"
                value={formData.FirstName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="john.doe@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="+123456789"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Lead Message
            </label>
            <textarea
              name="Lead_Message__c"
              value={formData.Lead_Message__c}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your message..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Notes
            </label>
            <textarea
              name="Notes__c"
              value={formData.Notes__c}
              onChange={handleChange}
              rows="2"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Additional notes..."
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Campaign Name
            </label>
            <input
              type="text"
              name="Campaign_Name__c"
              value={formData.Campaign_Name__c}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Campaign Name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Marketing Campaign
            </label>
            <input
              type="text"
              name="Marketing_Campaign__c"
              value={formData.Marketing_Campaign__c}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Marketing Campaign"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Pipeline
            </label>
            <input
              type="text"
              name="Pipeline__c"
              value={formData.Pipeline__c}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Pipeline"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Assignment Status
            </label>
            <input
              type="text"
              name="Assignment_Status__c"
              value={formData.Assignment_Status__c}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Assignment Status"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Lead Source
            </label>
            <input
              type="text"
              name="LeadSource"
              value={formData.LeadSource}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Lead Source"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-all ease-in-out duration-300 focus:ring-4 focus:ring-indigo-500"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
