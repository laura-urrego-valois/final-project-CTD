package com.digital.DigitaBooking.config;


import com.digital.DigitaBooking.jwt.JwtRequestFilter;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

import static com.digital.DigitaBooking.models.entities.Role.ADMIN;
import static com.digital.DigitaBooking.models.entities.Role.USER;


@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConf {
    private final JwtRequestFilter jwtRequestFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .cors(Customizer.withDefaults())
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(
                        authorizeHttpRequestsCustomizer -> authorizeHttpRequestsCustomizer
                                // Rutas de autorizaciones
                                .requestMatchers(HttpMethod.GET, "/welcome/anyone").permitAll()
                                .requestMatchers(HttpMethod.GET, "/welcome/user")
                                .hasAnyAuthority(USER.name(), ADMIN.name())
                                .requestMatchers(HttpMethod.POST, "/login").permitAll()
                                .requestMatchers(HttpMethod.POST, "/sign-up").permitAll()
                                .requestMatchers(HttpMethod.GET, "/welcome/admin").hasAuthority(ADMIN.name())
                                // Rutas de tours
                                .requestMatchers(HttpMethod.GET, "/tours").permitAll()
                                .requestMatchers(HttpMethod.GET, "/tours/{id}").permitAll()
                                .requestMatchers(HttpMethod.GET, "/tours/byCategory/{id}").permitAll()
                                .requestMatchers(HttpMethod.POST, "/tours").hasAnyAuthority(ADMIN.name())
                                .requestMatchers(HttpMethod.DELETE, "/tours/{id}").hasAuthority(ADMIN.name())
                                .requestMatchers(HttpMethod.PUT, "/tours/{id}").hasAnyAuthority(ADMIN.name())
                                // Rutas de categorías
                                .requestMatchers(HttpMethod.GET, "/category").permitAll()
                                .requestMatchers(HttpMethod.GET, "/category/{id}").permitAll()
                                .requestMatchers(HttpMethod.POST, "/category").hasAnyAuthority(ADMIN.name())
                                .requestMatchers(HttpMethod.PUT, "/category/{id}").hasAnyAuthority(ADMIN.name())
                                .requestMatchers(HttpMethod.DELETE, "/category/{id}").hasAuthority(ADMIN.name())
                                .anyRequest().authenticated())
                .addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();
    }

    // Para solucionar los errores debemos gestionar los roles, puse un Preauthorize en el Post de TourController para trabajar con ese método hasta que nos dé
    // de un resultado positivo y poder hacer lo mismo con los otros controladores pero aún así queda faltando algo más.
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:8000"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowedMethods(List.of("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
