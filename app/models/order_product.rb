class OrderProduct < ApplicationRecord
    belongs_to :order
    belongs_to :product
    attribute :product_details

    def product_details
        self.product
    end
end
