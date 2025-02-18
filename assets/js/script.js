// Sample Booking Data
const bookings = [
    { id: 1, customerName: 'John Doe', service: 'Massage', dateTime: '2025-02-17 10:00', status: 'pending' },
    { id: 2, customerName: 'Jane Smith', service: 'Facial', dateTime: '2025-02-17 12:00', status: 'active' },
    { id: 3, customerName: 'Tom Brown', service: 'Haircut', dateTime: '2025-02-17 14:00', status: 'completed' },
    { id: 4, customerName: 'Emily White', service: 'Nail Care', dateTime: '2025-02-17 16:00', status: 'cancelled' }
];

// Function to show different bookings
function showBookings(type) {
    const tableBody = document.getElementById('booking-table');
    tableBody.innerHTML = ''; // Clear the table

    // Remove 'active' class from all buttons and add to the clicked one
    document.querySelectorAll(".btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    const filteredBookings = bookings.filter(booking => {
        if (type === 'total') return true;
        return booking.status === type;
    });

    filteredBookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.id}</td>
            <td>${booking.customerName}</td>
            <td>${booking.service}</td>
            <td>${booking.dateTime}</td>
            <td><span class="status-${booking.status}">${booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}</span></td>
            <td>
                <button class="btn btn-dark btn-sm">Accept</button>
                <button class="btn btn-light btn-sm">Reject</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Load total bookings on page load
document.addEventListener('DOMContentLoaded', () => {
    showBookings('total');
});
