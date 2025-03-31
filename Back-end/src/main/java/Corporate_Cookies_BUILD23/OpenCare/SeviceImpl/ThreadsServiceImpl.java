package Corporate_Cookies_BUILD23.OpenCare.SeviceImpl;

import Corporate_Cookies_BUILD23.OpenCare.Repository.ThreadsRepository;
import Corporate_Cookies_BUILD23.OpenCare.Service.ThreadsService;
import Corporate_Cookies_BUILD23.OpenCare.model.Threads;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ThreadsServiceImpl implements ThreadsService {
    private ThreadsRepository threadsRepository;

    public ThreadsServiceImpl(ThreadsRepository threadsRepository) {
        this.threadsRepository = threadsRepository;
    }

    @Override
    public Threads saveThreads(Threads threads) {
        return threadsRepository.save(threads);
    }

    @Override
    public List<Threads> getAllThreads() {
        return threadsRepository.findAll();
    }

    @Override
    public Threads getThreadsById(long id) {
            return threadsRepository.findById(id).orElseThrow(() -> new RuntimeException("Error"));
    }
}
