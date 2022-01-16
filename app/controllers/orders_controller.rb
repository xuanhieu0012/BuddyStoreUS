class OrdersController < ApplicationController

    def index
        if current_user.addmin
            render json: Order.all, status: :ok
        else
            
            render json: current_user.orders, status: :ok
        end
    end

    def create
            
            o = Order.create(order_params)
            
            params[:order].each {|orderx|  OrderProduct.create(order_id: o.id, product_id: orderx[:id], qty: orderx[:qty])}
            
        
    end

    private 
    def order_params

        params.permit(:user_id, :total)
    end
end
