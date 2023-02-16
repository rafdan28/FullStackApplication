package com.sms.backend.altro.DTO;

import com.sms.backend.model.Utente;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Response {
    private int status;
    private String message;
    private boolean success;
    private Utente utente;
}