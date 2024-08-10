package org.seshadri.service;

import jakarta.persistence.criteria.Order;
import org.seshadri.model.Orders;
import org.seshadri.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public List<Orders> getAllOrders() {
        return orderRepository.findAll();
    }

    public Orders getOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    public Orders createOrder(Orders order) {
        return orderRepository.save(order);
    }

    public Orders updateOrder(Long id, Orders order) {
        Orders existingOrder = orderRepository.findById(id).orElse(null);
        if (existingOrder != null) {
            existingOrder.setProduct(order.getProduct());
            existingOrder.setQuantity(order.getQuantity());
            existingOrder.setPrice(order.getPrice());
            return orderRepository.save(existingOrder);
        } else {
            return null;
        }
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }
}

