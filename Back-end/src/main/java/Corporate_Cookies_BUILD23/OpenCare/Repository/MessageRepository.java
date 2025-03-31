package Corporate_Cookies_BUILD23.OpenCare.Repository;

import Corporate_Cookies_BUILD23.OpenCare.model.Message;
import Corporate_Cookies_BUILD23.OpenCare.model.Threads;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {

    List<Message> findByThreads(Threads threads);

}
