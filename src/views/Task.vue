<template>
  <div class="row">
    <h1 v-if="task">{{task.title}}</h1>
    <h1 v-else class="col s6 offset-s3">Task not found</h1>
    <form class="col s12" @submit.prevent="submitHandler">
      <div class="input-field">
        <div class="chips" ref="chips"></div>
      </div>
      <div class="input-field">
        <textarea
          id="description"
          class="materialize-textarea"
          ref="textArea"
          v-model="description"
          style="min-height:200px;overflow-y:auto"
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
      <div class="input-field">
        <button class="btn waves-effect waves-light" type="submit">
          Update
          <i class="material-icons right">update</i>
        </button>
        <button class="btn blue" type="button" style="margin-left:15px" @click="completeTask">Complete</button>
      </div>
    </form>
  </div>
</template>



<script>
import M from "materialize-css";
export default {
  name: "Task",
  data() {
    return {
      description: "",
      chips: null,
      picker: null
    };
  },
  computed: {
    task() {
      return this.$store.getters.getTaskById(+this.$route.params.id);
    }
  },
  methods: {
    submitHandler() {
      const task = {
        description: this.description,
        status: "active",
        date: this.picker.date,
        id: this.task.id,
        tags: this.chips.chipsData
      };
      this.$store.dispatch("updateTask", task);
      this.$router.push("/tasks");
    },
    completeTask(){
      this.$store.dispatch('completeTask', this.task.id);
      this.$router.push('/tasks')
    }
  },
  destroyed() {
    if (this.chips && this.chips.destroy) {
      this.chips.destroy();
    }
    if (this.picker && this.picker.destroy) {
      this.picker.destroy();
    }
  },
  mounted() {
    this.description = this.task.description;
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: "Tags",
      data: this.task.tags
    });
    this.picker = M.Datepicker.init(this.$refs.picker, {
      format: "dd.mm.yyyy",
      defaultDate: this.task.date,
      setDefaultDate: true
    });
    setTimeout(() => M.updateTextFields(), 0);
  },
  components: {}
};
</script>