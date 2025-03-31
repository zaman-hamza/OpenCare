package Corporate_Cookies_BUILD23.OpenCare.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table()
public class Threads {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String category;
    @Column(length = 1500)
    private String content;
    private String createdBy;

    @OneToMany(mappedBy = "threads", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Message> messages = new ArrayList<>();


//    private List<Message> messages = new ArrayList<>();

}
