class Event < ApplicationRecord
  belongs_to :user
  has_one_attached :photo, dependent: :destroy
  has_many :messages, dependent: :destroy
  has_many :bookings, dependent: :destroy
  validates :name, :price, :location, :max_booking, presence: true
  validate :ends_at_after_starts_at
  validates :starts_at, :ends_at, presence: true,
            inclusion: { in: (Date.today..Date.today + 1.years) }
  geocoded_by :location
  after_validation :geocode, if: :will_save_change_to_location?

  private

  def ends_at_after_starts_at
    return if ends_at.blank? || starts_at.blank?

    if ends_at < starts_at
      errors.add :end_at, "Doit être postérieure à la date de début de réservation"
    end
  end
end
