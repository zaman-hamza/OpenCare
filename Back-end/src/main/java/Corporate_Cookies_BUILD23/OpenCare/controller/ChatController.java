package Corporate_Cookies_BUILD23.OpenCare.controller;

import Corporate_Cookies_BUILD23.OpenCare.Service.MessageService;
import Corporate_Cookies_BUILD23.OpenCare.Service.ThreadsService;
import Corporate_Cookies_BUILD23.OpenCare.model.Message;
import Corporate_Cookies_BUILD23.OpenCare.model.MessageRequest;
import Corporate_Cookies_BUILD23.OpenCare.model.Status;
import Corporate_Cookies_BUILD23.OpenCare.model.Threads;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/api/message")
public class ChatController {
    private final MessageService messageService;
    private final ThreadsService threadsService;

    public ChatController(MessageService messageService, ThreadsService threadsService) {
        this.messageService = messageService;
        this.threadsService = threadsService;

    }
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;
    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    private Message receivePublicMessage(@Payload Message message) {
        return message;
    }

    @MessageMapping("/private-message")
    public Message receivePrivateMessage(@Payload Message message) {
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(),"/private", message);
        return message;
    }


    @PostMapping("/addanswer")
    public ResponseEntity<Message> saveMessage(@RequestBody MessageRequest messageRequest) {

        Threads threads = threadsService.getThreadsById(messageRequest.getThreadsId());
        System.out.println();
        String statuss = messageRequest.getStatus();
        Status status =Status.NA;
        switch(statuss) {
            case "JOIN":
                status = Status.JOIN;
                break;
            case "MESSAGE":
                status = Status.MESSAGE;
                break;
            case "LEAVE":
                status = Status.LEAVE;
                break;

        }
        Message newMessage = new Message(messageRequest.getSenderName(), messageRequest.getReceiverName(),
                messageRequest.getMessage(), status, threads);
        Message savedMessage = messageService.saveMessage(newMessage);
        return new ResponseEntity<>(savedMessage, HttpStatus.CREATED);
    }

    @GetMapping("/threads/{id}")
    public List<Message> getMeesagesByThreads(@PathVariable("id") long id){

        return messageService.getMessagesByThreads(id);
    }


}
