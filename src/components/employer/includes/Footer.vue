<template>
  <!-- footer-start -->
  <footer class="px-8">
      <div class="w-full text-center py-4 px-16 text-white bg-[#0A0446] rounded-md mt-2">
          <p>© {{ currentYear }} Mpact International, Inc. All Rights Reserved.</p>
      </div>
  </footer>
  <!-- footer-end -->
</template>


<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
