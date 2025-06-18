import DOMPurify from "dompurify";

// Hanya dijalankan di browser
const extractTextFromPTags = (html) => {
  const cleanHtml = DOMPurify.sanitize(html); // hindari XSS
  const wrapper = document.createElement("div");
  wrapper.innerHTML = cleanHtml;

  const paragraphs = Array.from(wrapper.querySelectorAll("p"));
  const texts = paragraphs.map((p) => p.textContent.trim()).filter(Boolean);

  return texts;
};

export { extractTextFromPTags };