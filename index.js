// Write your code here!
async function getPosts() {
  try {
    const response = await fetch('https://typicode.com');
    const posts = await response.json();
    
    // Call the display function after successful fetch
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// 2. Function to Display Posts
function displayPosts(postsList) {
  const ul = document.getElementById('post-list');

  // Loop through the posts list
  postsList.forEach(post => {
    // 3. Within the loop:
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
});
}