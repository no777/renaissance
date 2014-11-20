json.array!(@courses) do |course|
  json.extract! course, :id, :name, :description, :cover_image_url, :start_at, :end_at, :score, :difficulty, :price, :duration, :type, :peoples, :canvas_id
  json.url course_url(course, format: :json)
end
