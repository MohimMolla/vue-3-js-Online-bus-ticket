<template>
  <div class="ticket-booking-home">
    <div class="section stay-place-section">
      <h2>Select Your Stay Place</h2>
      <select v-model="selectedStay" @change="updateTravelRoute">
        <option value="">Select a stay place</option>
        <option v-for="stayPlace in stayPlaces" :key="stayPlace.id" :value="stayPlace.id">
          {{ stayPlace.name }}
        </option>
      </select>
    </div>

    <div class="section travel-route-section">
      <h2>Select Travel Route</h2>
      <div class="input-group">
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

    <div class="section distance-section">
      <h2>Distance to Destination</h2>
      <p class="distance">{{ selectedDistance }} km</p>
      <input v-model.number="selectedDistance" type="range" min="0" max="500" step="10" />
    </div>

    <div class="section bus-list-section" v-if="showBusList">
      <h2>Available Buses</h2>
      <div v-if="availableBuses.length === 0">No buses available.</div>
      <div v-else>
        <div v-for="bus in availableBuses" :key="bus.id" class="bus-card">
          <img :src="bus.image" :alt="bus.name" class="bus-image" />
          <div class="bus-info">
            <h3>{{ bus.name }}</h3>
            <p>Departure: {{ bus.departureTime }}</p>
            <p>Arrival: {{ bus.arrivalTime }}</p>
            <p>Price: ${{ bus.price }}</p>
          </div>
          <button @click="selectBus(bus)">Select Bus</button>
        </div>
      </div>
    </div>

    <div class="section selected-bus-section" v-if="selectedBus">
      <h2>Selected Bus</h2>
      <div class="selected-bus-card">
        <h3>{{ selectedBus.name }}</h3>
        <p>Departure: {{ selectedBus.departureTime }}</p>
        <p>Arrival: {{ selectedBus.arrivalTime }}</p>
        <p>Price: ${{ selectedBus.price }}</p>
        <RouterLink to="/home1"></RouterLink><button @click="bookTicket">Book Ticket</button>
      </div>
    </div>
  </div>
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
      stayPlaces: [
        { id: 1, name: "Hotel A" },
        { id: 2, name: "Hotel B" },
        { id: 3, name: "Hotel C" },
      ],
      travelRoutes: [
        { id: "routeA", from: "A", to: "B", distance: 150 },
        { id: "routeB", from: "B", to: "C", distance: 200 },
        // Define other travel routes
      ],
      buses: [
        {
          id: 101,
          name: "Bus X",
          routeFrom: "A", // Departure location
          routeTo: "B", // Arrival location
          departureTime: "08:00 AM",
          arrivalTime: "12:00 PM",
          image: "bus-x-image-url.jpg",
        },
        {
          id: 102,
          name: "Bus Y",
          routeFrom: "B", // Departure location
          routeTo: "C", // Arrival location
          departureTime: "10:00 AM",
          arrivalTime: "02:00 PM",
          image: "bus-y-image-url.jpg",
        },
        {
          id: 103,
          name: "Bus Z",
          routeFrom: "A", // Departure location
          routeTo: "C", // Arrival location
          departureTime: "12:00 PM",
          arrivalTime: "04:00 PM",
          image: "bus-z-image-url.jpg",
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
   
    updateTravelRoute() {
      this.availableBuses = this.buses;
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
        alert('Please select departure and arrival locations.');
      }
    },
  },
};
</script>

<style scoped>
.ticket-booking-home {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.section {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f0b0b0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;
}

.section:hover {
  background-color: #e0e0e0;
}

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
  background-color: #fff;
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

/* ... Other styles ... */
</style>
