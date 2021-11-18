class AddTotalToOrder < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :total, :decimal, :precision => 15, :scale =>2
  end
end
