class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :content_desc
      t.integer :rating
      t.belongs_to :user
      t.belongs_to :product

      t.timestamps
    end
  end
end
