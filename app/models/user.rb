class User < ApplicationRecord
    has_many :items
    has_secure_password
    validates :username, presence: true, uniqueness: true
    validates :password, length: {minimum: 10, maximum: 64}
end
