using Microsoft.AspNetCore.Identity;
using System;

namespace kta_core._Exceptions
{
    public class UserSignUpException : Exception
    {
        public IdentityError Error { get; set; }

        public UserSignUpException(IdentityError error, string message) : base (message) 
        {
            this.Error = error;
        }
    }
}
