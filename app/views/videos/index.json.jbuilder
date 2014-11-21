json.array!(@videos) do |video|
  json.extract! video, :id, :name, :course_id, :url, :description, :create_at, :duration, :format
  json.url video_url(video, format: :json)
end
