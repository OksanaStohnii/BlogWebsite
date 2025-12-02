(function () {
  const editorEl = document.getElementById('editor');
  if (!editorEl || typeof Quill === 'undefined') return;

  const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
      toolbar: [
        [{ header: [1,2,3,false] }],
        ['bold','italic','underline'],
        [{ list:'ordered' }, { list:'bullet' }],
        ['link','blockquote','code-block'],
        ['clean']
      ]
    }
  });

  const initEl = document.getElementById('initialContent');
  if (initEl && initEl.value) {
    quill.clipboard.dangerouslyPasteHTML(initEl.value);
  }

  const form = editorEl.closest('form');
  form.addEventListener('submit', (e) => {
    const html = editorEl.querySelector('.ql-editor').innerHTML.trim();
    document.getElementById('contentInput').value = html;
    if (!html || html === '<p><br></p>') {
      e.preventDefault();
      alert('Заполни контент поста.');
    }
  });
})();