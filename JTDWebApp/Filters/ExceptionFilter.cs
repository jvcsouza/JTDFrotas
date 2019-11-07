using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web;
using System.Web.Http;
using System.Web.Http.Filters;

namespace JTDWebApp.Filters
{
    public class ExceptionFilter : ExceptionFilterAttribute
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
    }

    public class ResponseMessage
    {
        public string Title { get; set; }
        public string Message { get; set; }
    }

}