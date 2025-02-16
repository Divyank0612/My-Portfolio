// Function to open the popup
function openPopup(degree) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupImg = document.getElementById('popup-img');

    // Set content based on the degree
    switch (degree) {
        case 'masters':
            popupTitle.textContent = 'Masters';
            popupDescription.innerHTML = `
                <p><strong>University:</strong> XYZ University</p>
                <p><strong>Duration:</strong> 2021 - 2023</p>
                <p><strong>Key Skills:</strong> Machine Learning, Data Visualization, Python</p>
            `;
            popupImg.src = 'images/education/masters.jpg';
            break;
        case 'bachelors':
            popupTitle.textContent = 'Bachelors';
            popupDescription.innerHTML = `
                <p><strong>University:</strong> ABC University</p>
                <p><strong>Duration:</strong> 2017 - 2021</p>
                <p><strong>Key Skills:</strong> Algorithms, Databases, Web Development</p>
            `;
            popupImg.src = 'images/education/bachelors.jpg';
            break;
        case '12th':
            popupTitle.textContent = '12th Grade';
            popupDescription.innerHTML = `
                <p><strong>School:</strong> DEF School</p>
                <p><strong>Duration:</strong> 2015 - 2017</p>
                <p><strong>Key Subjects:</strong> Mathematics, Physics, Chemistry</p>
            `;
            popupImg.src = 'images/education/12th.jpg';
            break;
        case '10th':
            popupTitle.textContent = '10th Grade';
            popupDescription.innerHTML = `
                <p><strong>School:</strong> GHI School</p>
                <p><strong>Duration:</strong> 2013 - 2015</p>
                <p><strong>Key Subjects:</strong> Science, Mathematics, Social Studies</p>
            `;
            popupImg.src = 'images/education/10th.jpg';
            break;
    }

    // Display the popup
    popup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}