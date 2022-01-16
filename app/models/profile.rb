class Profile < ApplicationRecord
    validates :fullname, presence: true
    validates :birthday, presence: true
    validates :phone_number, presence: true
    validates :email, presence: true
    belongs_to :user
end
