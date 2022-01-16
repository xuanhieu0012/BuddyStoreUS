class ProfilesController < ApplicationController
    
    def create
            
            p = Profile.create(profile_params)
            render json: p, status: :ok
    
    end
    def update
        
        p = Profile.find_by(id: params[:id])
        p.update( profile_params)
    end
    private

    def profile_params
        params.permit(:fullname,:birthday, :address, :email, :phone_number, :user_id, :id)
    end
end
