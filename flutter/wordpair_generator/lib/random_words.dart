import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

class RandomWords extends StatefulWidget {
  @override
  _RandomWordsState createState() => _RandomWordsState();
}

class _RandomWordsState extends State<RandomWords> {
  final _randomWordPairs = <WordPair>[];
  final _savedWordPairs = Set<WordPair>();

  Widget _buildRow(WordPair pair) {
    final alreadySaved = _savedWordPairs.contains(pair);
    return ListTile(
      title: Text(pair.asPascalCase, style: TextStyle(fontSize: 24.0),), 
      trailing: Icon(
        alreadySaved ? Icons.favorite : Icons.favorite_border, 
        color: alreadySaved ? Colors.red : null,
      ),
      onTap: () {
        setState(() {
          if (alreadySaved) {
            _savedWordPairs.remove(pair);
          } else {
            _savedWordPairs.add(pair);
          }
        });
      },
    );

  }

  Widget _buildList() {
    return ListView.builder(
      padding: EdgeInsets.all(32.0),
      itemBuilder: (context, index) {
          if (index.isOdd) return Divider();
          final wordIndex = index ~/ 2;
          if (wordIndex >= _randomWordPairs.length) {
            _randomWordPairs.addAll(generateWordPairs().take(10));
          }
          return _buildRow(_randomWordPairs[wordIndex]);
          // return Text("$index");
      }
    );
  }

  void _pushSaved() {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (BuildContext context) {
          final Iterable<ListTile> tiles = 
            _savedWordPairs.map((WordPair pair) => ListTile(
              title: Text(pair.asPascalCase, style: TextStyle(fontSize: 16.0),)));
          final List<Widget> divided = ListTile.divideTiles(
            context: context, tiles: tiles).toList();
          
          return Scaffold(
            appBar: AppBar(title: Text("Saved WordPairs"),),
            body: ListView(children: divided,),
          );
        }
      )
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
          appBar: AppBar(
            title: Text("WordPair Generator"),
            actions: <Widget>[
              IconButton(
                icon: Icon(Icons.list),
                onPressed: _pushSaved,
              )
            ],
          ),
          body:_buildList()
        );
  }
}