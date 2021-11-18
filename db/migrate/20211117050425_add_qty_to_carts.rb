class AddQtyToCarts < ActiveRecord::Migration[6.1]
  def change
    add_column :carts, :qty, :integer
  end
end
