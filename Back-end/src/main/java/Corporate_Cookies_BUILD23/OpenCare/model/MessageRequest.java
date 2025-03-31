package Corporate_Cookies_BUILD23.OpenCare.model;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class MessageRequest {
    private String senderName;
    private String receiverName;

    private String message;
    private String status;
    private long threadsId;
}
