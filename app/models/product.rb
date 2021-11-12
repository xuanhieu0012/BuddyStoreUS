class Product < ApplicationRecord
    validates :name, presence: true
    validates :description, presence: true, allow_blank: true 
    belongs_to :store
    has_many :reviews
end
