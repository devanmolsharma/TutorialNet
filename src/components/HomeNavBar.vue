<template>
    <CreateProjectForm />
    <LoginForm @login="$emit('login')" />
    <nav class="navbar navbar-dark navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">&nbsp;&nbsp;&nbsp;TutorialNet</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#" @click="navigateToHome">Home</a>
                    </li>
                    <li class="nav-item dropdown" v-if="loggedIn">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Hi <div id="username">{{ username }}</div>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" @click="logout" href="#">Logout</a></li>
                        </ul>
                    </li>
                    <li v-if="username" class="nav-item"><a class="nav-link" data-bs-toggle="modal"
                            data-bs-target="#projectModal" href="#">Add
                            Tutorial</a></li>
                    <li v-if="!loggedIn" class="nav-item">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>

<script>
import LoginForm from './LoginForm.vue';
import CreateProjectForm from './CreateProjectForm.vue';
export default {
    emits: ["search", "login"]
    ,
    components: { LoginForm, CreateProjectForm },
    props: ['loggedIn',
        'name',
        'username',
        'email'],

    methods: {
        deleteAllCookies() {
            const cookies = document.cookie.split(";");

            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i];
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
        },
        logout() {
            this.deleteAllCookies();
            // this.loggedIn = false;
            localStorage.removeItem("username")
            localStorage.removeItem('email')
            localStorage.removeItem('name')
            localStorage.removeItem('isModerator')
            location.reload();
        },
        navigateToHome() {
            this.$router.push('/');
            setTimeout(() => {
                location.reload();
            }, 200);
        }
    }
}
</script>
<style>
.navbar {
    position: absolute;
    min-height: 80px;
    min-width: 100vw;
    z-index: 10;
}

.Hi.nav-item {
    margin: 4px;
}

#username {
    display: inline;
}
</style>