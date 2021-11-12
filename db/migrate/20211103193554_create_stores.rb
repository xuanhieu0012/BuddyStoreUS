class CreateStores < ActiveRecord::Migration[6.1]
  def change
    create_table :stores do |t|
      t.string :name
      t.belongs_to :owner
      t.timestamps
    end
  end
end
