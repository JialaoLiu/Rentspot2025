<template>
  <div style="margin-top: 20px;">
    <SearchBar @search="handleSearch" />

    <div v-if="loading" style="text-align: center; margin: 20px 0;">
      <p>Loading properties...</p>
    </div>

    <div v-else-if="error" style="background-color: #ffebee; border: 1px solid #f44336; color: #b71c1c; padding: 12px; border-radius: 4px; margin: 20px 0;">
      {{ error }}
    </div>

    <div v-else>
      <MapDisplay ref="mapRef" />
      <!-- PropertyList component temporarily removed and moved to RentList.vue -->
      <!-- <PropertyList
        :properties="properties"
        :selectedPropertyId="selectedPropertyId"
        @focus-map="handleFocusMap"
      /> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// Import from propertyService is commented out as it will be used in RentList.vue
// import { fetchProperties } from '../services/propertyService'
import SearchBar from '../components/SearchBar.vue'
import MapDisplay from '../components/MapDisplay.vue'
// PropertyList import is commented out as it's now used in RentList.vue
// import PropertyList from '../components/PropertyList.vue'

// These state variables are kept in case you need them later
const properties = ref([])
const loading = ref(false) // Changed to false since we're not loading properties anymore
const error = ref(null)
const mapRef = ref(null)
const selectedPropertyId = ref(null)

// This function is commented out as it will be used in RentList.vue
/*
async function loadProperties() {
  loading.value = true
  error.value = null

  try {
    properties.value = await fetchProperties()
  } catch (err) {
    error.value = 'Failed to load properties. Please try again later.'
    console.error(err)
  } finally {
    loading.value = false
  }
}
*/

function handleSearch(searchTerm) {
  console.log('Search term:', searchTerm)
  // Redirect to RentList page with search term as query parameter
  // This could be implemented later when you connect the pages
}

// This function is commented out as it will be used in RentList.vue
/*
function handleFocusMap(property) {
  selectedPropertyId.value = property.id

  if (mapRef.value) {
    mapRef.value.focusMap(
      { lat: parseFloat(property.lat), lng: parseFloat(property.lng) },
      property.title
    )
  }
}
*/

onMounted(() => {
  // Remove the loadProperties call since we're not showing properties on home page anymore
  // loadProperties()
  
  // Initialize map if needed
  if (mapRef.value) {
    // You could set default map location here
  }
})
</script>