class User < ApplicationRecord
    has_many :outfits, dependent: :destroy
    has_many :items, dependent: :destroy
    validates :username, presence: true, uniqueness: true
    validates_length_of :items, maximum: 33
end
