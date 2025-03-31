package Corporate_Cookies_BUILD23.OpenCare.Service;

import Corporate_Cookies_BUILD23.OpenCare.model.Threads;

import java.util.List;

public interface ThreadsService {

    Threads saveThreads(Threads threads);
    List<Threads> getAllThreads();

    Threads getThreadsById(long id);


}
