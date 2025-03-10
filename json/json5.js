const orderData = {
    orderId: "ORD-IN-567890",
    user: {
        userId: 20245,
        name: {
            first: "Rahul",
            middle: "Kumar",
            last: "Sharma"
        },
        contact: {
            email: "rahul5sharma@gmail.com",
            phone: "9876543210"
        },
        address: {
            home: {
                street: "45, MG Road",
                city: "Mumbai",
                state: "Maharashtra",
                zip: "400001",
                country: "India"
            },
            office: {
                street: "10, Nariman Point",
                city: "Mumbai",
                state: "Maharashtra",
                zip: "400021",
                country: "India"
            }
        }
    },
    items: [
        {
            productId: "P67891",
            details: {
                name: "Noise Cancelling Headphones",
                category: "Electronics",
                brand: "Sony",
                model: "WH-1000XM4",
                specs: {
                    color: "Black",
                    batteryLife: "30 hours",
                    wireless: true
                }
            },
            pricing: {
                pricePerUnit: 4999.00,
                discount: 500.00,
                finalPrice: 4499.00
            },
            quantity: 1
        },
        {
            productId: "P34567",
            details: {
                name: "Wireless Mouse",
                category: "Computers",
                brand: "Logitech",
                model: "MX Master 3",
                specs: {
                    color: "Grey",
                    dpi: 4000,
                    wireless: true
                }
            },
            pricing: {
                pricePerUnit: 1499.00,
                discount: 200.00,
                finalPrice: 1299.00
            },
            quantity: 2
        }
    ],
    payment: {
        method: {
            type: "UPI",
            provider: "Google Pay",
            upiId: "rahulsharma@okhdfcbank"
        },
        status: "Paid",
        transactionId: "TXN-IN-123456789",
        processedAt: "2025-02-1819:45:00"
    },
    shipping: {
        method: {
            type: "Standard",
            provider: "Blue Dart",
            estimatedDays: 4
        },
        tracking: {
            trackingNumber: "TRK-IN-987654321",
            currentStatus: "Shipped",
            lastUpdated: "2025-02-19 11:00:00"
        },
        address: "home"
    },
    totalSummary: {
        subtotal: 7997.00,
        totalDiscount: 900.00,
        totalAmount: 7097.00,
        currency: "INR"
    },
    timestamps: {
        orderPlaced: "2025-02-18 18:30:00",
        lastUpdated: "2025-02-19 11:00:00"
    }
};