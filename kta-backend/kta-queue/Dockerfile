﻿FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env

WORKDIR /app

COPY . ./

RUN dotnet restore kta-backend.sln

RUN dotnet publish kta-queue/kta-queue.csproj -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1

WORKDIR /app

COPY --from=build-env /app/out .

ENTRYPOINT ["dotnet", "kta-queue.dll"]