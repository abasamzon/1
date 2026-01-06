// config.js
// === إعدادات المتجر (قم بتعديل البيانات هنا لكل زبون) ===

window.MY_STORE_CONFIG = {
    // 1. إعدادات Firebase (الجديدة)
    firebase: {
        apiKey: "AIzaSyCgkFgl6A2Nxrw0AlZnHvLY7e2iS0CeyJ4",
        authDomain: "klj-c094b.firebaseapp.com",
        databaseURL: "https://klj-c094b-default-rtdb.firebaseio.com",
        projectId: "klj-c094b",
        storageBucket: "klj-c094b.firebasestorage.app",
        messagingSenderId: "412021688396",
        appId: "1:412021688396:web:4a93b27824cfc52055cce9",
        measurementId: "G-NKW82Z038E"
    },

    // 2. إعدادات الصور (Cloudinary)
    cloudinary: {
        cloudName: "dongmlmoj",
        uploadPreset: "app_upload"
    },

    // 3. رمز دخول الأدمن
    security: {
        adminCode: "55555"
    }
};
