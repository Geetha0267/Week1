package testing;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.error("❌ This is an error message");
        logger.warn("⚠️ This is a warning message");
        logger.info("ℹ️ This is just info");
        logger.debug("🐞 Debug mode is ON");
    }
}

