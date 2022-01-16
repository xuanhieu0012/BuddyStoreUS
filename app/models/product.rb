class Product < ApplicationRecord
    validates :name, presence: true
    validates :description, presence: true, allow_blank: true 
    has_many :order_products
    has_many :orders, through: :order_products
    belongs_to :store
    has_many :reviews

end
