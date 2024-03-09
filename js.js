document.getElementById('dobForm').addEventListener('submit', function(event) {
    // Reset error message
    document.getElementById('dobError').textContent = '';

    // Get selected values from drop-down lists
    var day = document.getElementById('dobDay').value;
    var month = document.getElementById('dobMonth').value;
    var year = document.getElementById('dobYear').value;

    // Validate the date of birth
    if (!isValidDate(day, month, year)) {
        // Prevent form submission
        event.preventDefault();
        // Display error message
        document.getElementById('dobError').textContent = 'Invalid date of birth.';
    }
});

function isValidDate(day, month, year) {
    // Convert selected values to numbers
    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    // Check if the selected values are valid
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }

    // Check if the year is in a valid range (adjust the range based on your requirements)
    if (year < 1900 || year > new Date().getFullYear()) {
        return false;
    }

    // Check if the month is in a valid range (1 to 12)
    if (month < 1 || month > 12) {
        return false;
    }

    // Check if the day is in a valid range based on the month
    var daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
        return false;
    }

    return true;
}