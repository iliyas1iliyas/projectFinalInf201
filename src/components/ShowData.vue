<template>
  <div v-if="type === 'users'" class="space-y-4">
    <p>User Info:</p>
    <p>First Name: {{ fetchedObject.first_name }}</p>
    <p>Last Name: {{ fetchedObject.last_name }}</p>
    <p>Username : {{ fetchedObject.username }}</p>
    <p>Email : {{ fetchedObject.email }}</p>
    <p>Password : {{ fetchedObject.password }}</p>
    <p>Phone number : {{ fetchedObject.phone_number }}</p>
    <p>
        <p>Avatar :</p>
    <p class="flex justify-center">
      <img :src="fetchedObject.avatar" alt="avatar" />
    </p>
    </p>
  </div>

  <div v-if="type === 'addresses'" class="space-y-4">
    <p>
        Address info: 
    </p>
    <p>City: {{ fetchedObject.city }}</p>
    <p>Street name : {{ fetchedObject.street_name }}</p>
    <p>Street address : {{ fetchedObject.street_address }} </p>
    <p>Postcode : {{ fetchedObject.postcode }}</p>
    <p>ID: {{ fetchedObject.id }}</p>
</div>

    <div v-if="type === 'banks'" class="space-y-4">
        <p>
            Bank info:
        </p>
        <p>Account Number: {{ fetchedObject.account_number }}</p>
        <p>IBAN: {{ fetchedObject.iban }}</p>
        <p>Bank Name: {{ fetchedObject.bank_name }}</p>
        <p>Routing Number: {{ fetchedObject.routing_number }}</p>
        <p>SWIFT/BIC: {{ fetchedObject.swift_bic }}</p>
        <p>ID: {{ fetchedObject.id }}</p>
        <p>UID: {{ fetchedObject.uid }}</p>
    </div>

    <div v-if="type==='appliances'">
        <p>
            Appliance info:
        </p>
        <p>Brand: {{ fetchedObject.brand }}</p>
        <p>Equipment: {{ fetchedObject.equipment }}</p>
        <p>ID: {{ fetchedObject.id }}</p>
        <p>UID: {{ fetchedObject.uid }}</p>

    </div>

    <div v-if="type==='beers'">
        <p>
            Beer info:
        </p>
        <p>Brand: {{ fetchedObject.brand }}</p>
        <p>Name: {{ fetchedObject.name }}</p>
        <p>Style: {{ fetchedObject.style }}</p>
        <p>Hop: {{ fetchedObject.hop }}</p>
        <p>Yeast: {{ fetchedObject.yeast }}</p>
        <p>Malts: {{ fetchedObject.malts }}</p>
        <p>IBU: {{ fetchedObject.ibu }}</p>
        <p>Alcohol: {{ fetchedObject.alcohol }}</p>
        <p>BLG: {{ fetchedObject.blg }}</p>
        <p>ID: {{ fetchedObject.id }}</p>
        <p>UID: {{ fetchedObject.uid }}</p>
    </div>

    <div v-if="type==='blood_types'">
        <p>
            Blood type info:
        </p>
        <p>Type: {{ fetchedObject.type }}</p>
        <p>Rh Factor: {{ fetchedObject.rh_factor }}</p>
        <p>Group: {{ fetchedObject.group }}</p>
        <p>ID: {{ fetchedObject.id }}</p>
        <p>UID: {{ fetchedObject.uid }}</p>
    </div>

    <div v-if="type==='credit_cards'">
        <p>
            Credit card info:
        </p>
        <p>Credit Card Number: {{ fetchedObject.credit_card_number }}</p>
        <p>Credit Card Expiry Date: {{ fetchedObject.credit_card_expiry_date }}</p>
        <p>Credit Card Type: {{ fetchedObject.credit_card_type }}</p>
        <p>ID: {{ fetchedObject.id }}</p>
        <p>UID: {{ fetchedObject.uid }}</p>
    </div>
</template>

<script lang="ts">
export default {
  props: ["fetchedObject", "type"],
};
</script>
