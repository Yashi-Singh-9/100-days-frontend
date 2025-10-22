let selectedFiles = [];

function handleFiles(files) {
  selectedFiles = selectedFiles.concat(Array.from(files));
  updateFileList();
}

function updateFileList() {
  const filesSection = document.querySelector('.files');
  filesSection.innerHTML = '';

  if (selectedFiles.length === 0) {
    filesSection.innerHTML = `
      <i class="fa-solid fa-folder-tree fs-4 d-block text-center"></i>
      <span class="d-block text-center mx-auto mt-3 mb-5">The files you’ll upload will appear here.</span>
    `;
    return;
  }

  selectedFiles.forEach(file => {
    const fileItem = document.createElement('div');
    fileItem.className = 'text-center mb-2';
    fileItem.textContent = file.name;
    filesSection.appendChild(fileItem);
  });
}

function attachFiles() {
  if (selectedFiles.length === 0) {
    alert("No files selected.");
    return;
  }
  alert(`${selectedFiles.length} file(s) attached successfully!`);
  closeModal();
}

function cancelUpload() {
  selectedFiles = [];
  document.getElementById('fileInput').value = '';
  updateFileList();
}

function closeModal() {
  document.querySelector('main').style.display = 'none';
}

// Button actions
document.querySelector('.attach').addEventListener('click', attachFiles);
document.querySelector('.cancel').addEventListener('click', cancelUpload);
document.querySelector('.fa-xmark').addEventListener('click', closeModal);
