using System;
using System.Linq;
using Todos2019.Controllers;
using Xunit;

namespace Todos2019.Tests
{
    public class TodosControllerTests
    {
        [Fact]
        public void GET_Returns_List_Of_Todos()
        {
            //var underTest = new TodosController();

            //var result = underTest.Get();

            //Assert.Equal(3, result.Value.Count());
        }

        [Fact]
        public void Post_Creates_New_Todo()
        {
            //var underTests = new TodosController();

            //var result = underTests.Post("Hello World");

            //Assert.True(result.Value);
        }

        [Fact]
        public void Post_Increases_Todos_Count()
        {
            //var underTest = new TodosController();
            //underTest.Post("Foo");

            //var result = underTest.Get();

            //Assert.Equal(4, result.Value.Count());
        }
    }
}
