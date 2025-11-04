const posts = [
  {
    title: "Bắt đầu với React Hooks",
    excerpt:
      "Tổng hợp những khái niệm cốt lõi của React Hooks và ví dụ để áp dụng vào dự án thực tế.",
    category: "lap-trinh",
    categoryLabel: "Lập trình",
    date: "08/03/2024",
    readTime: "6 phút đọc",
  },
  {
    title: "Checklist tạo thói quen buổi sáng hiệu quả",
    excerpt:
      "Một khung thói quen đơn giản giúp bạn bắt đầu ngày mới tràn đầy năng lượng và tập trung.",
    category: "thoi-quen",
    categoryLabel: "Thói quen",
    date: "05/03/2024",
    readTime: "4 phút đọc",
  },
  {
    title: "Tự động hóa công việc với GitHub Actions",
    excerpt:
      "Hướng dẫn từng bước thiết lập workflow CI/CD cho dự án Node.js với GitHub Actions.",
    category: "lap-trinh",
    categoryLabel: "Lập trình",
    date: "02/03/2024",
    readTime: "8 phút đọc",
  },
  {
    title: "3 bài học đắt giá từ cuốn Atomic Habits",
    excerpt:
      "Những ý chính của Atomic Habits và cách áp dụng để thay đổi cuộc sống từng bước nhỏ.",
    category: "sach",
    categoryLabel: "Sách",
    date: "27/02/2024",
    readTime: "5 phút đọc",
  },
  {
    title: "Ghi chép sau 1 năm làm remote",
    excerpt:
      "Những kinh nghiệm giữ nhịp làm việc, cộng tác hiệu quả và bảo vệ sức khỏe khi làm việc từ xa.",
    category: "thoi-quen",
    categoryLabel: "Thói quen",
    date: "20/02/2024",
    readTime: "7 phút đọc",
  },
];

const postsContainer = document.querySelector("#posts-container");
const template = document.querySelector("#post-template");
const filterButtons = document.querySelectorAll(".filter-btn");

const renderPosts = (category = "tat-ca") => {
  postsContainer.innerHTML = "";

  const filteredPosts =
    category === "tat-ca"
      ? posts
      : posts.filter((post) => post.category === category);

  if (filteredPosts.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "posts__empty";
    emptyState.textContent = "Chưa có bài viết nào cho chủ đề này.";
    postsContainer.appendChild(emptyState);
    return;
  }

  filteredPosts.forEach((post) => {
    const node = template.content.cloneNode(true);
    node.querySelector(".post-card__category").textContent = post.categoryLabel;
    node.querySelector(".post-card__title").textContent = post.title;
    node.querySelector(".post-card__excerpt").textContent = post.excerpt;
    node.querySelector(
      ".post-card__meta"
    ).textContent = `${post.date} · ${post.readTime}`;
    postsContainer.appendChild(node);
  });
};

renderPosts();

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");

    const category = button.getAttribute("data-category");
    renderPosts(category);
  });
});

const newsletterForm = document.querySelector(".newsletter__form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(newsletterForm);
    const email = formData.get("email");

    newsletterForm.reset();

    const notice = document.createElement("p");
    notice.className = "newsletter__notice";
    notice.textContent = `Cảm ơn ${email}! Mình sẽ gửi bản tin cho bạn sớm.`;
    newsletterForm.insertAdjacentElement("afterend", notice);

    setTimeout(() => {
      notice.remove();
    }, 6000);
  });
}
