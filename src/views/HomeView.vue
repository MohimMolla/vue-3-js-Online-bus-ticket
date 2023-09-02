<template>
 
  <div class="ticket-booking-home">
    <div class="container align-content-start">
      <div class="row mt">
        <div class="col-5 mt-2">
          <div class=" stay-place-section">
            <div class="text-bg-light p-3">
              <h2>Select Your Stay Place</h2>
              <select v-model="selectedStay" @change="updateTravelRoute">
                <option value="">Select a stay place</option>
                <option
                  v-for="stayPlace in stayPlaces"
                  :key="stayPlace.id"
                  :value="stayPlace.id"
                >
                  {{ stayPlace.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="text-bg-light p-4">
            <h2>Select Date and Time</h2>
            <input v-model="selectedDate" type="date" :min="minDate" />
            <!--<div class="section bus-type-section">-->

            <h2>Select Bus Type</h2>
            <div class="g-3">
              <label for="acBus">AC </label>
              <input type="radio" id="acBus" value="AC" v-model="busType" />
            </div>
            <div class="">
              <label for="nonAcBus">Non-AC</label>
              <input type="radio" id="nonAcBus" value="Non-AC" v-model="busType" />
            </div>
          </div>
        </div>
        <!--<div class="col-5">
          <div class="section travel-route-section text-bg-light">
            <h2>Select Travel Route</h2>
            <div class="input-group" hig>
              <select v-model="from">
                <option value="">Select a departure location</option>
                <option v-for="route in travelRoutes" :key="route.id" :value="route.from">
                  {{ route.from }}
                </option>
              </select>
              <select v-model="to">
                <option value="">Select an arrival location</option>
                <option v-for="route in travelRoutes" :key="route.id" :value="route.to">
                  {{ route.to }}
                </option>
              </select>
            </div>
            <button @click="searchBuses">Search Buses</button>
          </div>
        </div>-->
      </div>
      <div class="row">
        <div class="col-5">
          <div class="section travel-route-section text-bg-light">
            <h2>Select Travel Route</h2>
            <div class="input-group" hig>
              <select v-model="from">
                <option value="">Select a departure location</option>
                <option v-for="route in travelRoutes" :key="route.id" :value="route.from">
                  {{ route.from }}
                </option>
              </select>
              <select v-model="to">
                <option value="">Select an arrival location</option>
                <option v-for="route in travelRoutes" :key="route.id" :value="route.to">
                  {{ route.to }}
                </option>
              </select>
            </div>
            <button @click="searchBuses">Search Buses</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--</div>-->
  <!--</div>-->
  <div class="row">
    <div class="col-5 mt-3">
      <div class="section distance-section text-bg-info">
        <h2>Distance to Destination</h2>
        <p class="distance text-primary" v-if="selectedRoute">{{ selectedRoute.distance }} km</p>
      </div>
    </div>
  </div>

  <div class="container align-content-center">
    <div class="row text-center">
      <div class="col-6">
        <div class="section bus-list-section" v-if="showBusList">
          <h2>Available Buses</h2>
          <div v-if="availableBuses.length === 0">No buses available.</div>
          <div v-else>
            <div v-for="bus in availableBuses" :key="bus.id" class="bus-card">
              <div class="row">
                <div class="col-5">
                  <img
                    :src="bus.image"
                    :alt="bus.name"
                    class="bus-image"
                    width="200px"
                    height="200px"
                  />
                </div>
                <div class="col-6 align-items-start">
                  <div class="bus-info">
                    <h3>{{ bus.name }}</h3>
                    <p>Departure: {{ bus.departureTime }}</p>
                    <p>Arrival: {{ bus.arrivalTime }}</p>
                    <!-- <p>Price: ${{ bus.price }}</p> -->
                  </div>
                </div>
              </div>

              <button class="text-center m-5" @click="selectBus(bus)">Select Bus</button>
              <hr v-if="index < availableBuses.length - 1" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-5">
        <div class="section selected-bus-section" v-if="selectedBus">
          <h2>Selected Bus</h2>
          <div class="selected-bus-card">
            <h3>{{ selectedBus.name }}</h3>
            <p>Departure: {{ selectedBus.departureTime }}</p>
            <p>Arrival: {{ selectedBus.arrivalTime }}</p>
            <!-- <p>Price: ${{ selectedBus.price }}</p> -->
            <RouterLink to="/ticket"
              ><button @click="bookTicket">Book Ticket</button></RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--</div>-->
</template>

<script>
export default {
  data() {
    return {
      selectedStay: null,
      showBusList: false,
      from: "",
      to: "",
      selectedBus: null,

      selectedDate: "", // Initialize selectedDate
      minDate: new Date().toISOString().split("T")[0], // Set minDate to current date

      selectedRoute: null,

      busType: "",

      stayPlaces: [
        { id: 1, name: "Dhaka" },
        { id: 2, name: "Faridpur" },
        { id: 3, name: "Sylhet" },
        { id: 3, name: "Cox's Bazar" },
      ],
      travelRoutes: [
        { id: "routeA", from: "Dhaka", to: "Faridpur", distance: 150 },
        { id: "routeB", from: "Faridpur", to: "Dhaka", distance: 150 },
        { id: "routeC", from: "Dhaka", to: "Sylhet", distance: 200 },
        { id: "routeD", from: "Dhaka", to: "Cox's Bazar", distance: 300 },
        // Define other travel routes
      ],
      buses: [
        {
          id: 101,
          name: "Green Line ",
          routeFrom: "Dhaka", // Departure location
          routeTo: "Faridpur", // Arrival location
          departureTime: "08:00 AM",
          arrivalTime: "12:00 PM",
          image:
            "https://i.pinimg.com/originals/1a/6e/e4/1a6ee44e07f4352ac6caae9872ed009c.jpg",
        },

        {
          id: 102,
          name: "Green Line ",
          routeFrom: "Dhaka", // Departure location
          routeTo: "Sylhet", // Arrival location
          departureTime: "10:00 AM",
          arrivalTime: "02:00 PM",
          image:
            "https://i.pinimg.com/originals/1a/6e/e4/1a6ee44e07f4352ac6caae9872ed009c.jpg",
        },
        {
          id: 103,
          name: "Golden Line",
          routeFrom: "Sylhet", // Departure location
          routeTo: "Dhaka", // Arrival location
          departureTime: "12:30 PM",
          arrivalTime: "06:30 PM",
          image:
            "https://i.pinimg.com/originals/1a/6e/e4/1a6ee44e07f4352ac6caae9872ed009c.jpg",
        },
        {
          id: 104,
          name: "Green Line ",
          routeFrom: "Faridpur", // Departure location
          routeTo: "Dhaka", // Arrival location
          departureTime: "08:00 AM",
          arrivalTime: "12:00 PM",
          image:
            "https://i.pinimg.com/originals/1a/6e/e4/1a6ee44e07f4352ac6caae9872ed009c.jpg",
        },
        {
          id: 105,
          name: "Golden Line ",
          routeFrom: "Dhaka", // Departure location
          routeTo: "Faridpur", // Arrival location
          departureTime: "09:00 AM",
          arrivalTime: "12:00 PM",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FwNanKdZn8lDwuT_aXEbdnAPIIvj8sk4eQ&usqp=CAU",
        },
        {
          id: 105,
          name: "Green Line ",
          routeFrom: "Faridpur", // Departure location
          routeTo: "Dhaka", // Arrival location
          departureTime: "08:00 AM",
          arrivalTime: "12:00 PM",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FwNanKdZn8lDwuT_aXEbdnAPIIvj8sk4eQ&usqp=CAU",
        },
        // Add more buses as needed
      ],
      availableBuses: [],
    };
  },
  computed: {
    selectedRoute() {
      return this.travelRoutes.find(
        (route) => route.from === this.from && route.to === this.to
      );
    },
  },
  methods: {
    // updateTravelRoute() {
    //   this.availableBuses = this.buses;
    // },
    updateTravelRoute() {
      this.availableBuses = this.buses;
      this.selectedRoute = this.travelRoutes.find(
        (route) => route.from === this.from && route.to === this.to
      );
    },

    selectBus(bus) {
      this.selectedBus = bus;
    },
    searchBuses() {
      if (this.from && this.to) {
        // Filter and set available buses based on selected route
        this.availableBuses = this.buses.filter((bus) => {
          return bus.routeFrom === this.from && bus.routeTo === this.to;
        });

        // Show the bus list section
        this.showBusList = true;
      } else {
        alert("Please select departure and arrival locations.");
      }
    },
  },
};
</script>

<style scoped>
/*.ticket-booking-home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}*/
.ticket-booking-home {
  /* Other styles ... */
  background-image: url("https://images.unsplash.com/photo-1572675339312-3e8b094a544d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzJTIwdGVybWluYWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80");
  /*background-color: aqua;*/
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: start;
  text-align: start;
}

.section {
  margin-bottom: 20px;
  padding: 20px;
  /*background-color: white;*/
  border-radius: 8px;
  /*box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);*/
  transition: background-color 0.3s ease-in-out;
}

/*.section:hover {
  background-color: #e0e0e0;
}*/

h2 {
  margin-top: 0;
  font-size: 1.5rem;
}

.input-group {
  display: flex;
  gap: 10px;
}

select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  /*background-color: #fff;*/
  font-size: 1rem;
  transition: border-color 0.3s ease-in-out;
}

select:hover {
  border-color: #007bff;
}

.distance {
  font-size: 1.2rem;
  font-weight: bold;
}

.range-slider {
  width: 100%;
}

.bus-image {
  width: 200px;
  height: 200px;
}
.bus-card-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
}

/* ... Other styles ... */
</style>
