name := "scala-poc"

version := "0.1"

scalaVersion := "2.13.1"

val akkaVersion = "2.6.3"
libraryDependencies ++= Seq(
  "com.typesafe.akka" %% "akka-actor"   % akkaVersion,
  "com.typesafe.akka" %% "akka-slf4j"   % akkaVersion,
//  "com.typesafe.akka" %% "akka-remote"  % akkaVersion,
//  "com.typesafe.akka" %% "akka-agent"   % akkaVersion,
  "com.typesafe.akka" %% "akka-testkit" % akkaVersion % "test"
)