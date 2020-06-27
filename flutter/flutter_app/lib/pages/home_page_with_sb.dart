import 'package:flutter/material.dart';
import 'package:flutterapp/pages/login_page.dart';
import 'package:flutterapp/utils/constants.dart';

import '../drawer.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class HomePageSB extends StatelessWidget{
  static const String routeName = '/homesb';

  Future fetchData() async {
    var url = "https://jsonplaceholder.typicode.com/photos";
    var res = await http.get(url);
    return jsonDecode(res.body);
  }

  Stream<List<String>> getStream() {
    var data = Stream<List<String>>.fromIterable(
      [List<String>.generate(20, (index) => "Item $index")]
    );
    return data;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      appBar: AppBar(
        title: Text("Awesome App"),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.exit_to_app,),
            onPressed: (){
              Constants.prefs.setBool("loggedIn", false);
              // Navigator.pop(context);
              Navigator.pushReplacementNamed(context, LoginPage.routeName);
            },
          )
        ],
      ),
      body: StreamBuilder(
        stream: getStream(),
        builder: (context, snapshot) {
          switch (snapshot.connectionState) {
            case ConnectionState.none:
              return Center(child: Text("Fetch something"),);
            case ConnectionState.active:
            case ConnectionState.waiting:
              return Center(child: CircularProgressIndicator(),);
            case ConnectionState.done:
              if (snapshot.hasError) {
                return Center(child: Text("Domething wrong"),);
              } 
              return ListView.builder(
                itemBuilder: (context, index) {
                  return ListTile(
                    title: Text(snapshot.data[index]),
                  );
                },
                itemCount: snapshot.data.length,
              ); 
          }
        },
      ),      drawer: MyDrawer(),
      floatingActionButton: FloatingActionButton(
        onPressed: (){
          // myText = _nameController.text;
        },
        child: Icon(Icons.refresh),
      ),
    );
  }

}
