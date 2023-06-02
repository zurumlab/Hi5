// Sample data for initial posts
const posts = [
    {
      id: 1,
      content: "Hello, world!",
      likes: 5,
      comments: [
        { id: 1, content: "Nice post!" },
        { id: 2, content: "I agree with you." }
      ]
    },
    {
      id: 2,
      content: "This is a sample post.",
      likes: 3,
      comments: [
        { id: 3, content: "Great content!" }
      ]
    }
  ];
  
  // Function to render posts in the UI
  function renderPosts() {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
  
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <p class="post-content">${post.content}</p>
        <div class="post-actions">
          <button class="like-btn">Like (${post.likes})</button>
          <button class="comment-btn">Comment (${post.comments.length})</button>
        </div>
      `;
  
      // Attach event listeners to the like and comment buttons
      const likeButton = postElement.querySelector('.like-btn');
      likeButton.addEventListener('click', () => {
        likePost(post.id);
      });
  
      const commentButton = postElement.querySelector('.comment-btn');
      commentButton.addEventListener('click', () => {
        viewComments(post.id);
      });
  
      postContainer.appendChild(postElement);
    });
  }
  
  // Function to handle liking a post
  function likePost(postId) {
    const post = posts.find(post => post.id === postId);
    if (post) {
      post.likes += 1;
      renderPosts();
    }
  }
  
  // Function to view comments for a post
  function viewComments(postId) {
    const post = posts.find(post => post.id === postId);
    if (post) {
      console.log(`Comments for post ${postId}:`);
      post.comments.forEach(comment => {
        console.log(`- ${comment.content}`);
      });
    }
  }
  
  // Initial rendering of posts
  renderPosts();
  