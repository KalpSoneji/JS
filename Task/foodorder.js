const item = prompt("Enter item");

const foodOrder = (item) => {

    if (item === "pizza") {

        return {
            OrderID: "PZ1",
            Time: "8:02",
            msg: "Order successful",
            Item: "Pizza",
            Price: "5$",
            orderStatus: true,
        };

    } 
    
    else {
        
        return {

            msg: "Order cancel",
            orderStatus: false,

        };

    }
    
};

const order = foodOrder(item);

console.log(order);

if (order.orderStatus) {
    
    const payment = (price) => {
        
        alert(`Pay ${price}`);
        console.log(`Pay ${price}`);

    };

    payment(order.Price);

}