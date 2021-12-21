<template>
    <div class="fixed-top">
        <slide left width="250">
            <h5 class="font-weight-bold text-light nav-link">SRHセミナー2021</h5>
            <router-link :to="{ name: 'home' }" class="nav-link nav-button">Home</router-link>
            <router-link :to="{ name: 'sendai' }" class="nav-link nav-button">仙台会場</router-link>
            <router-link :to="{ name: 'niigata' }" class="nav-link nav-button">新潟会場</router-link>
            <router-link :to="{ name: 'miyazaki' }" class="nav-link nav-button">宮崎会場</router-link>
            <router-link :to="{ name: 'nagoya' }" class="nav-link nav-button">名古屋会場</router-link>
            <router-link :to="{ name: 'sapporo' }" class="nav-link nav-button">札幌会場</router-link>
            <router-link :to="{ name: 'fukuoka' }" class="nav-link nav-button">福岡会場</router-link>
        </slide>
    </div>
</template>
