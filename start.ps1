$searchPath = (Get-Item -Path ".\src\").FullName

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $searchPath
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true
$watcher.NotifyFilter = [System.IO.NotifyFilters]::LastWrite -bor [System.IO.NotifyFilters]::FileName

npm run build-dist

while($TRUE){
	$result = $watcher.WaitForChanged([System.IO.WatcherChangeTypes]::Changed -bor [System.IO.WatcherChangeTypes]::Renamed -bOr [System.IO.WatcherChangeTypes]::Created, 1000);
	if($result.TimedOut){
		continue;
	}
	write-host "Change in " + $result.Name
	npm run build-dist
}