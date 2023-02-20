const userName = document.getElementById("userName");
const userNameComment = document.getElementById("name-user-comment");
const btnSubmit = document.getElementById("forma_btn");
const textCommentUser = document.getElementById("text-comment-user");

btnSubmit.addEventListener("click", () => {
  let userNameValue = document.getElementById("userName").value;
  let userTextValue = document.getElementById("comment").value;
  userNameComment.innerHTML = userNameValue;
  textCommentUser.innerHTML = userTextValue;
});
