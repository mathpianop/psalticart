class Comment < ApplicationRecord
  belongs_to :question
  belongs_to :member
end
