class CreateOrderProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :order_products do |t|
      t.belongs_to :order
      t.belongs_to :product
      t.integer :qty
      t.timestamps
    end
  end
end
