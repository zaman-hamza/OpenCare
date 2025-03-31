package Corporate_Cookies_BUILD23.OpenCare.SeviceImpl;

import Corporate_Cookies_BUILD23.OpenCare.Repository.MessageRepository;
import Corporate_Cookies_BUILD23.OpenCare.Repository.ThreadsRepository;
import Corporate_Cookies_BUILD23.OpenCare.Service.MessageService;
import Corporate_Cookies_BUILD23.OpenCare.model.Message;
import Corporate_Cookies_BUILD23.OpenCare.model.Threads;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MessageServiceImpl implements MessageService {
    private MessageRepository messageRepository;
    private ThreadsRepository threadsRepository;

    public MessageServiceImpl(MessageRepository MessageRepository, ThreadsRepository threadsRepository) {
        this.messageRepository = MessageRepository;
        this.threadsRepository= threadsRepository;
    }

    @Override
    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }

    @Override
    public List<Message> getAllMessage() {
        return messageRepository.findAll();
    }

    @Override
    public Message getMessageById(long id) {
        return messageRepository.findById(id).orElseThrow(() -> new RuntimeException("Error"));
    }

    @Override
    public List<Message> getMessagesByThreads(long id) {

        Optional<Threads> threads=threadsRepository.findById(id);
        if(threads.isPresent()) {
            Threads thread = threads.get();
            return messageRepository.findByThreads(thread);
        }else {
            throw new RuntimeException("Error");
        }

    }
}
