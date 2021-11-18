class OrdersController < ApplicationController

    def index
        if current_user.addmin
            render json: Order.all, status: :ok
        else
            render json: current_user.orders.as_json(except: ["created_at", "updated_at"]) , status: :ok
        end
    end

    def create
        byebug
            o = Order.create(order_params)
            render json: o, status: :created
        
    end

    private 
    def order_params
        params.permit(:user_id,:total,  order: [:name, :price, :qty])
    end
end
