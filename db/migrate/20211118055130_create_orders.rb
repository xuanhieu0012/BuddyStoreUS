class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.text :order, array: true, default: []
      t.belongs_to :user
      t.timestamps
    end
  end
end
