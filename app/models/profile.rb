class Profile < ApplicationRecord
    validates :fullname, presence: true
    validates :birddate, presence: true
    validates :phone_number, presence: true
    validates :email, presence: true
    belongs_to :user
end
