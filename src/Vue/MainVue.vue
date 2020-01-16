<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
                left
        >
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-contact-mail</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
                app
                color="cyan"
                dark
        >
            <v-toolbar-title>Application</v-toolbar-title>

            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-spacer />
        </v-app-bar>

        <v-content>

        </v-content>

        <v-footer
                color="cyan"
                app
        >
            <v-spacer />

            <span class="white--text">&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
    import { ipcRenderer } from 'electron';
    export default {
        name: 'main-vue',
        data: () => ({
           drawer: false,
        }),
        mounted() {
            ipcRenderer.send('message', {
                command: 'checkNumbers',
                numbers: [
                    '79132343454',
                ],
            }); //отправляем сообщение в main
            ipcRenderer.on('message', (event, data) => {
                console.log(data); //Слушаем сообщение от main
            });
        }
    }
</script>
