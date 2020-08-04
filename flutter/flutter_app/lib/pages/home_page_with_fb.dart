import 'package:flutter/material.dart';
import 'package:flutterapp/pages/login_page.dart';
import 'package:flutterapp/utils/constants.dart';

import '../drawer.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class HomePageFB extends StatelessWidget{
  static const String routeName = '/homefb';

  Future fetchData() async {
    var url = "https://jsonplaceholder.typicode.com/photos";
    var res = await http.get(url);
    return jsonDecode(res.body);
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
      body: FutureBuilder(
        future: fetchData(),
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
                    title: Text(snapshot.data[index]["title"]),
                    subtitle: Text("ID: ${snapshot.data[index]["id"]}"),
                    leading: Image.network(snapshot.data[index]["url"]),
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
