const bookingsData = {
    todays: [
        { id: "#B001", name: "Sarah Johnson", service: "Full Body Massage", dateTime: "Feb 18, 10:00 AM", status: "pending" },
        { id: "#B002", name: "Sarah Johnson", service: "Hot Stone Massage", dateTime: "Feb 17, 10:40 AM", status: "pending" },
        { id: "#B003", name: "Sarah Johnson", service: "Reflexology", dateTime: "Feb 17, 10:00 AM", status: "pending" },
        { id: "#B004", name: "Sarah Johnson", service: "Full Body Massage", dateTime: "Feb 17, 9:42 PM", status: "pending" },
        { id: "#B005", name: "Sarah Johnson", service: "Facial Treatment", dateTime: "Feb 16, 7:00 PM", status: "pending" },
        { id: "#B006", name: "Sarah Johnson", service: "Hot Stone Massage", dateTime: "Feb 16, 10:00 AM", status: "pending" },
        { id: "#B007", name: "Michael Smith", service: "Facial Treatment", dateTime: "Feb 15, 11:30 AM", status: "pending" }
    ],
    active: [
        { id: "#B023", name: "David Wilson", service: "Hot Stone Massage", dateTime: "Feb 18, 2:00 PM", status: "active" },
        { id: "#B024", name: "David Wilson", service: "Full Body Massage", dateTime: "Feb 18, 12:00 PM", status: "active" },
        { id: "#B025", name: "David Wilson", service: "Reflexology", dateTime: "Feb 17, 7:00 PM", status: "active" },
        { id: "#B026", name: "David Wilson", service: "Hot Stone Massage", dateTime: "Feb 17, 10:16 AM", status: "active" }
    ],
    completed: [
        { id: "#BK324", name: "John Doe", service: "Reflexology", dateTime: "Feb 17, 5:00 PM", status: "completed" },
        { id: "#BK325", name: "John Doe", service: "Full Body Massage", dateTime: "Feb 17, 5:00 PM", status: "completed" },
        { id: "#BK326", name: "John Doe", service: "Hot Stone Massag", dateTime: "Feb 17, 5:00 PM", status: "completed" },
        { id: "#BK327", name: "John Doe", service: "Body Scrub", dateTime: "Feb 17, 5:00 PM", status: "completed" },
        { id: "#BK328", name: "John Doe", service: "Reflexology", dateTime: "Feb 17, 5:00 PM", status: "completed" },
        { id: "#BK329", name: "John Doe", service: "Facial Treatment", dateTime: "Feb 17, 5:00 PM", status: "completed" }
    ],
    cancelled: [
        { id: "#BK005", name: "Oliver Green", service: "Body Scrub", dateTime: "Feb 16, 4:00 PM", status: "cancelled" },
        { id: "#BK235", name: "Oliver Green", service: "Full Body Massage", dateTime: "Feb 16, 4:00 PM", status: "cancelled" },
        { id: "#BK105", name: "Oliver Green", service: "Facial Treatment", dateTime: "Feb 16, 4:00 PM", status: "cancelled" }
    ]
};

// Function to display bookings
function showBookings(type) {
    const tableBody = document.getElementById('booking-table');
    tableBody.innerHTML = '';

    // Remove active class from all buttons
    document.querySelectorAll(".btn-filter").forEach(btn => btn.classList.remove("active"));
    
    // Add active class to the clicked button
    document.querySelector(`button[data-type="${type}"]`).classList.add("active");

    // Populate table with the corresponding data
    bookingsData[type].forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${booking.id}</td>
            <td>${booking.name}</td>
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

// Ensure the first tab (Today's Bookings) is active on page load
document.addEventListener('DOMContentLoaded', () => {
    showBookings('todays');
});
