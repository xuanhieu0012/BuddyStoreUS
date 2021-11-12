class Store < ApplicationRecord
    belongs_to :owner
    has_many :products
    has_many :reviews, through: :products
end
