<template lang="">
    <div>
        <div class="my-4 bg-white border border-gray-200 rounded-[20px] shadow text-black h-fit m-2 p-2t">
            <p class="py-2 text-center font-bold text-xl text-[#0A0446]">Chats</p>
            <ul class="max-w-full space-y-1 ">
                <router-link v-for="cl in chatList" v-bind:key="cl.id" :to="'/' + currentUrl + '/one-to-one-chat/' + cl.id" v-if="chatList.length">
                    <li class="m-1 p-2 rounded-lg hover:bg-white">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <img class="w-10 h-10 rounded-full" src="https://picsum.photos/400/300"
                                    alt="Neil image">
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-md font-medium truncate">
                                    {{ cl.first_name }} {{ cl.last_name }}
                                </p>
                            </div>
                            <div class="inline-flex items-center text-base text-gray-900 mt-[-2rem]">
                                {{ cl.created_at | fromNow }}
                            </div>
                        </div>
                    </li>
                </router-link>
            </ul>

            <div class="pt-2 pb-4">
                <button
                    class="flex items-center font-sixe-[20px] px-8 py-1 mx-auto rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black">
                    See All
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Chats",
    props: {
        chatList: {},
       currentUrl: String,
  },
}
</script>
<style lang="">
    
</style>