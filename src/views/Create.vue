<template>
  <div class="row">
    <h1 class="col s6 offset-s3">Create task</h1>
    <form class="col s12">
      <div class="input-field">
        <input id="title" type="text" class="validate" v-model="title" />
        <label for="title">Title</label>
      </div>
      <div class="input-field">
        <div class="chips" ref="chips"></div>
      </div>
      <div class="input-field">
        <textarea
          id="description"
          class="materialize-textarea"
          ref="textArea"
          v-model="description"
        ></textarea>
        <label for="description">Description</label>
        <span
          class="character-counter"
          style="float: right; font-size: 12px;"
        >{{description.length}}/2048</span>
      </div>
      <div class="input-field">
        <input type="text" ref="picker" />
      </div>
    </form>
  </div>
</template>



<script>
import M from "materialize-css";
export default {
  name: "Create",
  data() {
    return {
      description: "",
      title: ""
    };
  },
  mounted() {
    M.Chips.init(this.$refs.chips, { placeholder: "Tags" });
    M.Datepicker.init(this.$refs.picker, {
      format: "dd.mm.yyyy",
      defaultDate: new Date(),
      setDefaultDate: true,
    });
  },
  components: {}
};
</script>
