package testing;

import static org.mockito.Mockito.*;

import org.junit.Test;

public class MyServiceVerifyTest {

    @Test
    public void testVerifyInteraction() {
        // Arrange
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);

        // Act
        service.fetchData();  // should call mockApi.getData()

        // Assert
        verify(mockApi).getData();  // passes if it was called exactly once
    }
}

