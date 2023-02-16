package com.sms.backend.altro.DTO;


import com.sms.backend.model.Role;
import lombok.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
@ToString
public class Registration {
    private String nome;
    private String cognome;
    private String email;
    private String password;
    private boolean admin;
    private Role rapporto;
}