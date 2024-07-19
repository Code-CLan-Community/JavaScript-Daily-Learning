function generateUserCards(users) {
    const cardsContainer = document.getElementById('cards-container');
  
    users.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const image = document.createElement('img');
      image.src = user.profilePicture;
      image.alt = user.name;
      image.classList.add('card-image');
  
      const content = document.createElement('div');
      content.classList.add('card-content');
  
      const name = document.createElement('h2');
      name.textContent = user.name;
  
      const bio = document.createElement('p');
      bio.textContent = user.bio;
  
      const location = document.createElement('p');
      location.textContent = `Location: ${user.location}`;
  
      const email = document.createElement('p');
      email.innerHTML = `Email: <a href="mailto:${user.email}">${user.email}</a>`;
  
      const username = document.createElement('p');
      username.innerHTML = `Username: <a href="#">${user.username}</a>`;
  
      content.appendChild(name);
      content.appendChild(bio);
      content.appendChild(location);
      content.appendChild(email);
      content.appendChild(username);
  
      card.appendChild(image);
      card.appendChild(content);
  
      cardsContainer.appendChild(card);
    });
  }