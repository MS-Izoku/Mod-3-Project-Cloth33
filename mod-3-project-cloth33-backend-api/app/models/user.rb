class User < ApplicationRecord
    has_secure_password
    has_many :outfits, dependent: :destroy
    has_many :items, dependent: :destroy
    validates :username, presence: true, uniqueness: true
    #validates :password, presence: true
    validates_length_of :items, maximum: 32
end
