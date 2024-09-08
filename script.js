// Function to update the resume preview based on form input
function updateResume() {
    document.getElementById('display-name').innerText = document.getElementById('name').value || 'Laura Parker';
    document.getElementById('display-title').innerText = document.getElementById('title').value || 'UI & UX Designer';
    document.getElementById('display-phone').innerText = document.getElementById('phone').value || '020 456 789';
    document.getElementById('display-email').innerText = document.getElementById('email').value || 'username@gmail.com';
    document.getElementById('display-address').innerText = document.getElementById('address').value || 'Your Street Address';
    document.getElementById('display-profile').innerText = document.getElementById('profile').value || 'Profile description...';
    document.getElementById('display-experience').innerText = document.getElementById('experience').value || 'Experience details...';
    document.getElementById('display-education').innerText = document.getElementById('education').value || 'Education details...';
    document.getElementById('display-language').innerText = document.getElementById('language').value || 'Languages...';
    document.getElementById('display-skills').innerText = document.getElementById('skills').value || 'Skills...';
}

// Add event listeners to update the resume as user types
document.getElementById('resume-form').addEventListener('input', updateResume);