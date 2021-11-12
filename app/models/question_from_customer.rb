class QuestionFromCustomer < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true
    validates :description, length: {minimum: 5}
end
