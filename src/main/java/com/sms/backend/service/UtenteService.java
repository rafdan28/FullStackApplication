package com.sms.backend.service;

import com.sms.backend.model.Utente;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UtenteService extends UserDetailsService {
    Utente salvaUtente(Utente utente);
    @Override
    UserDetails loadUserByUsername(String email);
    Utente getUtenteByEmail(String email);
    Utente updateUtente(Utente utente, String email);
    void deleteUtente(String email);
    List<Utente> getAllUtenti();
}
