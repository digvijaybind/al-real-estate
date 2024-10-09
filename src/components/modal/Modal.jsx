import React, {useState} from "react";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger to open the modal */}
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Your Details
      </button>

      {/* Modal content */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">DAMAC</h2>
            <img
              src="path/to/your/image.jpg"
              alt="DAMAC Logo"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <form className="space-y-4">
              <label htmlFor="name" className="block text-gray-700">
                Your name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />

              {/* ... other input fields */}

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
            {/* Icons */}
            <div className="flex space-x-4 mt-4">
              <div className="flex flex-col items-center">
                <img
                  src="path/to/icon1.png"
                  alt="Icon 1"
                  className="w-12 h-12"
                />
                <p className="text-gray-700 mt-2">All Available Floor Plans</p>
              </div>
              {/* ... other icons */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
