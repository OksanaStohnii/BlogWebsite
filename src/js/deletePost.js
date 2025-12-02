document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll(".btn-delete");

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const slug = btn.dataset.slug;
      const confirmed = confirm(`Delete post "${slug}"?`);
      if (!confirmed) return;

      try {
        const res = await fetch(`/admin/delete/${slug}`, { method: "DELETE" });
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        btn.closest("tr").remove();
      } catch (err) {
        alert("Error deleting post. Check console.");
        console.error(err);
      }
    });
  });
});