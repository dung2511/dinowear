import { Editor } from "@tinymce/tinymce-react";
import React from "react";

const EditorComponent = () => {
  const editorRef = useRef();
  return (
    <Editor
      apiKey="fliutou8i6pp4gkt9r5eb3g8cpicg9y90ono29vhhs1z133h"
      onInit={(evt, editor) => (editorRef.current = editor)}
      onEditorChange={(content) => handleEditorChange(content, "benefit")}
      init={{
        placeholder: "Hãy viết gì đó ở đây...",
        height: 300,
        width: "100%",
        menubar: false,
        plugins:
          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
      }}
    />
  );
};

export default EditorComponent;
