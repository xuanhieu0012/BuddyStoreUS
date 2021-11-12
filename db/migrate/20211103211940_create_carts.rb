class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.string :product_name
      t.integer :price
      t.integer :quantity
      t.belongs_to :user

      t.timestamps
    end
  end
end
