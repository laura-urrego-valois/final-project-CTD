package com.digital.DigitaBooking.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class AwsConfig {
    @Value("${aws.access_key_id}")
    private String accessKeyId;
    @Value("${aws.secret_access_key}")
    private String accessSecretKey;
    @Value("${aws.s3.region}")
    private String region;


}
