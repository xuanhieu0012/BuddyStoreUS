class QuestionFromCustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :description
end
