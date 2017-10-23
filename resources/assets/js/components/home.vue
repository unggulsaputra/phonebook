<template>

<div>

<nav class="panel column is-offset-2 is-8">
  <p class="panel-heading">
    Pembodohan Vue Js
    <button class="button is-primary is-outlined " @click="addNew">
      new
    </button>
  </p>
  <div class="panel-block">
    <p class="control has-icons-left">
      <input class="input is-small" type="text" placeholder="search">
      <span class="icon is-small is-left">
        <i class="fa fa-search"></i>
      </span>
    </p>
  </div>
  <a class="panel-block">
    <span class="column is-9">
	    marksheet
    </span>
    <span class="panel-icon column is-1">
      <i class="has-text-primary fa fa-eye"></i>
    </span>
    <span class="panel-icon column is-1">
      <i class="has-text-info fa fa-edit"></i>
    </span>
    <span class="panel-icon column is-1">
      <i class="has-text-danger fa fa-trash"></i>
    </span>

  </a>
  
</nav>

<add :openmodal='addActive' @closeRequest="close"></add>
</div>

</template>

<script>

let add = require('./add.vue');
export default{
	components:{add},
	data(){
		return {
			addActive : ''
		}
	},
	methods:{
		addNew(){
			this.addActive = 'is-active'
		},
		close(){
			this.addActive = ''
		}
	}
}

</script>