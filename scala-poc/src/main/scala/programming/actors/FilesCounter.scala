package programming.actors

import akka.actor._
import akka.routing._

class FilesCounter extends Actor {
  val start: Long = System.nanoTime
  var fileCount = 0L
  var pending = 0

  val fileExplorers: ActorRef =
    context.actorOf(RoundRobinPool(100).props(Props[FileExplorer]))

  override def receive: Receive = {
    case dirName: String =>
      pending = pending + 1
      fileExplorers ! dirName

    case count: Int =>
      fileCount = fileCount + count
      pending = pending-1

      if (pending == 0) {
        val end = System.nanoTime
        println(s"Files count: $fileCount")
        println(s"Time taken: ${(end - start)/1.0e9}s")
      }
  }
}
