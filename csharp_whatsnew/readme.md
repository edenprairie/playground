* React template, authentication with Sqlite:
```
dotnet new react -o [some_folder] -au Individual
```

* React template, authentication with Sql Server local db:
```
dotnet new react --auth Individual -uld -o [some_folder]
```

* Install EF tools:
```
dotnet tool install --global dotnet-ef
```
* Modify `appsettings.json` change `DefaultConnection` to:
```
"data source=mssql.local;initial catalog=SPA;integrated security=false;User ID=sa;Password=someP@ssword;MultipleActiveResultSets=True;App=EntityFramework&quot;"
```

* Update database - Create identity schema: 
```
dotnet ef database update
```
 
