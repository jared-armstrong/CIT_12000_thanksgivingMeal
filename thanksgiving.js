const thanksgivingMeal = {
    starter : { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree : {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables : {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
            },
        sides : {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
            },
        calories: 450
        },
    dessert : {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost : 25.0,
    senior_discount: .10,
    prettyPrint : function(menuDisplay){
        // Collate the menu here
       // display the content of the starter, the entree and the 
       //
       menuDisplay = "";

    },
    totalPrice() {
        discount = this.total_cost * this.senior_discount;
        discountCost = this.total_cost - discount;
        return discountCost;
    },
    totalCalories : function() {
        // Add the total calories
        return (this.starter.calories + this.entree.calories + this.dessert.calories);
    },
    caloriesFrom: function(indicator) {
        // get the total calories for the indicator
        // 1 - starter, 2 - entree, 3 - dessert
        this.starter.calories = indicator(1);
        this.entree.calories = indicator(2);
        this.dessert.calories = indicator(3);
       
        calorieSum = indicator(1) + indicator(2) + indicator(3);
        return(calorieSum);
    } 
};

let menuDisplay = document.querySelector(".fullMeal");
menuDisplay.innerHTML = "Start your meal with honeydew melon, a glass of moscato. Help yourself to Turkey or Stuffed green peppers, with Radacchio. Frecnh beans and Creamed mashed potatoes. Have a side! Plenty of garlic bread rolls and Macroni and Cheese. Finish your meal with a sweet pumpkin vanilla ice cream, frosted pumpkin pie!";

let displayPrice = document.querySelector(".priceInfo");
displayPrice.innerHTML = "Seniors get a 10% discount, the total cost for your Thanksgiving Meal? Adults: " + thanksgivingMeal.total_cost + ", Seniors: " + thanksgivingMeal.totalPrice() + " .";

let indicatorTotal = document.querySelector(".calorieInfo");
indicatorTotal.innerHTML = "Worried about calories? Total damage is " + thanksgivingMeal.caloriesFrom(calorieSum) + " (starter:" + thanksgivingMeal.starter.calories + ", entree: " + thanksgivingMeal.entree.calories + ", dessert: " + thanksgivingMeal.dessert.calories + ")";  
