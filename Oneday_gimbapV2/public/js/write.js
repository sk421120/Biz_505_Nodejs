const fontNames = [
  "맑은 고딕",
  "궁서",
  "굴림",
  "바탕체",
  "돋움체",
  "Arial",
  "Arial Black",
  "Comic Sans MS",
  "Courier New",
];
const fontSizes = [
  "8",
  "9",
  "10",
  "11",
  "14",
  "16",
  "18",
  "20",
  "22",
  "26",
  "30",
  "34",
  "38",
  "40",
  "50",
  "60",
  "72",
  "127",
];

const toolbar = [
  "fontname",
  "fontsize",
  "style",
  "color",
  "table",
  "height",
  ["para", ["ul", "ol"]],
  ["view", ["fullscreen", "help", "codeview"]],
];

// jQuery를 사용하여 summernote 적용하기
$(function () {
  $("#b_text").summernote({
    lang: "ko-KR",
    toolbar,
    fontNames: fontNames,
    fontSizes: fontSizes,
    placeholder: "본문을 입력하세요",
    width: "100%",
    height: "300px",
    // summernote 사용할때 설정하는 event 핸들러
    callbacks: {
      /*
	  summernote 입력창에 이미지를 drag-and-drop 할때 발생하는 event

	  summernote 입력창에 이미지를 drag
	  */
      onImageUpload: function (files) {
        // console.log(editor);
        fileUpfetch(files);
      },
    },
  });
});
