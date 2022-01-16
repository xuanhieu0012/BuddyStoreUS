class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :addmin
  has_one :profile

end
