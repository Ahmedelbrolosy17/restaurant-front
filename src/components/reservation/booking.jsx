import React, { useState } from 'react';
import './booking.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    table: '',
    tableType: 'Normal',
  });
  const [isSubmitted, setIsSubmitted] = useState(0); // State to track form visibility: 0 = show form, 1 = show success message
  const [errors, setErrors] = useState({}); // State to track form errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleTableClick = (table) => {
    setFormData(prevState => ({
      ...prevState,
      table: table
    }));
  };

  // Mock function to simulate server reservation
  const mockApiCall = (reservationData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (reservationData.table) {
          resolve({ success: true, message: 'Reservation made successfully!' });
        } else {
          reject({ success: false, message: 'Please select a table.' });
        }
      }, 1000); // Simulate network delay
    });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (formData.guests < 1 || formData.guests > 10) newErrors.guests = 'Guests must be between 1 and 10';
    if (!formData.table) newErrors.table = 'Table selection is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if there are no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) return;

    // Prepare the data to send
    const reservationData = {
      name: formData.name,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      table: formData.table,
      tableType: formData.tableType,
    };

    try {
      const response = await mockApiCall(reservationData);
      setIsSubmitted(1); // Change state to show success message
      // Reset form
      setFormData({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: 1,
        table: '',
        tableType: 'Normal',
      });
      setErrors({}); // Clear errors on successful submission
    } catch (error) {
      alert(error.message); // Show error message as alert
    }
  };

  const handleMakeAnotherReservation = () => {
    setIsSubmitted(0); // Reset state to show the form again
  };

  const tables = [
    { id: 'A1', type: 'Normal' },
    { id: 'A2', type: 'Normal' },
    { id: 'B1', type: 'VIP' },
    { id: 'B2', type: 'VIP' },
    { id: 'C1', type: 'Outdoor' },
    { id: 'C2', type: 'Outdoor' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {isSubmitted === 1 ? ( // Check if the state is 1 to show success message
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reservation Successful!</h2>
            <p className="mt-2 text-sm">Thank you for choosing us!</p>
            <button
              onClick={handleMakeAnotherReservation}
              className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
              Make Another Reservation
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Make a Reservation</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" required
                    className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                    value={formData.name} onChange={handleChange} />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id="email" required
                    className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                    value={formData.email} onChange={handleChange} />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                  <input type="date" name="date" id="date" required
                    className={`mt-1 block w-full border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                    value={formData.date} onChange={handleChange} />
                  {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                  <input type="time" name="time" id="time" required
                    className={`mt-1 block w-full border ${errors.time ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                    value={formData.time} onChange={handleChange} />
                  {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
                  <input type="number" name="guests" id="guests" min="1" max="10" required
                    className={`mt-1 block w-full border ${errors.guests ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                    value={formData.guests} onChange={handleChange} />
                  {errors.guests && <p className="text-red-500 text-sm">{errors.guests}</p>}
                </div>
                <div>
                  <label htmlFor="tableType" className="block text-sm font-medium text-gray-700">Table Type</label>
                  <select name="tableType" id="tableType" className={`mt-1 block w-full border ${errors.table ? 'border-red-500' : 'border-gray-300'} rounded-md py-2 px-3 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
                    value={formData.tableType} onChange={handleChange}>
                    <option value="Normal">Normal</option>
                    <option value="VIP">VIP</option>
                    <option value="Outdoor">Outdoor</option>
                  </select>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Select a Table:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {tables.map((table) => (
                      <button
                        key={table.id}
                        type="button"
                        onClick={() => handleTableClick(table.id)}
                        className={`p-2 border rounded-lg ${formData.table === table.id ? 'bg-yellow-500 text-white' : 'bg-gray-200'} focus:outline-none focus:ring-2 focus:ring-yellow-500`}>
                        {table.id} ({table.type})
                      </button>
                    ))}
                  </div>
                  {errors.table && <p className="text-red-500 text-sm">{errors.table}</p>}
                </div>
                <div className="mt-6">
                  <button type="submit" className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                    Make Reservation
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
