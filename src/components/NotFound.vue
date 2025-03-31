<script setup lang="ts"></script>

<template>
       <main className="grid h-screen px-6 py-16 bg-white place-items-center sm:py-24 lg:px-8">
              <div className="text-center transform -translate-y-8">
                     <p className=" text-5xl font-semibold text-indigo-600">404</p>
                     <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 text-balance sm:text-7xl">页面不存在</h1>
                     <p className="mt-6 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8">抱歉，我们找不到您要找的页面。</p>
                     <div className="flex items-center justify-center mt-10 gap-x-6">
                            <router-link
                                   to="/"
                                   className="rounded-md bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                   >返回首页</router-link
                            >
                     </div>
              </div>
       </main>
</template>

<style scoped></style>
