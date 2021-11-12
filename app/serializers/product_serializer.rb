class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :description, :image_url
  has_many :reviews
end
