package Corporate_Cookies_BUILD23.OpenCare.controller;


import Corporate_Cookies_BUILD23.OpenCare.Service.MessageService;
import Corporate_Cookies_BUILD23.OpenCare.Service.ThreadsService;
import Corporate_Cookies_BUILD23.OpenCare.model.Message;
import Corporate_Cookies_BUILD23.OpenCare.model.MessageRequest;
import Corporate_Cookies_BUILD23.OpenCare.model.Status;
import Corporate_Cookies_BUILD23.OpenCare.model.Threads;
import com.mysql.cj.Messages;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/threads")
public class ThreadController {

    private ThreadsService threadsService;
    private MessageService messageService;

    public ThreadController(ThreadsService threadsService) {
        this.threadsService = threadsService;

    }




    //Add New Thread
    @PostMapping("/add")
    public ResponseEntity<Threads> saveThreads(@RequestBody Threads threads){

        return new ResponseEntity<Threads>(threadsService.saveThreads(threads), HttpStatus.CREATED);

    }

    // Get List of available Threads
    @GetMapping("/all")
    public List<Threads> getAllThreads(){
        return threadsService.getAllThreads();
    }

    @GetMapping("{id}")
    public ResponseEntity<Threads> getThreadsById(@PathVariable("id") long id){
        return new ResponseEntity<Threads>(threadsService.getThreadsById(id),HttpStatus.OK);
    }

    @GetMapping("/message/{id}")
    public ResponseEntity<Messages> getMessagesByThreads(@PathVariable("id") long id){
        return new ResponseEntity<Messages>((Messages) messageService.getMessagesByThreads(id),HttpStatus.OK);
    }


}
