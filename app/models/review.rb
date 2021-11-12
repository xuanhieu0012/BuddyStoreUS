class Review < ApplicationRecord
    validates :content_desc, length: {minimum: 5}
    validates :rating,  numericality: { only_integer: true }
    belongs_to :user
    belongs_to :product
end
