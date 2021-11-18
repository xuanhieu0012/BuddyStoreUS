class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order, :total
end
