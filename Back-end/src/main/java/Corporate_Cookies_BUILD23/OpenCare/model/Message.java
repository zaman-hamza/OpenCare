package Corporate_Cookies_BUILD23.OpenCare.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@ToString
@Data
@Entity
@Table(name="Message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String senderName;
    private String receiverName;
    @Column(length = 1500)
    private String message;
    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    private Status status;

    @JsonIgnoreProperties("messages")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "threads_id")
    private Threads threads;


    public Message(String senderName, String receiverName, String message, Status status, Threads threads) {
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.message = message;
        this.status = status;
        this.threads = threads;
    }


    public Message() {

    }
}
