module DevManager
  module TimeHelper

    def start_of_last_30_days
      (Date.today - 30).to_s
    end

    def timestamp_30_days_ago
      (Time.now - 30.days).to_i
    end

  end
end
