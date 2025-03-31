package Corporate_Cookies_BUILD23.OpenCare.Service;

import Corporate_Cookies_BUILD23.OpenCare.model.Message;

import java.util.List;

public interface MessageService {

    Message saveMessage(Message message);
    List<Message> getAllMessage();

    Message getMessageById(long id);

    List<Message> getMessagesByThreads(long id);



}
