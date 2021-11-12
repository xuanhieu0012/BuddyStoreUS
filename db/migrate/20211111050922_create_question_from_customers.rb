class CreateQuestionFromCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :question_from_customers do |t|
      t.string :name
      t.string :email
      t.string :description

      t.timestamps
    end
  end
end
