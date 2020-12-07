case class A(value: Option[String])

case class AA(a: Option[A])

case class AAA(aa: Option[AA])

case class A4(aaa: Option[AAA])

case class Membership(enrolleeSourceCode: Option[String])
case class Record(memberships: Option[List[Membership]])

object NestedOptions extends App {
  val a4 = A4(Some(AAA(Some(AA(Some(A(Some("OK"))))))))
  val str = a4.aaa.flatMap(_.aa.flatMap(_.a.flatMap(_.value)))

  println(str)

  val client = Record(None).memberships.flatMap(m => m.head.enrolleeSourceCode)
  val client2 = Record(Some(List.empty[Membership])).memberships.flatMap(m =>
    m.headOption.flatMap ( f => f.enrolleeSourceCode )
  )
  println(client)
}
