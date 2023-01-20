'use strict';

const btnHamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav');
const fileUploader = document.querySelector('.upload-container');

btnHamburger.addEventListener('click', function () {
  menu.classList.toggle('active');
  btnHamburger.classList.toggle('active');
});

fileUploader.addEventListener('click', function () {
  const uploadInput = document.querySelector('#file-upload');

  uploadInput.click();

  uploadInput.addEventListener('change', function () {
    console.log(this.files);
    const uploadSuccess = document.createElement('span');
    uploadSuccess.textContent = '✔ Photo(s) successfully uploaded';
    uploadSuccess.classList.add('upload-success');
    fileUploader.appendChild(uploadSuccess);
  });
});
