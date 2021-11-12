class CartSerializer < ActiveModel::Serializer
  attributes :id, :product_name, :price
end
