package com.sms.backend.repository;

import com.sms.backend.model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UtenteRepository extends JpaRepository<Utente,String> {
    Utente findUtenteByEmail(String email);
}
