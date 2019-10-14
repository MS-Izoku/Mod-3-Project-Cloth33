class UsersController < ApplicationController
    
    def index
        users = User.all
        render json: users.to_json(include: {
            items: {except: [:created_at , :updated_at]} ,
            outfits: {except: [:created_at , :updated_at] , include: {
                items: {except: [:created_at , :updated_at]}
            }}
        },
        except: [:created_at , :updated_at])
    end

    def login
        user = User.find_by(username: params[:username])
        
        if user
  
        render json: user.to_json(include: {
            items: {except: [:created_at , :updated_at]} ,
            outfits: {except: [:created_at , :updated_at] , include: {
                items: {except: [:created_at , :updated_at]}
            }}
        },
        except: [:created_at , :updated_at])
        else
            render json: {error: 'Invalid login info, please try again.'}
        end 
    end 


    def create
        user = User.new(user_params)
        if user.save 
            render json: user.to_json(except: [:created_at , :updated_at])

        elsif user.username == ''
            render json: {error: 'Please Enter a Username'}

        else
            render json: {error: 'Username already exists, please choose another'}
        end 
    end 

    def show 
        #user = User.find_by(username: params[:username])
        user = User.find_by(id: params[:id])

        #render json: user, include: [:items]
        render json: user.to_json(include: {
            items: {except: [:created_at , :updated_at]} ,
            outfits: {except: [:created_at , :updated_at] , include: {
                items: {except: [:created_at , :updated_at]}
            }}
        },
        except: [:created_at , :updated_at])

    end 

    def destroy
        User.find_by(id: params[:id]).destroy
        render json: "User Deleted!"
    end

    private
    def user_params 
        params.require(:user).permit(:username)
    end 

end
