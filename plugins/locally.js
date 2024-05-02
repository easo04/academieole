export default defineNuxtPlugin(() => {
    return {
        provide: {
            locally: {
                getItem(item) {
                    if (process.client) {
                        return localStorage.getItem(item)    
                    } else {
                        return undefined
                    }
                },

                setItem(item, value) {
                    if (process.client) {
                        return localStorage.setItem(item, value)
                    }
                }
            },
            session:{
                getItem(item) {
                    if (process.client) {
                        return sessionStorage.getItem(item)    
                    } else {
                        return undefined
                    }
                },

                setItem(item, value) {
                    if (process.client) {
                        return sessionStorage.setItem(item, value)
                    }
                },

                deleteItem(item) {
                    if(process.client) {
                        return sessionStorage.removeItem(item)
                    }
                }
            }
        }
    }
})