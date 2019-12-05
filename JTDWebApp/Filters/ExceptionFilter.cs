using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Filters;
using System.Web.Mvc;

namespace JTDWebApp.Filters
{
    public class ExceptionFilter : ExceptionFilterAttribute, System.Web.Mvc.IExceptionFilter
    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.ExpectationFailed)
            {
                Content = new ObjectContent<ResponseMessage>(new ResponseMessage
                {
                    Title = "Validação",
                    Message = actionExecutedContext.Exception.Message
                },
                new JsonMediaTypeFormatter()),
            });
        }

        public void OnException(ExceptionContext filterContext)
        {
            throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.ExpectationFailed)
            {
                Content = new ObjectContent<ResponseMessage>(new ResponseMessage
                {
                    Title = "Validação",
                    Message = filterContext.Exception.Message,
                    InnerException = filterContext.Exception.InnerException.Message
                },
                new JsonMediaTypeFormatter()),
            });
        }
    }

    public class ResponseMessage
    {
        public string Title { get; set; }
        public string Message { get; set; }
        public object InnerException { get; set; }
    }

}