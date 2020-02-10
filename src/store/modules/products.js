import Vue from 'vue';

export default {
    namespaced: true,
    state: {
        products: [
            {
                id_product: 1,
                title: "IPhone 5",
                price: '300',
                description: '<div> <p>Apple iPhone 5 smartphone was launched in November 2012. The phone comes with a 4.00-inch touchscreen display with a resolution of  640x1136 pixels at a pixel density of 326 pixels per inch (ppi).</p><p> Apple iPhone 5 is powered by  a 1.3GHz dual-core Apple A6 processor. It comes with 1GB of RAM.</p><p>The Apple iPhone 5 runs iOS 6.1.4 and  is powered by a 1440mAh non-removable battery.</p><p> As far as the cameras are concerned, the Apple iPhone 5 on the rear packs 8-megapixel camera. It sports a 1.2-megapixel camera on the front for selfies.</p><p>Apple iPhone 5 based on iOS 6.1.4 and packs 16GB of inbuilt storage. The Apple iPhone 5 is a single SIM (GSM) smartphone that accepts a Nano-SIM card.</p><p> Connectivity options on the Apple iPhone 5 include Wi-Fi,  GPS, Bluetooth v4.00, 3G, and  4G (with support for Band 40 used by some LTE networks in India). Sensors on the  phone include  accelerometer,  ambient light sensor,  gyroscope,  proximity sensor, and  compass/ magnetometer.</p><p>The Apple iPhone 5 measures 123.80 x 58.60 x 7.60mm (height x width x thickness)  and weighs 112.00 grams. It was launched in Black, Silver, and  White colours.</p><p>As of 10th February 2020, Apple iPhone 5 price in India starts at Rs. 43,750.</p><p></p> </div>',
                image: 'iphone5.jpg'
            },
            {
                id_product: 2,
                title: "IPhone 6",
                price: '400',
                description: '<div> <p>We had high expectations of the iPhone 6 and it lived up to them in nearly every regard. The much-debated move to bigger screens has paid off, and although long-time users might experience a little awkwardness, there are definite benefits. Apple has also once again pulled off major improvements in speed while maintaining reasonable battery life and reducing the thickness of the device. The camera is extraordinarily good, especially in low light. On the downside, storage space is still limited, making the base 16GB model much less attractive than the more expensive 64GB and 128GB models.</p> </div>',
                image: 'iphone6.jpg'
            },
            {
                id_product: 3,
                title: "IPhone 7",
                price: '500',
                description: '<div> <p>Apple iPhone 7 Plus smartphone was launched in September 2016. The phone comes with a 5.50-inch touchscreen display with a resolution of  1080x1920 pixels at a pixel density of 401 pixels per inch (ppi).</p><p> Apple iPhone 7 Plus is powered by  a quad-core Apple A10 Fusion processor. It comes with 3GB of RAM.</p><p>The Apple iPhone 7 Plus runs iOS 10 and  is powered by a 2900mAh non-removable battery.</p><p> As far as the cameras are concerned, the Apple iPhone 7 Plus on the rear packs 12-megapixel camera. It sports a 7-megapixel camera on the front for selfies.</p><p>Apple iPhone 7 Plus based on iOS 10 and packs 32GB of inbuilt storage. The Apple iPhone 7 Plus is a single SIM (GSM) smartphone that accepts a Nano-SIM card.</p><p> Connectivity options on the Apple iPhone 7 Plus include Wi-Fi  802.11 a/b/g/n/ac, GPS, Bluetooth v4.20, 3G, and  4G (with support for Band 40 used by some LTE networks in India). Sensors on the  phone include  accelerometer,  ambient light sensor,  barometer,  gyroscope,  proximity sensor, and  compass/ magnetometer.</p><p>The Apple iPhone 7 Plus measures 158.20 x 77.90 x 7.30mm (height x width x thickness)  and weighs 188.00 grams. It was launched in Black, Gold, Jet Black, Rose Gold, and  Silver colours.</p><p>As of 10th February 2020, Apple iPhone 7 Plus price in India starts at Rs. 34,999.</p><p></p> </div>',
                image: 'iphone7.jpg'
            }
        ]
    },
    getters: {
        products(state){
            return state.products;
        },
        itemsMap(state){
            let itemsMap = [];

            for(let i = 0; i < state.products.length; i++) {
                let product = state.products[i];
                itemsMap[product.id_product] = product;
            }

            return itemsMap;
        },
        item: (state, getters) => (id) => {
            return getters.itemsMap[id];
        }
    },
    // Lines below needed to load products from API
    // mutations: {
    //     loadProducts(state, data){
    //         state.products = data;
    //     }
    // },
    // actions: {
    //     loadProducts(store) {
    //         Vue.http.get('products.php')
    //             .then(response => response.json())
    //             .then(data => {
    //                 store.commit('loadProducts', data);
    //             })
    //     }
    // }
}