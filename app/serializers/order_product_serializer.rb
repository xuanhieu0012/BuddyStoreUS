class OrderProductSerializer < ActiveModel::Serializer
  attributes :id, :qty, :order_id, :product_id, :product_details
end
