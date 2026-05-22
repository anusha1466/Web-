const posts = [
  { title: "Blog 1", content: "Content of blog 1" },
  { title: "Blog 2", content: "Content of blog 2" }
];

const container = document.getElementById("posts");

posts.forEach((post, index) => {
  container.innerHTML += `
    <div>
      <h2 onclick="viewPost(${index})">${post.title}</h2>
    </div>
  `;
});

function viewPost(index) {
  localStorage.setItem("post", JSON.stringify(posts[index]));
  window.location.href = "post.html";
}