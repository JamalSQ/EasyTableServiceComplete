const listPizza = (req, res) => {
    const title="Pizza"
    const category="Pizza"
    
    const products = [
        { name: 'Pizza 1', category: category, price: 10 },
        { name: 'Pizza 2', category: category, price: 15 },
        { name: 'Pizza 3', category: category, price: 10 },
        { name: 'Pizza 4', category: category, price: 15 },
        { name: 'Pizza 5', category: category, price: 10 },
        { name: 'Pizza 6', category: category, price: 15 },
        { name: 'Pizza 7', category: category, price: 10 },
        { name: 'Pizza 8', category: category, price: 15 },
        { name: 'Pizza 9', category: category, price: 10 },
        { name: 'Pizza 10', category: category, price: 15 },

    ];

    res.render('products',{title:title,products:products});
  };
  
  const listDrinks = (req, res) => {
    const title="Drinks"
    const category="Drinks"
    const drinks = [
        { name: 'Drinks 1', category: category, price: 10 },
        { name: 'Drinks 2', category: category, price: 15 },
        { name: 'Drinks 3', category: category, price: 10 },
        { name: 'Drinks 4', category: category, price: 15 },
        { name: 'Drinks 5', category: category, price: 10 },
        { name: 'Drinks 6', category: category, price: 15 },
        { name: 'Drinks 7', category: category, price: 10 },
        { name: 'Drinks 8', category: category, price: 15 },
        { name: 'Drinks 9', category: category, price: 10 },
        { name: 'Drinks 10', category: category, price: 15 }
    ];
    res.render('products',{title:title,products:drinks});
  };
  
  const listDesi = (req, res) => {
    const title="Desi"
    const category="Desi"
    
    const desi = [
        { name: 'Desi 1', category: category, price: 10 },
        { name: 'Desi 2', category: category, price: 15 },
        { name: 'Desi 3', category: category, price: 10 },
        { name: 'Desi 4', category: category, price: 15 },
        { name: 'Desi 5', category: category, price: 10 },
        { name: 'Desi 6', category: category, price: 15 },
        { name: 'Desi 7', category: category, price: 10 },
        { name: 'Desi 8', category: category, price: 15 },
        { name: 'Desi 9', category: category, price: 10 },
        { name: 'Desi 10', category: category, price: 15 }
    ];
    res.render('products',{title:title,products:desi});
  };
  
  export default {
    listPizza,
    listDrinks,
    listDesi
  };
  