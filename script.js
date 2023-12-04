function getRecommendations() {
    const mood = document.getElementById('mood').value;
    const genre = document.getElementById('genre').value;
  
    // playlist generation
    const playlist = generatePlaylist(mood, genre);
    displayPlaylist(playlist);
  }
  
  function generatePlaylist(mood, genre) {
    const playlists = {
      happy: {
        pop: ['On My Love', 'Crown Your Love', 'Standinh Next to You', 'Calm Down', 'Feather', 'Single Soon', 'Late Night Talking', 'Anti-Hero', 'Waffle House', 'Made You Look'],
        rock: ['Somebody Told Me', 'Bite My Head Off', 'Stand As One', 'Red Flag', 'Want You Bad', 'Mr. Brightside', 'Hold the Line', 'City Haunts', 'Take Me Out', 'Get It On'],
       
      },
      relaxed: {
        pop: ['Another Love', 'Let It Go', 'Sign of the Times', 'Daylight', 'Heartbreak Anniversary', 'A Sacred Place', 'Sensitive', 'Golden Hour', 'Algo Contigo ', 'Dancing On my Own'],
        rock: ['Time of the Season', 'Heart od Gold', 'This Must Be the Place', 'Everywhere', 'Big Yellow Taxi', 'Gypsy', 'You Make Loving Fun', 'Dreadlock Holiday', 'Whatever You Want', 'Moonligth Shadow'],
      },

      energetic: {
        pop: ['As It Was', 'Binding Lights', 'Locked out of Heaven', 'Wake Me Up', 'You Belong With Me', 'STAY', 'One Last Time', 'The Nights', 'Whatever It takes', 'Unstoppable'],
        rock: ['Dont Stop Me Now', 'Lonely Boy', 'The Way You Used To Do', 'Hold Me Like a Grudge', 'Highway Tune', 'Another Way Out', 'Supermassive Black Hole', 'Victorious', 'Fear for Nobody', 'The Resistance'],
       
      }
    };
  
    return playlists[mood][genre];
  }
  
  function displayPlaylist(playlist) {
    const playlistContainer = document.getElementById('playlist');
    playlistContainer.innerHTML = '<h2>Recommended Playlist:</h2>';
    
    const ul = document.createElement('ul');
    playlist.forEach(song => {
      const li = document.createElement('li');
      li.textContent = song;
      ul.appendChild(li);
    });
    
    playlistContainer.appendChild(ul);
  }

// modification
function displayPlaylist(playlist) {
  const playlistContainer = document.getElementById('playlist');
  playlistContainer.innerHTML = '<h2>Recommended Playlist</h2>';

  const ul = document.createElement('ul');
  playlist.forEach(song => {
    const li = document.createElement('li');
    li.textContent = song;

    // Apply different styles based on song names
    if (song.includes('Happy')) {
      li.classList.add('happy-song'); // Adding a class for happy songs
    } else if (song.includes('Relaxed')) {
      li.classList.add('relaxed-song'); // Adding italic style for relaxed songs
    } else if (song.includes('Energetic')) {
      li.classList.add('energetic-song'); // Adding bold style for energetic songs
    }

    ul.appendChild(li);
  });

  playlistContainer.appendChild(ul);
}


function displayPlaylist(playlist) {
  const playlistContainer = document.getElementById('playlist');
  playlistContainer.innerHTML = '<h2>Recommended Playlist:</h2>';

  const ul = document.createElement('ul');
  playlist.forEach(song => {
    const li = document.createElement('li');
    li.className = 'playlist-item'; // Adding a class to each list item
    li.innerHTML = `<span class="music-icon">&#127925;</span>${song}`; // Music icon added here
    ul.appendChild(li);
  });

  playlistContainer.appendChild(ul);
}



function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // You can handle form submission here, like sending data to a server
  
  // Display the confirmation popup
  document.getElementById('popup').style.display = 'flex';
});
