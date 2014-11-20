Canvas.client.token = 'RM14FSnQXEoDW9J03IWh1n1hKPbs6nH5PSXgMXzatzwOGAasbTFtqW5MzOsG6fOT'
Canvas.client.url = 'http://192.168.1.115:3000'

class CoursesController < ApplicationController
  before_action :set_course, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def tag_cloud
    @tags = Course.tag_counts_on(:tags)
    logger.debug @tags
  end

  def tag
    @courses = Course.tagged_with(params[:id])
    @tags = Course.tag_counts_on(:tags)
    render :action => 'index'
  end
  
  def index
    @tags = Course.tag_counts_on(:tags)
    logger.debug @tags

    @courses = Course.all
    respond_with(@courses)
  end

  def show
    @tags = @course.tag_counts_on(:tags)
 
    respond_with(@course)
  end

  def new
    @course = Course.new
    respond_with(@course)
  end

  def edit
  end

  def create
    @course = Course.new(course_params)
    @course.save
    respond_with(@course)
  end

  def update
    @course.update(course_params)
    respond_with(@course)
  end

  def destroy
    @course.destroy
    respond_with(@course)
  end

  def list_canvas_courses
    @courses_canvas = Canvas.client.get 'courses'
    logger.debug "courses: #{@courses_canvas}" 
    @courses = []
    @courses_canvas.each do |course|
      if( true === is_imported(course["id"]))
      else
        # logger.debug format("have not imported:%d" , course["id"])
        @courses << course
      end
    end
    respond_with(@courses)
  end

  def import
    id = params[:id]
    url = format "courses/%d", id 
    
    logger.debug "url: #{url}" 
    
    @courses = Canvas.client.get url
    @canvas_course = @courses
    logger.debug "courses: #{@canvas_course}" 
    @course = Course.new
    @course.canvas_id = @canvas_course["id"]
    @course.name = @canvas_course["name"]
    @course.start_at = @canvas_course["start_at"]
    @course.end_at = @canvas_course["end_at"]
    @course.save
  end



  def enroll_course
    id = params[:id]
    @course = Course.find(params[:id])
    url  = format "courses/%d/enrollments", @course.canvas_id
    logger.debug "url" +url
    user_id = 3
    preload = { user_id: user_id ,
                type: 'StudentEnrollment',
                enrollment_state: 'active',
                # course_section_id: 1,
                limit_privileges_to_course_section: true,
                notify:false
              }
    logger.debug preload
                                       
    Canvas.client.post url, enrollment: preload


  end  

 

  private 

  def is_imported(id)
     @where = "canvas_id="+format("%d", id)
     # logger.debug @where
     @course = Course.where(:canvas_id => id).first

    if @course != nil 
      # logger.debug @course
      logger.debug format("is imported:%d" , id)
      return true
    else
      return false
    end
  end


  private
    def set_course
      @course = Course.find(params[:id])
    end

    def course_params
      params.require(:course).permit(:name, :tag_list, :description, :cover_image_url, :start_at, :end_at, :score, :difficulty, :price, :duration, :type, :peoples, :canvas_id)
    end
end
