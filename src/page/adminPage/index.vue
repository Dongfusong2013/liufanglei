<template>
  <div>
    <div class="edit_container">
      <quill-editor
        v-model="content"
        ref="myQuillEditor"
        class="editer"
        :options="editorOption"
        @ready="onEditorReady($event)"
      ></quill-editor>
    </div>
    <div class="submit_btn">
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
    <div>
      <el-upload
        action="/liufanglei_server/thirdApi/qiniu/img"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
      <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
    </div>
  </div>
</template>

<script>

import { quillEditor, Quill } from "vue-quill-editor";
// import { container, ImageExtend, QuillWatch } from "quill-image-extend-module";
// import ImageResize from "quill-image-resize-module";

// import { baseUrl, baseImgPath } from "@/config/env";

// Quill.register("modules/ImageExtend", ImageExtend);
// use resize module
// Quill.register("modules/ImageResize", ImageResize);

export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      content: "<h3>说些什么吧~~</h3>",
      editorOption: {
        // modules: {
        //   ImageResize: {
        //     modules: ["Resize", "DisplaySize", "Toolbar"]
        //   },
        //   ImageExtend: {
        //     loading: true,
        //     name: "file",
        //     action: "/api" + "/thirdApi/qiniu/img",
        //     response: res => {
        //       console.log("---", res);
        //       return res.imgPath;
        //     }
        //   },
        //   toolbar: {
        //     container: container,
        //     handlers: {
        //       image: function() {
        //         QuillWatch.emit(this.quill.id);
        //       }
        //     }
        //   }
        // }
      }
    };
  },
  components: {
    quillEditor
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
    submit() {
      console.log(this.content);
      this.$message.success("提交成功！");
    }
  }
};
</script>

<style lang="less">

// @import "../../style/mixin";
.edit_container {
  padding: 40px;
  margin-bottom: 40px;
}
.editer {
  height: 450px;
}
.submit_btn {
  text-align: center;
}

.ql-snow .ql-editor pre.ql-syntax::after {
  background: #e1e1e1;
}

.quill-code {
  height: auto;
  border: none;
  > .title {
    border: 1px solid #ccc;
    border-left: none;
    height: 3em;
    line-height: 3em;
    text-indent: 1rem;
    font-weight: bold;
  }
  > code {
    width: 100%;
    margin: 0;
    padding: 1rem;
    border: 1px solid #ccc;
    border-top: none;
    border-left: none;
    border-radius: 0;
    height: 30rem;
    overflow-y: auto;
    background: #ccc;
  }
}
</style>
