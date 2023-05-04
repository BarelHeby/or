window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  const btn = document.getElementById("up");
  if (!btn) return;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

export function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
