<template>
  <div class="about">
    <h1>This is an about page</h1>
    <SlotCard>
      <div class="content">
          <h2>Slot內容放在這裡</h2>
      </div>
    </SlotCard>
  </div>
</template>

<script>
import SlotCard from '../components/SlotCard'

export default {
  name: 'about',
  components: {
    SlotCard
  }
}
</script>

<style>
.content {
  padding: 50px 20px;
  border-radius: 6px;
  background: #a7daed;
  color: #233447;
}
</style>