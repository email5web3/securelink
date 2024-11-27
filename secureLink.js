(function enforceSecureLinks() {
  // Static Link Enforcement
  document.addEventListener("DOMContentLoaded", () => {
    enforceLinks();
  });

  // Dynamic Link Observation
  const observer = new MutationObserver(() => {
    enforceLinks();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Link Enforcement Function
  function enforceLinks() {
    document.querySelectorAll("a[href]").forEach(link => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }
})();
