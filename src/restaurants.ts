type Restaurant = {
  category: string;
  name: string;
  distance?: number;
  menu: string[];
};

class RestaurantCollection {
  restaurants: Restaurant[];

  constructor() {
    this.restaurants = [];
  }

  add(restaurant: Restaurant): void {
    this.restaurants.push(restaurant);
    return;
  }

  filterByCategory(category: string): Restaurant[] {
    return this.restaurants.filter(
      (restaurant) => restaurant.category === category
    );
  }
}
