<template>
  <div>
    <h1>Tasks</h1>
    <hr />
    <div class="row">
      <div class="input-field col s3">
        <select ref="filter" v-model="filter">
          <option value disabled selected>Status filter</option>
          <option value="completed">completed</option>
          <option value="expired">expired</option>
          <option value="active">active</option>
        </select>
        <label>Materialize Select</label>
      </div>
    </div>
    <div class="row">
      <button v-if="filter" class="btn btn-small red" @click="filter = null">reset filter</button>
    </div>
    <table v-if="tasks">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Tags</th>
          <th>Description</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task,index) of tasks" :key="task.id">
          <td>
            <div class="text-format">{{index +1}}</div>
          </td>
          <td class="control-width-150">
            <div class="text-format">{{task.title}}</div>
          </td>
          <td class="control-width-150">{{task.tags.map( obj => obj.tag).join(', ')}}</td>
          <td class="control-width-400">
            <div class="text-format">{{task.description}}</div>
          </td>
          <td>{{task.date | moment("DD.MM.YYYY")}}</td>
          <td>{{task.status}}</td>
          <td>
            <router-link v-bind:to="'task/' + task.id" tag="button" class="btn btn-small">Open</router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>not tasks</p>
  </div>
</template>



<script>
import M from "materialize-css";
export default {
  name: "Tasks",
  data() {
    return {
      filter: null
    };
  },
  methods: {},
  computed: {
    tasks() {
      return this.$store.getters.tasks.filter(task => {
        if (this.filter === null) {
          return true;
        } else {
          return task.status === this.filter;
        }
      });
    }
  },

  components: {},
  mounted() {
    this.selectFilter = M.FormSelect.init(this.$refs.filter);
  },
  destroyed() {
    console.log(this.filter)
    if (this.selectFilter && this.selectFilter.destroy) {
      this.selectFilter.destroy();
    }
  }
};
</script>
<style scoped>
.text-format {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.control-width-150 {
  max-width: 150px;
}
.control-width-400 {
  max-width: 400px;
}
</style>