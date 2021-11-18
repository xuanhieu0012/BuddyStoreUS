class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content_desc, :rating, :username
end
