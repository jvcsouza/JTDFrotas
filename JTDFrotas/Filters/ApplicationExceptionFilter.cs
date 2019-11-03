using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Security;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Filters;
using WebGrease.Css.Extensions;

namespace JTDFrotas.Filters
{
    public class ApplicationExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext actionExecutedContext)
        {
            actionExecutedContext.ActionContext.Response.StatusCode = HttpStatusCode.BadRequest;
            actionExecutedContext.ActionContext.Response.Headers.Add("TESTE", "TESTANDO 123");

            HttpStatusCode statusCode = HttpStatusCode.BadRequest;
            var mensagens = actionExecutedContext.Exception.Message;

            throw new HttpResponseException(new HttpResponseMessage(statusCode)
            {
                Content = new ObjectContent<string[]>(new string[] { mensagens },
                        new JsonMediaTypeFormatter()),
                ReasonPhrase = actionExecutedContext.Exception.GetType().Name
            });
        }
    }
}