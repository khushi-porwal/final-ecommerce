import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 px-4 sm:px-8 md:px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 text-sm text-gray-700">
        {/* Fruit & Vegetables */}
        <div>
          <h3 className="font-bold text-base text-gray-900 mb-4">FRUIT & VEGETABLES</h3>
          <ul className="space-y-2">
            <li>Fresh Vegetables</li>
            <li>Herbs & Seasonings</li>
            <li>Fresh Fruits</li>
            <li>Cuts & Sprouts</li>
            <li>Exotic Fruits & Veggies</li>
            <li>Packaged Produce</li>
            <li>Party Trays</li>
          </ul>
        </div>

        {/* Breakfast & Dairy */}
        <div>
          <h3 className="font-bold text-base text-gray-900 mb-4">BREAKFAST & DAIRY</h3>
          <ul className="space-y-2">
            <li>Milk & Flavoured Milk</li>
            <li>Butter and Margarine</li>
            <li>Cheese</li>
            <li>Eggs Substitutes</li>
            <li>Honey</li>
            <li>Marmalades</li>
            <li>Sour Cream and Dips</li>
            <li>Yogurt</li>
          </ul>
        </div>

        {/* Meat & Seafood */}
        <div>
          <h3 className="font-bold text-base text-gray-900 mb-4">MEAT & SEAFOOD</h3>
          <ul className="space-y-2">
            <li>Breakfast Sausage</li>
            <li>Dinner Sausage</li>
            <li>Beef</li>
            <li>Chicken</li>
            <li>Sliced Deli Meat</li>
            <li>Shrimp</li>
            <li>Wild Caught Fillets</li>
            <li>Crab and Shellfish</li>
            <li>Farm Raised Fillets</li>
          </ul>
        </div>

        {/* Beverages */}
        <div>
          <h3 className="font-bold text-base text-gray-900 mb-4">BEVERAGES</h3>
          <ul className="space-y-2">
            <li>Water</li>
            <li>Sparking Water</li>
            <li>Soda & Pop</li>
            <li>Coffee</li>
            <li>Milk & Plant-Based Milk</li>
            <li>Tea & Kombucha</li>
            <li>Drink Boxes & Pouches</li>
            <li>Craft Beer</li>
            <li>Wine</li>
          </ul>
        </div>

        {/* Breads & Bakery */}
        <div>
          <h3 className="font-bold text-base text-gray-900 mb-4">BREADS & BAKERY</h3>
          <ul className="space-y-2">
            <li>Bread & Buns</li>
            <li>Bagels & English Muffins</li>
            <li>Pastries & Doughnuts</li>
            <li>Cookies</li>
            <li>Crackers</li>
            <li>Muffins & Cupcakes</li>
            <li>Specialty Breads</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
