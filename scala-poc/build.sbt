name := "scala-poc"

version := "0.1"

scalaVersion := "2.12.6"

libraryDependencies ++= Seq(
  "com.typesafe.akka" %% "akka-actor"   % "2.5.23",
  "com.typesafe.akka" %% "akka-slf4j"   % "2.5.23",
  "com.typesafe.akka" %% "akka-remote"  % "2.5.23",
  "com.typesafe.akka" %% "akka-agent"   % "2.5.23",
  "com.typesafe.akka" %% "akka-testkit" % "2.5.23" % "test"
)