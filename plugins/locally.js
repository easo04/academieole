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
            },
            cookies:{
                getCookie(key) {
                    if (process.client) {
                        const match = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
                        if (match !== null && match.length > 0) {
                            return match.pop();
                        }
                        return undefined;
                    } else {
                        return undefined
                    }
                },

                setCookie(key, value, domain) {
                    if (process.client) {
                        return document.cookie = `${key}=${value}; expires=31536000000; domain=${domain}; path=/`;
                    }
                },
                deleteCookie(key, domain){
                    if(process.client){
                        return document.cookie = `${key}=${''}; SameSite=Lax; Secure; max-age=0; domain=${domain}; path=/`;
                    }
                }
            }
        }
    }
})