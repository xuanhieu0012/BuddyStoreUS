class AddAdminToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :addmin, :boolean
  end
end
