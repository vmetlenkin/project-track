FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ProjectTrack.API/ProjectTrack.API.csproj", "ProjectTrack.API/"]
COPY ["ProjectTrack.Application/ProjectTrack.Application.csproj", "ProjectTrack.Application/"]
COPY ["ProjectTrack.Domain/ProjectTrack.Domain.csproj", "ProjectTrack.Domain/"]
COPY ["ProjectTrack.Infrastructure/ProjectTrack.Infrastructure.csproj", "ProjectTrack.Infrastructure/"]
RUN dotnet restore "ProjectTrack.API/ProjectTrack.API.csproj"
COPY . .
WORKDIR "/src/ProjectTrack.API"
RUN dotnet build "ProjectTrack.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ProjectTrack.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ProjectTrack.API.dll"]
