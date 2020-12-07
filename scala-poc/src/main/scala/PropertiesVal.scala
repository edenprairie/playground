import java.util.Properties

object PropertiesVal extends App {
  def getCommonProps: Properties = {
    val p = new Properties()
    p.put("sharedA", "valueA")
    p.put("sharedB", "valueB")
    p.put("sharedC", "valueC")
    p.put("sharedD", "valueD")
    p
  }

  def getMyProps: Properties = {
    val m = getCommonProps
    m.put("my1", "value1")
    m.put("my2", "value2")
    m
  }

  val my = getMyProps

  println(my)
}
