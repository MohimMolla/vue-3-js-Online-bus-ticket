<template>
    <div class="ticket-booking-home">
      <div class="stay-place-section">
        <h2>Select Your Stay Place</h2>
        <select v-model="selectedStay">
          <option v-for="stayPlace in stayPlaces" :key="stayPlace.id" :value="stayPlace.id">
            {{ stayPlace.name }}
          </option>
        </select>
      </div>
  
      <!-- <div class="travel-route-section">
        <h2>Select Travel Route</h2>
        <input v-model="from" type="text" placeholder="From" />
        <input v-model="to" type="text" placeholder="To" />
      </div> -->
      <div class="travel-route-section">
      <h2>Select Travel Route</h2>
      <input v-model="from" type="text" placeholder="From" />
      <input v-model="to" type="text" placeholder="To" @input="setDistanceFromRoute" />
    </div>
  
      <div class="distance-section">
        <h2>Distance to Destination</h2>
        <p>{{ selectedDistance }} km</p>
        <input v-model.number="selectedDistance" type="range" min="0" max="500" step="10" />
      </div>
  
      <div class="date-time-section">
        <h2>Select Date and Time</h2>
        <input v-model="selectedDate" type="date" />
        <input v-model="selectedTime" type="time" />
      </div>
  
      <div class="bus-list-section">
        <h2>Available Buses</h2>
        <div v-if="buses.length === 0">No buses available.</div>
        <div v-else>
          <div v-for="bus in buses" :key="bus.id" class="bus-card">
            <img :src="bus.image" :alt="bus.name" class="bus-image" />
            <div class="bus-info">
              <h3>{{ bus.name }}</h3>
              <p>Departure: {{ bus.departureTime }}</p>
              <p>Arrival: {{ bus.arrivalTime }}</p>
            </div>
            <RouterLink to="/"><button @click="selectBus(bus)">Select Bus</button></RouterLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { RouterLink } from 'vue-router';

  export default {
    data() {
        return {
            selectedStay: null,
            // from: '',
            // to: '',
            travelRoutes: [
                { id: 'routeA', name: 'Route A (From A to B)', distance: 150 },
                { id: 'routeB', name: 'Route B (From B to C)', distance: 200 },
                // Define other travel routes
            ],
            // selectedDistance: 100, // Default distance value
            selectedDate: '',
            selectedTime: '',
            routeDistances: {
                'FromAtoB': 150,
                'FromBtoC': 200,
                // Define distances for other routes as needed
            },
            stayPlaces: [
                { id: 1, name: 'Hotel A' },
                { id: 2, name: 'Hotel B' },
                { id: 3, name: 'Hotel C' },
            ],
            buses: [
                {
                    id: 101,
                    name: 'Bus X',
                    departureTime: '08:00 AM',
                    arrivalTime: '12:00 PM',
                    image: 'bus-x-image-url.jpg',
                },
                {
                    id: 102,
                    name: 'Bus Y',
                    departureTime: '10:00 AM',
                    arrivalTime: '02:00 PM',
                    image: 'bus-y-image-url.jpg',
                },
                {
                    id: 103,
                    name: 'Bus Z',
                    departureTime: '12:00 PM',
                    arrivalTime: '04:00 PM',
                    image: 'bus-z-image-url.jpg',
                },
            ],
        };
    },
    methods: {
        selectBus(bus) {
            // Implement logic to handle bus selection, possibly by emitting an event
            // to the parent component or navigating to the next step.
        },
    },
    components: { RouterLink }
};
  </script>
  
  <style scoped>
  .ticket-booking-home {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .stay-place-section,
  .travel-route-section,
  .distance-section,
  .date-time-section {
    margin-bottom: 20px;
  }
  
  .bus-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
  
  .bus-image {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
  
  .bus-info {
    flex: 1;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  