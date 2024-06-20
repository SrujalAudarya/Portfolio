document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_v4lmr66', 'template_tpcfl2p', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send your message. Please try again.');
        });
});

// Example of dynamically adding a project (You can replace this with actual dynamic data fetching)
const projectList = document.getElementById('project-list');

const projects = [
    { title: 'Project One', description: 'Description for project one.' },
    { title: 'Project Two', description: 'Description for project two.' },
    // Add more projects as needed
];

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    projectList.appendChild(projectElement);
});
