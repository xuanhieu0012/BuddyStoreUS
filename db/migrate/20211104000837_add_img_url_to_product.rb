class AddImgUrlToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :image_url, :string, array: true
  end
end
