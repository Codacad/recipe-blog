import React from 'react'

const Ingredients = () => {
  return (
    <div className='ingredients'>
        <h2>Ingredients</h2>
        <div className="graham-craker-crust">
            <h3>Graham Cracker Crust</h3>
            <div className="contents">
                <div className="graham-cracker-crumbs graham">
                    <input type="checkbox" />
                    <p>1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10 full sheet graham crackers)</p>
                </div>
                <div className="unsalted-butter graham">
                    <input type="checkbox" />
                    <p>5 Tablespoons (70g) <b>unsalted butter</b>, melted</p>
                </div>
                <div className="granulated-suger graham">
                    <input type="checkbox" />
                    <p>1/4 cup (50g) <b>granulated</b> sugar</p>
                </div>
            </div>
        </div>
        <div className="cheesecake">
            <h3>Cheesecake</h3>
            <div className="contents">
                <div className="cream-cheese cheese-cake">
                    <input type="checkbox" />
                    <p>four 8-ounce blocks (904g) full-fat <b>cream cheese</b>, softened to room temperature</p>
                </div>
                <div className="granulated-suger cheese-cake">
                    <input type="checkbox" />
                    <p>1 cup (200g) <b>granulated sugar</b></p>
                </div>
                <div className="sour-cream cheese-cake">
                    <input type="checkbox" />
                    <p>1 cup (240g) full-fat <b>sour cream</b>, at room temperature</p>
                </div>
                <div className="pure-vanilla-extract cheese-cake">
                    <input type="checkbox" />
                    <p>1 teaspoon <b>pure vanilla extract</b></p>
                </div>
                <div className="fresh-lemon-juice cheese-cake">
                    <input type="checkbox" />
                    <p>2 teaspoons <b>fresh lemon juice</b> (optional, but recommended)</p>
                </div>
                <div className="eggs cheese-cake">
                    <input type="checkbox" />
                    <p>3 large <b>eggs</b>, at room temperature</p>
                </div>
                <div className="topping-suggetions cheese-cake">
                    <input type="checkbox" />
                    <p>topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ingredients