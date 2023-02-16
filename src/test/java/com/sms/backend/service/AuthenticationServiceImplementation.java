package com.sms.backend.service;

import com.sms.backend.altro.DTO.Registration;
import com.sms.backend.model.Utente;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthenticationServiceImplementation implements AuthenticationService {

    private final UtenteService utenteService;

    @Override
    public Utente signup(Registration registration) {
        return utenteService.salvaUtente(new Utente(registration.getNome(), registration.getCognome(), registration.getEmail(), registration.getPassword(), registration.isAdmin(), registration.getRapporto()));
    }

    @Override
    public Utente getDetails(String email) {
        return (Utente) utenteService.loadUserByUsername(email);
    }
}
