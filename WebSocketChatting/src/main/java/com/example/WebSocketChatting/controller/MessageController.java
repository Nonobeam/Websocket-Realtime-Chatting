package com.example.WebSocketChatting.controller;

import com.example.WebSocketChatting.handler.ReactiveWebSocketHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class MessageController {

    private final ReactiveWebSocketHandler webSocketHandler;

    @Autowired
    public MessageController(ReactiveWebSocketHandler webSocketHandler) {
        this.webSocketHandler = webSocketHandler;
    }


    @GetMapping("/sendToChanel/{message}")
    public Mono<Void> sendMessageToChanel(@PathVariable String message) {
        webSocketHandler.sendMessageToChanel(message);
        return Mono.empty();
    }
}