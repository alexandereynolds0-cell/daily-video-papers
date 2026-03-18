import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'dart:convert';
import 'package:intl/intl.dart';

void main() {
  runApp(const VideoПапersApp());
}

class VideoПапersApp extends StatelessWidget {
  const VideoПапersApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Daily Video Papers',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF1565C0),
          brightness: Brightness.light,
        ),
        useMaterial3: true,
      ),
      darkTheme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF1565C0),
          brightness: Brightness.dark,
        ),
        useMaterial3: true,
      ),
      home: const PaperListScreen(),
    );
  }
}

// ─── Model ─────────────────────────────────────────────────────────────────

class PaperDay {
  final String date;
  final String sha;
  int? count;

  PaperDay({required this.date, required this.sha, this.count});
}

// ─── PaperListScreen ───────────────────────────────────────────────────────

class PaperListScreen extends StatefulWidget {
  const PaperListScreen({super.key});

  @override
  State<PaperListScreen> createState() => _PaperListScreenState();
}

class _PaperListScreenState extends State<PaperListScreen> {
  List<PaperDay> _days = [];
  bool _loading = true;
  String? _error;

  static const String _owner = 'alexandereynolds0-cell';
  static const String _repo = 'daily-video-papers';
  static const String _apiBase =
      'https://api.github.com/repos/$_owner/$_repo/contents/papers';

  @override
  void initState() {
    super.initState();
    _fetchPaperList();
  }

  Future<void> _fetchPaperList() async {
    setState(() {
      _loading = true;
      _error = null;
    });
    try {
      final resp = await http.get(
        Uri.parse(_apiBase),
        headers: {'Accept': 'application/vnd.github.v3+json'},
      );
      if (resp.statusCode == 200) {
        final List data = json.decode(resp.body);
        final days = data
            .where((f) => (f['name'] as String).endsWith('.md'))
            .map((f) {
              final name = (f['name'] as String).replaceAll('.md', '');
              return PaperDay(date: name, sha: f['sha'] ?? '');
            })
            .toList();
        days.sort((a, b) => b.date.compareTo(a.date));
        setState(() {
          _days = days;
          _loading = false;
        });
      } else {
        setState(() {
          _error = 'Failed to load: HTTP ${resp.statusCode}';
          _loading = false;
        });
      }
    } catch (e) {
      setState(() {
        _error = 'Network error: $e';
        _loading = false;
      });
    }
  }

  String _formatDate(String raw) {
    try {
      final dt = DateTime.parse(raw);
      return DateFormat('yyyy年MM月dd日 EEEE', 'zh_CN').format(dt);
    } catch (_) {
      return raw;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('📄 Daily Video Papers'),
        centerTitle: true,
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: _fetchPaperList,
            tooltip: 'Refresh',
          ),
        ],
      ),
      body: _loading
          ? const Center(child: CircularProgressIndicator())
          : _error != null
              ? Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Icon(Icons.error_outline, size: 48, color: Colors.red),
                      const SizedBox(height: 12),
                      Text(_error!, textAlign: TextAlign.center),
                      const SizedBox(height: 12),
                      ElevatedButton(
                        onPressed: _fetchPaperList,
                        child: const Text('Retry'),
                      ),
                    ],
                  ),
                )
              : RefreshIndicator(
                  onRefresh: _fetchPaperList,
                  child: ListView.builder(
                    padding: const EdgeInsets.all(12),
                    itemCount: _days.length + 1,
                    itemBuilder: (ctx, i) {
                      if (i == 0) return _buildHeader();
                      final day = _days[i - 1];
                      return _buildDayCard(day);
                    },
                  ),
                ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 0,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.article), label: 'Papers'),
          BottomNavigationBarItem(icon: Icon(Icons.model_training), label: 'World Models'),
          BottomNavigationBarItem(icon: Icon(Icons.smart_toy), label: 'Agents'),
        ],
        onTap: (index) {
          if (index == 1) {
            Navigator.push(context, MaterialPageRoute(
              builder: (_) => const ReadmeScreen(
                title: 'World Model Papers',
                url: 'https://raw.githubusercontent.com/$_owner/$_repo/main/world-model/README.md',
              ),
            ));
          } else if (index == 2) {
            Navigator.push(context, MaterialPageRoute(
              builder: (_) => const ReadmeScreen(
                title: 'Agent Papers',
                url: 'https://raw.githubusercontent.com/$_owner/$_repo/main/agent/README.md',
              ),
            ));
          }
        },
      ),
    );
  }

  Widget _buildHeader() {
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            Theme.of(context).colorScheme.primaryContainer,
            Theme.of(context).colorScheme.secondaryContainer,
          ],
        ),
        borderRadius: BorderRadius.circular(12),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            '🎬 Video Research Papers',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 4),
          Text(
            'Daily arXiv updates · ${_days.length} days available',
            style: TextStyle(
              color: Theme.of(context).colorScheme.onSecondaryContainer,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDayCard(PaperDay day) {
    final isToday = day.date == DateFormat('yyyy-MM-dd').format(DateTime.now());
    return Card(
      margin: const EdgeInsets.symmetric(vertical: 4),
      elevation: isToday ? 3 : 1,
      child: ListTile(
        leading: CircleAvatar(
          backgroundColor: isToday
              ? Theme.of(context).colorScheme.primary
              : Theme.of(context).colorScheme.surfaceVariant,
          child: Text(
            day.date.substring(8, 10),
            style: TextStyle(
              color: isToday
                  ? Theme.of(context).colorScheme.onPrimary
                  : Theme.of(context).colorScheme.onSurfaceVariant,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        title: Text(
          _formatDate(day.date),
          style: const TextStyle(fontWeight: FontWeight.w600),
        ),
        subtitle: isToday ? const Text('📌 Today') : null,
        trailing: const Icon(Icons.chevron_right),
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (_) => PaperDetailScreen(
                date: day.date,
                url:
                    'https://raw.githubusercontent.com/$_owner/$_repo/main/papers/${day.date}.md',
              ),
            ),
          );
        },
      ),
    );
  }
}

// ─── PaperDetailScreen ─────────────────────────────────────────────────────

class PaperDetailScreen extends StatefulWidget {
  final String date;
  final String url;

  const PaperDetailScreen({super.key, required this.date, required this.url});

  @override
  State<PaperDetailScreen> createState() => _PaperDetailScreenState();
}

class _PaperDetailScreenState extends State<PaperDetailScreen> {
  String? _content;
  bool _loading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _fetchContent();
  }

  Future<void> _fetchContent() async {
    try {
      final resp = await http.get(Uri.parse(widget.url));
      if (resp.statusCode == 200) {
        setState(() {
          _content = resp.body;
          _loading = false;
        });
      } else {
        setState(() {
          _error = 'HTTP ${resp.statusCode}';
          _loading = false;
        });
      }
    } catch (e) {
      setState(() {
        _error = '$e';
        _loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.date),
        actions: [
          IconButton(
            icon: const Icon(Icons.open_in_browser),
            onPressed: () {
              final webUrl =
                  'https://github.com/alexandereynolds0-cell/daily-video-papers/blob/main/papers/${widget.date}.md';
              launchUrl(Uri.parse(webUrl),
                  mode: LaunchMode.externalApplication);
            },
            tooltip: 'Open in Browser',
          ),
        ],
      ),
      body: _loading
          ? const Center(child: CircularProgressIndicator())
          : _error != null
              ? Center(child: Text('Error: $_error'))
              : Markdown(
                  data: _content ?? '',
                  onTapLink: (text, href, title) {
                    if (href != null) {
                      launchUrl(Uri.parse(href),
                          mode: LaunchMode.externalApplication);
                    }
                  },
                  styleSheet: MarkdownStyleSheet(
                    h1: Theme.of(context).textTheme.headlineMedium,
                    h2: Theme.of(context).textTheme.titleLarge,
                    h3: Theme.of(context).textTheme.titleMedium,
                    a: TextStyle(
                        color: Theme.of(context).colorScheme.primary),
                  ),
                ),
    );
  }
}

// ─── ReadmeScreen ───────────────────────────────────────────────────────────

class ReadmeScreen extends StatefulWidget {
  final String title;
  final String url;

  const ReadmeScreen({super.key, required this.title, required this.url});

  @override
  State<ReadmeScreen> createState() => _ReadmeScreenState();
}

class _ReadmeScreenState extends State<ReadmeScreen> {
  String? _content;
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _fetch();
  }

  Future<void> _fetch() async {
    try {
      final resp = await http.get(Uri.parse(widget.url));
      setState(() {
        _content = resp.statusCode == 200 ? resp.body : 'Error ${resp.statusCode}';
        _loading = false;
      });
    } catch (e) {
      setState(() {
        _content = 'Network error: $e';
        _loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.title)),
      body: _loading
          ? const Center(child: CircularProgressIndicator())
          : Markdown(
              data: _content ?? '',
              onTapLink: (text, href, title) {
                if (href != null) {
                  launchUrl(Uri.parse(href), mode: LaunchMode.externalApplication);
                }
              },
            ),
    );
  }
}
