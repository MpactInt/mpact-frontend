<template>
<section class="registration-link half-cut-bg">
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">Team and organization management</span>
        </p>
    </div>

    <!-- card-10 stat -->
    <div class="w-full">
        <div class="mx-5 flex flex-wrap space-x-2 space-y-1">
            <button
                class="flex items-center font-sixe-[20px] px-12 py-2 rounded-md bg-[#BE0858] text-white text-center text-md shadow">

                <svg width="24" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.6083 10.9267C20.6888 10.9267 21.7451 10.6063 22.6435 10.006C23.542 9.40564 24.2422 8.55238 24.6557 7.55409C25.0693 6.55579 25.1774 5.45729 24.9666 4.39751C24.7558 3.33772 24.2355 2.36424 23.4714 1.60018C22.7074 0.836117 21.7339 0.315784 20.6741 0.104979C19.6143 -0.105825 18.5158 0.00236697 17.5175 0.415875C16.5192 0.829383 15.666 1.52963 15.0657 2.42808C14.4653 3.32652 14.1449 4.3828 14.1449 5.46335C14.1466 6.91182 14.7227 8.30049 15.7469 9.32471C16.7711 10.3489 18.1598 10.9251 19.6083 10.9267ZM19.6083 1.41513C20.4089 1.41513 21.1916 1.65256 21.8573 2.09738C22.5231 2.54221 23.0419 3.17445 23.3483 3.91417C23.6547 4.65388 23.7349 5.46784 23.5787 6.25312C23.4225 7.0384 23.0369 7.75972 22.4708 8.32588C21.9046 8.89203 21.1833 9.27759 20.398 9.43379C19.6128 9.58999 18.7988 9.50982 18.0591 9.20342C17.3194 8.89702 16.6871 8.37815 16.2423 7.71242C15.7975 7.0467 15.5601 6.26401 15.5601 5.46335C15.5613 4.39007 15.9882 3.36109 16.7471 2.60216C17.506 1.84324 18.535 1.41634 19.6083 1.41513ZM31.4434 13.8817C32.3114 13.8817 33.1598 13.6244 33.8815 13.1421C34.6032 12.6599 35.1657 11.9745 35.4978 11.1727C35.83 10.3708 35.9169 9.48839 35.7476 8.6371C35.5782 7.78582 35.1603 7.00387 34.5465 6.39013C33.9328 5.77639 33.1508 5.35843 32.2996 5.1891C31.4483 5.01977 30.5659 5.10667 29.764 5.43883C28.9621 5.77098 28.2767 6.33346 27.7945 7.05514C27.3123 7.77683 27.0549 8.62529 27.0549 9.49325C27.0562 10.6568 27.519 11.7722 28.3417 12.595C29.1644 13.4177 30.2799 13.8804 31.4434 13.8817ZM31.4434 6.51998C32.0315 6.51998 32.6063 6.69437 33.0953 7.02109C33.5843 7.34781 33.9654 7.81219 34.1904 8.3555C34.4155 8.89881 34.4743 9.49666 34.3596 10.0734C34.2449 10.6502 33.9617 11.18 33.5458 11.5958C33.13 12.0117 32.6002 12.2948 32.0234 12.4096C31.4466 12.5243 30.8488 12.4654 30.3055 12.2403C29.7622 12.0153 29.2978 11.6342 28.9711 11.1452C28.6444 10.6562 28.47 10.0813 28.4701 9.49325C28.471 8.70502 28.7846 7.94935 29.342 7.39203C29.8995 6.8347 30.6552 6.52123 31.4434 6.52038V6.51998ZM7.75434 13.8817C8.6223 13.8817 9.47077 13.6244 10.1925 13.1421C10.9141 12.6599 11.4766 11.9745 11.8088 11.1727C12.1409 10.3708 12.2278 9.48839 12.0585 8.6371C11.8892 7.78582 11.4712 7.00387 10.8575 6.39013C10.2437 5.77639 9.46178 5.35843 8.61049 5.1891C7.75921 5.01977 6.87684 5.10667 6.07495 5.43883C5.27306 5.77098 4.58767 6.33346 4.10546 7.05514C3.62324 7.77683 3.36586 8.62529 3.36586 9.49325C3.36718 10.6567 3.82995 11.7722 4.65267 12.5949C5.47538 13.4176 6.59085 13.8804 7.75434 13.8817ZM7.75434 6.51998C8.34242 6.51998 8.91729 6.69437 9.40626 7.02109C9.89522 7.34781 10.2763 7.81219 10.5014 8.3555C10.7264 8.89881 10.7853 9.49666 10.6706 10.0734C10.5558 10.6502 10.2726 11.18 9.85679 11.5958C9.44095 12.0117 8.91115 12.2948 8.33437 12.4096C7.75759 12.5243 7.15975 12.4654 6.61644 12.2403C6.07313 12.0153 5.60876 11.6342 5.28206 11.1452C4.95535 10.6562 4.78098 10.0813 4.781 9.49325C4.782 8.70502 5.09559 7.94937 5.653 7.39205C6.21041 6.83473 6.96611 6.52125 7.75434 6.52038V6.51998ZM39.1131 19.0785C38.9684 17.8042 38.4544 16.5633 37.7031 15.6738C36.8092 14.6155 35.6326 14.1001 34.3888 14.2252C34.2435 14.2396 34.1062 14.2987 33.9958 14.3944C33.1195 15.1532 32.2879 15.5047 31.4517 15.4723C31.4327 15.4715 31.4138 15.4715 31.395 15.4723C30.5577 15.5055 29.7269 15.1531 28.8509 14.3944C28.7405 14.2987 28.6032 14.2396 28.4578 14.2252C28.3073 14.2102 28.156 14.2046 28.0049 14.2084C27.8616 13.9908 27.7057 13.7817 27.538 13.5822C26.4283 12.2684 24.9712 11.6293 23.4342 11.7828C23.2888 11.7972 23.1515 11.8563 23.0411 11.952C21.8836 12.9543 20.7297 13.439 19.6104 13.3949C19.5915 13.3941 19.5727 13.3941 19.5538 13.3949C18.4354 13.4383 17.2805 12.9543 16.123 11.952C16.0126 11.8563 15.8753 11.7972 15.7299 11.7828C14.1936 11.6292 12.7359 12.2684 11.6261 13.5822C11.4583 13.782 11.3022 13.9914 11.1587 14.2093C11.0052 14.2048 10.8516 14.21 10.6988 14.225C10.5535 14.2394 10.4161 14.2985 10.3057 14.3942C9.42962 15.1529 8.59878 15.5041 7.76158 15.472C7.74271 15.4712 7.72381 15.4712 7.70489 15.472C6.86745 15.5035 6.03692 15.1528 5.16072 14.3941C5.05032 14.2984 4.91299 14.2394 4.76763 14.225C3.52381 14.1001 2.34729 14.6153 1.45347 15.6736C0.702117 16.5631 0.188188 17.8042 0.0434516 19.0783C-0.258443 21.7356 1.03404 23.7108 3.25894 23.9943C3.28859 23.9981 3.31845 24 3.34833 24H12.1193C12.1492 24 12.1791 23.9981 12.2087 23.9943C12.4739 23.9607 12.735 23.9001 12.9879 23.8134C13.2622 23.8979 13.5432 23.9584 13.8279 23.9943C13.8576 23.9981 13.8874 24 13.9172 24H25.248C25.2779 24 25.3078 23.9981 25.3374 23.9943C25.6204 23.9586 25.8997 23.8987 26.1724 23.8152C26.4247 23.9009 26.6849 23.9609 26.9493 23.9943C26.9789 23.9981 27.0088 24 27.0387 24H35.8085C35.8383 24 35.8682 23.9981 35.8978 23.9943C38.1228 23.7111 39.415 21.7355 39.1131 19.0785ZM4.71228 22.5851V19.8895C4.71228 19.7019 4.63774 19.5219 4.50504 19.3892C4.37235 19.2565 4.19238 19.182 4.00472 19.182C3.81706 19.182 3.63709 19.2565 3.50439 19.3892C3.3717 19.5219 3.29715 19.7019 3.29715 19.8895V22.5678C1.69444 22.2769 1.2883 20.6731 1.45135 19.2382C1.65859 17.4134 2.81058 15.6223 4.41133 15.6223H4.42438C5.50146 16.4991 6.6154 16.9232 7.73485 16.8872C8.56907 16.9137 9.39912 16.685 10.2134 16.2047C10.039 16.7472 9.91828 17.3054 9.85314 17.8715C9.68757 19.3294 9.91792 20.7157 10.5019 21.7752C10.6612 22.0651 10.8519 22.3367 11.0705 22.5849L4.71228 22.5851ZM25.2017 22.5851H25.11V18.8956C25.11 18.708 25.0354 18.528 24.9027 18.3953C24.7701 18.2626 24.5901 18.1881 24.4024 18.1881C24.2148 18.1881 24.0348 18.2626 23.9021 18.3953C23.7694 18.528 23.6949 18.708 23.6949 18.8956V22.5851H15.4714V18.8956C15.4714 18.708 15.3968 18.528 15.2641 18.3953C15.1314 18.2626 14.9515 18.1881 14.7638 18.1881C14.5761 18.1881 14.3962 18.2626 14.2635 18.3953C14.1308 18.528 14.0562 18.708 14.0562 18.8956V22.5851H13.9646C11.6267 22.2613 11.033 20.0249 11.2595 18.0309C11.5379 15.5796 13.1049 13.1757 15.289 13.1757C15.3198 13.1757 15.3506 13.1762 15.3817 13.1772C16.7534 14.3098 18.1664 14.8586 19.5833 14.8099C21.0026 14.8593 22.4135 14.3097 23.7848 13.1772C26.0176 13.1057 27.6248 15.5452 27.9071 18.0309C28.1327 20.0249 27.5393 22.2613 25.2013 22.5851H25.2017ZM35.8615 22.5678V19.8895C35.8615 19.7019 35.787 19.5219 35.6543 19.3892C35.5216 19.2565 35.3416 19.182 35.154 19.182C34.9663 19.182 34.7863 19.2565 34.6536 19.3892C34.5209 19.5219 34.4464 19.7019 34.4464 19.8895V22.5851H28.0952C28.3138 22.3368 28.5045 22.0653 28.6639 21.7753C29.2478 20.7159 29.4782 19.3296 29.3126 17.8716C29.2477 17.3075 29.1275 16.7511 28.9539 16.2104C29.7655 16.6873 30.5926 16.9147 31.4235 16.8876C32.5431 16.9237 33.6563 16.4995 34.7339 15.6228H34.747C36.3475 15.6228 37.4998 17.414 37.707 19.2386C37.8701 20.6734 37.4639 22.277 35.8609 22.5678H35.8615Z"
                        fill="white" />
                </svg>

                <span class="flex-1 text-white ml-3 whitespace-nowrap">Employees</span>
            </button>
            <router-link to="/employer/team-management/registration-link" >
              <button
                  class="flex items-center font-sixe-[20px] px-12 py-2  rounded-md bg-white text-black text-center text-md shadow">

                  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M13.5267 10.0368H7.4178C7.17682 10.0368 6.98145 9.84139 6.98145 9.60041C6.98145 9.35944 7.17682 9.16406 7.4178 9.16406H13.5267C13.7677 9.16406 13.9631 9.35944 13.9631 9.60041C13.9631 9.84139 13.7677 10.0368 13.5267 10.0368Z"
                          fill="black" />
                      <path
                          d="M13.5267 14.4H7.4178C7.17682 14.4 6.98145 14.2047 6.98145 13.9637C6.98145 13.7227 7.17682 13.5273 7.4178 13.5273H13.5267C13.7677 13.5273 13.9631 13.7227 13.9631 13.9637C13.9631 14.2047 13.7677 14.4 13.5267 14.4Z"
                          fill="black" />
                      <path
                          d="M7.85432 2.40053C8.09531 2.40053 8.29067 2.20517 8.29067 1.96418C8.29067 1.72319 8.09531 1.52783 7.85432 1.52783C7.61333 1.52783 7.41797 1.72319 7.41797 1.96418C7.41797 2.20517 7.61333 2.40053 7.85432 2.40053Z"
                          fill="black" />
                      <path
                          d="M2.70669 10.2889L2.06624 9.53037C1.91243 9.34476 1.93817 9.06958 2.12384 8.91577C2.307 8.76397 2.57797 8.78677 2.73315 8.96704L3.1923 9.51122L5.14758 7.58086C5.32081 7.4132 5.59713 7.41772 5.7648 7.5909C5.93018 7.76173 5.92838 8.03347 5.76082 8.20212L3.60399 10.3315C3.36706 10.5685 2.98285 10.5686 2.74575 10.3317C2.732 10.318 2.71897 10.3037 2.70669 10.2889Z"
                          fill="black" />
                      <path
                          d="M2.70669 14.6521L2.06624 13.8937C1.91243 13.708 1.93817 13.4329 2.12384 13.2791C2.307 13.1273 2.57797 13.1501 2.73315 13.3303L3.1923 13.8745L5.14758 11.9441C5.32081 11.7765 5.59713 11.781 5.7648 11.9542C5.93018 12.125 5.92838 12.3968 5.76082 12.5654L3.60399 14.6947C3.36706 14.9318 2.98285 14.9319 2.74575 14.695C2.732 14.6813 2.71897 14.667 2.70669 14.6521Z"
                          fill="black" />
                      <path
                          d="M3.14322 19.4519L2.50276 18.6934C2.34895 18.5078 2.37469 18.2327 2.56036 18.0788C2.74352 17.9271 3.01449 17.9499 3.16967 18.1301L3.62882 18.6743L5.58411 16.7439C5.75734 16.5763 6.03366 16.5808 6.20133 16.754C6.36665 16.9249 6.36485 17.1966 6.19734 17.3653L4.04052 19.4946C3.80358 19.7316 3.41937 19.7317 3.18227 19.4949C3.16853 19.4811 3.15549 19.4668 3.14322 19.4519Z"
                          fill="black" />
                      <path
                          d="M15.7083 20.0728C14.7443 20.0728 13.9629 19.2914 13.9629 18.3274C13.9629 17.3635 14.7443 16.582 15.7083 16.582C16.6722 16.582 17.4537 17.3635 17.4537 18.3274C17.4527 19.291 16.6718 20.0719 15.7083 20.0728ZM15.7083 17.4547C15.2263 17.4547 14.8356 17.8454 14.8356 18.3274C14.8356 18.8094 15.2263 19.2001 15.7083 19.2001C16.1903 19.2001 16.581 18.8094 16.581 18.3274C16.5804 17.8457 16.19 17.4553 15.7083 17.4547Z"
                          fill="black" />
                      <path
                          d="M20.5084 19.2001C20.5054 16.5505 18.3582 14.4033 15.7086 14.4003V4.36421C15.7078 3.64156 15.1222 3.05592 14.3995 3.05516H12.6541V2.61881C12.6536 2.13708 12.2631 1.74665 11.7814 1.74611H10.6054C9.88994 0.226682 8.07816 -0.425008 6.55873 0.290498C5.91904 0.591743 5.40431 1.10647 5.10312 1.74611H3.92715C3.44542 1.74665 3.055 2.13708 3.05445 2.61881V3.05516H1.30905C0.586401 3.05592 0.000763613 3.64156 0 4.36421V21.8182C0.000763613 22.5409 0.586401 23.1265 1.30905 23.1273H12.9575C14.7509 24.392 17.1754 24.2714 18.8344 22.8349C18.8372 22.8331 18.8404 22.8326 18.8432 22.8307C18.8563 22.8217 18.8633 22.808 18.8752 22.7979C19.9124 21.89 20.5077 20.5787 20.5084 19.2001ZM19.6357 19.2001C19.6354 20.1654 19.2777 21.0963 18.6317 21.8135C17.1828 20.1991 14.6996 20.0649 13.0852 21.5138C12.98 21.6082 12.8799 21.7083 12.7855 21.8135C11.3407 20.1977 11.4795 17.7166 13.0953 16.2719C14.7111 14.8272 17.1921 14.9659 18.6369 16.5817C19.2806 17.3018 19.6363 18.2342 19.6357 19.2001ZM3.9271 2.61881H5.38527C5.56712 2.6091 5.72721 2.49565 5.7967 2.32733C6.19929 1.19096 7.44687 0.596107 8.58323 0.998695C9.20394 1.21862 9.69222 1.707 9.91203 2.32776C9.97846 2.49843 10.1404 2.61297 10.3235 2.61881H11.7814V4.36421H3.9271V2.61881ZM0.872646 21.8182V4.36421C0.872865 4.12335 1.06813 3.92808 1.309 3.92786H3.0544V4.36421C3.05494 4.84594 3.44537 5.23637 3.9271 5.23691H11.7814C12.2631 5.23637 12.6536 4.84594 12.6541 4.36421V3.92786H14.3995C14.6404 3.92808 14.8356 4.12335 14.8359 4.36421V14.4837C12.8837 14.8481 11.3565 16.3753 10.9921 18.3274H7.4179C7.17693 18.3274 6.98155 18.5228 6.98155 18.7638C6.98155 19.0048 7.17693 19.2001 7.4179 19.2001H10.9087C10.9077 20.3155 11.2969 21.3961 12.0089 22.2546H1.309C1.06808 22.2544 0.872865 22.0592 0.872646 21.8182ZM13.4347 22.3961C14.5624 21.1403 16.4946 21.0365 17.7504 22.1641C17.8318 22.2373 17.9093 22.3147 17.9824 22.3961C16.6233 23.371 14.7939 23.371 13.4347 22.3961Z"
                          fill="black" />
                  </svg>

                  <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">Registration</span>
              </button>
            </router-link>
            <router-link to="/employer/team-management/invitations" >
                <button
                    class="flex items-center font-sixe-[20px] px-12 py-2 rounded-md bg-white text-black text-center text-md shadow">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8 9.5H12M8 13H15M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.1971 3.23374 14.3397 3.65806 15.3845C3.73927 15.5845 3.77988 15.6845 3.798 15.7653C3.81572 15.8443 3.8222 15.9028 3.82221 15.9839C3.82222 16.0667 3.80718 16.1569 3.77711 16.3374L3.18413 19.8952C3.12203 20.2678 3.09098 20.4541 3.14876 20.5888C3.19933 20.7067 3.29328 20.8007 3.41118 20.8512C3.54589 20.909 3.73218 20.878 4.10476 20.8159L7.66265 20.2229C7.84309 20.1928 7.9333 20.1778 8.01613 20.1778C8.09715 20.1778 8.15566 20.1843 8.23472 20.202C8.31554 20.2201 8.41552 20.2607 8.61549 20.3419C9.6603 20.7663 10.8029 21 12 21Z"
                            stroke="#303030" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">Invitations</span>
                </button>
            </router-link>
        </div>
        <div class="py-6 px-8">
            <div class="flex justify-between py-6">
                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="simple-search"
                            class="px-14 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                            placeholder="Search by name" required v-model="getEmpData.name" v-on:keyup="getEmployeesList">
                    </div>
                </form>

                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="simple-search"
                            class="px-14 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                            placeholder="Search by email" required v-model="getEmpData.email" v-on:keyup="getEmployeesList">
                    </div>
                </form>

                <div class="flex flex-row space-x-1">
                    <button
                        class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow" v-b-modal.add-employee-modal>

                        <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="flex-1 text-white ml-3 whitespace-nowrap">Add Employee</span>
                    </button>
                    <button
                        class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow" @click="exportEmployees" >

                        <svg class="mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M337.318 246.398 276 307.716V156c0-11.046-8.954-20-20-20s-20 8.954-20 20v151.716l-61.318-61.318c-7.81-7.811-20.474-7.811-28.284 0-7.811 7.811-7.811 20.474 0 28.285 20.935 20.932 94.304 94.313 95.585 95.573 7.828 7.701 20.408 7.637 28.159-.113l95.46-95.46c7.81-7.811 7.81-20.474 0-28.285s-20.474-7.811-28.284 0z" fill="#ffffff" data-original="#000000" opacity="1" class=""></path><path d="M256 16C123.362 16 16 123.344 16 256c0 132.638 107.343 240 240 240 132.638 0 240-107.343 240-240 0-132.638-107.344-240-240-240zm0 440c-110.28 0-200-89.72-200-200S145.72 56 256 56s200 89.72 200 200-89.72 200-200 200z" fill="#ffffff" data-original="#000000" opacity="1" class=""></path></g></svg>
                        <span class="flex-1 text-white ml-3 whitespace-nowrap">Export</span>
                    </button>
                </div>
            </div>

            <div class="relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-center text-white">
                    <thead class="text-xs text-white bg-[#0A0446]">
                        <tr>
                            <th scope="col" class="px-6 py-4 rounded-tl-lg border-r border-gray-700">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Role
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Profile Type
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Last Login
                            </th>
                            <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-[#090446]">
                        <tr class="bg-white hover:bg-gray-50" v-if="employeesLength" v-for="e in employeesList.data" v-bind:key="e.id">
                            <td scope="row"
                                class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                {{ e.first_name }} {{ e.last_name }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ e.email }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ e.role }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{e.profile_type}}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                <span v-if="e.last_login">{{ e.last_login | timeAgo }}</span><span v-else>Not Logged in yet</span>
                            </td>
                            <td
                                class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">
                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2" @click="getEmployee(e.id)">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_143_2408)">
                                            <path
                                                d="M7.33301 2.66666H4.53301C3.4129 2.66666 2.85285 2.66666 2.42503 2.88464C2.0487 3.07639 1.74274 3.38235 1.55099 3.75867C1.33301 4.1865 1.33301 4.74655 1.33301 5.86666V11.4667C1.33301 12.5868 1.33301 13.1468 1.55099 13.5746C1.74274 13.951 2.0487 14.2569 2.42503 14.4487C2.85285 14.6667 3.4129 14.6667 4.53301 14.6667H10.133C11.2531 14.6667 11.8132 14.6667 12.241 14.4487C12.6173 14.2569 12.9233 13.951 13.115 13.5746C13.333 13.1468 13.333 12.5868 13.333 11.4667V8.66666M5.33299 10.6667H6.44935C6.77547 10.6667 6.93853 10.6667 7.09198 10.6298C7.22803 10.5972 7.35809 10.5433 7.47739 10.4702C7.61194 10.3877 7.72724 10.2724 7.95785 10.0418L14.333 3.66666C14.8853 3.11437 14.8853 2.21894 14.333 1.66666C13.7807 1.11437 12.8853 1.11437 12.333 1.66665L5.95783 8.04182C5.72723 8.27242 5.61193 8.38772 5.52947 8.52228C5.45637 8.64157 5.40249 8.77163 5.36983 8.90768C5.33299 9.06113 5.33299 9.22419 5.33299 9.55031V10.6667Z"
                                                stroke="#0A0446" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_143_2408">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">Edit</span>
                                </button>

                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2"  @click="deleteEmployee(e.id)">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4"
                                            stroke="#6A6767" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <span
                                        class="flex-1 font-medium text-gray-800 ml-3 whitespace-nowrap">Delete</span>
                                </button>

                            </td>
                        </tr>
                    </tbody>
                </table>
                <pagination :data="employeesList" @pagination-change-page="getEmployeesList" />
            </div>
        </div>
    </div>
    <!-- card-10 end -->

    <!--Add employee modal popup-->
    <b-modal id="add-employee-modal" title="Add New Employee" :hide-footer=hideFooter>
      <form>
        <div id="details">
          <div class="form-group">
            <label>Email <span class="err">*</span></label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"
              v-model="employee.email">
          </div>
          <div class="form-group">
            <label>First Name <span class="err">*</span></label>
            <input type="text" class="form-control" id="firstname" placeholder="First Name" v-model="employee.firstname"
              @keypress="alphabetsOnly">
          </div>
          <div class="form-group">
            <label>Last Name <span class="err">*</span></label>
            <input type="text" class="form-control" id="lastname" placeholder="Last Name" v-model="employee.lastname"
              @keypress="alphabetsOnly">
          </div>
          <div class="form-group">
            <label>Role<span class="err">*</span></label>
            <select v-model="employee.role" class="form-control">
              <option value="">Select Role</option>
              <option value="COMPANY_SUB_ADMIN">Subadmin</option>
              <option value="COMPANY_EMP">Employee</option>
            </select>
          </div>
          <!-- <div class="form-group">
            <label>Profile Type<span class="err">*</span></label>
            <select class="form-control" id="profileType" v-model="employee.profileType">
              <option value="">Select Profile Type</option>
              <option v-for="pt in profileType" :value="pt.id" v-bind:key="pt.id">{{ pt.profile_type }}</option>
            </select>
          </div> -->
          <button type="button" @click="addEmployee" class="btn btn-primary"
            :disabled="employee.disabled">Submit</button>
        </div>
      </form>
    </b-modal>
    
    <!--Update employee modal popup-->
    <b-modal id="update-employee-modal" title="Update Employee" :hide-footer=hideFooter>
      <form>
        <div id="update-details">
          <div class="form-group">
            <label>First Name <span class="err">*</span></label>
            <input type="text" class="form-control" id="firstname" placeholder="First Name" @keypress="alphabetsOnly"
              v-model="employeeUpdate.firstname">
          </div>
          <div class="form-group">
            <label>Last Name <span class="err">*</span></label>
            <input type="text" class="form-control" id="lastname" placeholder="Last Name" @keypress="alphabetsOnly"
              v-model="employeeUpdate.lastname">
          </div>
          <div class="form-group">
            <label>Role<span class="err">*</span></label>
            <select v-model="employeeUpdate.role" class="form-control">
              <option value="">Select Role</option>
              <option value="COMPANY_SUB_ADMIN">Subadmin</option>
              <option value="COMPANY_EMP">Employee</option>
            </select>
          </div>
          <!-- <div class="form-group">
            <label>Profile Type<span class="err">*</span></label>
            <select class="form-control" id="profileType" v-model="employeeUpdate.profileType">
              <option value="">Select Profile Type</option>
              <option v-for="pt in profileType" :value="pt.id" v-bind:key="pt.id">{{ pt.profile_type }}</option>
            </select>
          </div> -->
          <button type="button" @click="updateEmployee" class="btn btn-primary"
            :disabled="employeeUpdate.disabled">Submit</button>
        </div>
      </form>
    </b-modal>

</section>
</template>

<script>
/* eslint-disable */
import Api from '../../../router/api'
import AppMixin from '../../../mixins/AppMixin'

export default {
  name: 'Invitations',
  mixins: [AppMixin],
  data() {
    return {
      hideFooter: true,
      employeesList: {},
      employeesLength: 0,
      employee: {
        'link': '',
        'firstname': '',
        'lastname': '',
        'email': '',
        'password': '',
        'disabled': false,
        'role': '',
        'profileType': ''
      },
      employeeUpdate: {
        'id': '',
        'firstname': '',
        'lastname': '',
        'disabled': false,
        'role': '',
        'profileType': ''
      },
      getEmpData: {
        'sortBy': '',
        'name': '',
        'email': '',
        'sortOrder': ''
      }
    }
  },
  methods: {
    exportEmployees: function () {
      let that = this
      Api.exportEmployees(that.company.id, that.getEmpData)
        .then(response => {
          let blob = new Blob([response.data])
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = 'employees.xlsx'
          link.click()
        }
        ).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          });
        });
    },

    getEmployeesList: function (page = 1) {
      let that = this
      Api.getEmployeesList(that.company.id, page, that.getEmpData).then(response => {
        let that = this
        that.employeesList = response.data.res
        that.employeesLength = that.employeesList.data.length
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    },
    addEmployee: function (e) {
      e.preventDefault();
      let that = this;
      if (!that.employee.firstname || !that.employee.lastname || !that.employee.email || !that.employee.role) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        });
      } else {
        that.employee.disabled = true;
        that.employee.link = that.company.employee_registration_link
        Api.registration(that.employee).then(response => {
          that.employee.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Company employee created successfully",
            showConfirmButton: true
          }).then(function () {
            that.$bvModal.hide('add-employee-modal')
            that.getEmployeesList()
          });
        }
        ).catch((error) => {
          that.employee.disabled = false;
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.employee.disabled = false;
          });
        });
      }
    },
    deleteEmployee: function (id) { 
      let that = this
      this.$swal({
        title: 'Are you sure?',
        text: 'All the related info will be deleted, you wont be able to revert !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
          Api.deleteEmployee(id).then(response => {
            this.$swal({
              icon: "success",
              title: "success",
              text: "Deleted Successfully",
              showConfirmButton: true
            }).then(() => {
              that.getEmployeesList()
            });
          }
          ).catch((error) => {
            this.$swal({
              icon: "error",
              title: "error",
              text: error.response.data.message,
              showConfirmButton: true
            });
          });
        }
      })
    },
    getEmployee: function (id) {
      let that = this
      Api.getEmployee(id).then(response => {
        that.$bvModal.show('update-employee-modal')
        that.employeeUpdate.id = response.data.res.id
        that.employeeUpdate.firstname = response.data.res.first_name
        that.employeeUpdate.lastname = response.data.res.last_name
        that.employeeUpdate.role = response.data.res.role
        that.employeeUpdate.profileType = response.data.res.profile_type_id
        console.log(that.employeeUpdate.firstname)
      });
    },
    updateEmployee: function () {
      let that = this;
      if (!that.employeeUpdate.firstname || !that.employeeUpdate.lastname || !that.employeeUpdate.role) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        });
      } else {
        that.employeeUpdate.disabled = true;

        Api.updateEmployee(that.employeeUpdate).then(response => {
          that.employeeUpdate.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Employee details updated successfully",
            showConfirmButton: true
          }).then(function () {
            that.employeeUpdate.disabled = false;
            that.$bvModal.hide('update-employee-modal')
            that.getEmployeesList()
          });
        }
        ).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.employeeUpdate.disabled = false;
          });
        });
      }
    },
  },
  mounted() {
    this.getEmployeesList()
    this.getProfileTypeList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
