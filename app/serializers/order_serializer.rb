class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_products, :created_at, :total
  has_many :order_products
end
