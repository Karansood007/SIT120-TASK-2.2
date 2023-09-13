const app = Vue.createApp({
    data() {
        return {
            progressBarWidth: '50%', // Example progress
            recentActivities: ["Completed 'HTML Basics' module.", "Started 'CSS Fundamentals' module."],
            modules: [
                { id: 1, title: 'HTML Basics', description: 'Learn the fundamentals of HTML.' },
                { id: 2, title: 'CSS Fundamentals', description: 'Explore the basics of CSS styling.' }
            ]
        };
    },
    methods: {
        startModule(moduleId) {
            // Implement module start functionality here
            alert(`Starting module ${moduleId}`);
        }
    }
});

app.mount('#app');
