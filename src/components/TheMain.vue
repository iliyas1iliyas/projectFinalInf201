<template>
  <aside
    id="mainPage"
    class="text-white max-w-6xl text-5xl bold mx-auto flex items-center text-center"
  >
    Developing and testing your web or mobile app can be hard without any data
    to work with. This is why Random Data API exists. We're using API endpoints
    and fetch data that will allow you get random data.
  </aside>

  <div
    id="howItWorks"
    class="text-white max-w-6xl text-5xl bold mx-auto flex items-center text-center mb-28"
  >
    To get random data, you must select a category.
  </div>

  <div
    class="dataField text-white text-5xl bold max-w-3xl w-full py-8 mx-auto text-2xl mb-28 text-center"
  >
    <span v-if="fetchedObject === null || isLoading">
      {{ !isLoading ? defaultText : loadingText }}
    </span>
    <ShowData v-else :fetchedObject="fetchedObject" :type="type" />
  </div>
  <div
    class="max-w-3xl rounded-xl text-white text-5xl bold flex flex-col space-y-8 mx-auto mb-28"
  >
    <div class="flex justify-between">
      <button @click="fetchData('users')">Users</button>
      <button @click="fetchData('addresses')">Addresses</button>
    </div>
    <div class="flex justify-between">
      <button @click="fetchData('banks')">Banks</button>
      <button @click="fetchData('appliances')">Appliances</button>
    </div>
    <div class="flex justify-between">
      <button @click="fetchData('beers')">Beers</button>
      <button @click="fetchData('blood_types')">Blood Types</button>
    </div>
    <div class="flex justify-center">
      <button @click="fetchData('credit_cards')">Credit Cards</button>
    </div>
  </div>
</template>

<script lang="ts">
import ShowData from "./ShowData.vue";
import ApiClient from "../scripts/ApiClient";
import Observer from "../scripts/Observer";
import UrlDecorator from "../scripts/UrlDecorator";

export default {
  data() {
    return {
      fetchedObject: null,
      type: "",
      apiClient: new UrlDecorator(ApiClient.getInstance()),
      defaultText: "Select a category.",
      isLoading: false,
      loadingText: "Fetching data...",
      observer: new Observer(),
    };
  },
  methods: {
    fetchData(type) {
      this.isLoading = true;
      this.fetchedObject = null;
      this.type = type;
      const url = this.apiClient.getUrl(type);
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          this.fetchedObject = data;
          console.log(this.fetchedObject);
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setTimeout(() => {
            this.observer.notify();
          }, 2000);
        });
    },
    subscribeToLoading(callback: Function) {
      this.observer.addObserver(callback);
    },
  },
  components: {
    ShowData,
  },
  mounted() {
    this.subscribeToLoading( () => {
      this.isLoading = false;
      console.log("Data has been fetched.");
    } );
  },
};
</script>

<style scoped>
button {
  border: 4px dashed #fff;
  border-radius: 10px;
  padding: 10px 10px;
  transition: all 0.5s;
  width: 400px;
}
button:hover {
  background: rgb(32, 38, 57);
}
aside {
  min-height: 100vh;
}

.dataField {
  border: 4px dashed #fff;
}
</style>
