class User < ApplicationRecord
    has_many :reviews
    has_many :products, through: :store
    has_one :profile
    has_many :carts
    has_many :orders
    has_many :order_products, through: :orders
    has_many :products, through: :order_products
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, presence: true


  
end
