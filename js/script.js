const { createApp } = Vue

createApp({
    data() {
        return {
            todo: {
                newItem: {
                    text: "",
                    done: false,
                },
                item: [
                    {
                        text: "Recruiting blog post",
                        done: true,
                    },
                    {
                        text: "Mobile app luaunch",
                        done: true,
                    },
                    {
                        text: "Interview John H.",
                        done: false,
                    },
                    {
                        text: "Summit update to mobile storefronts",
                        done: true,
                    },
                ],
            },
        };
    
    },

    methods: {
        addItems: function () {
           this.todo.item.push({ ...this.todo.newItem });
           this.todo.newItem.text = "";
        },
       
    },
}).mount('#app');