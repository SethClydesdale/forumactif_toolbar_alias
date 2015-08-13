$(function() {
  var toolbar_alias = {
 
    Share : 'Share',
    Login : 'Login',
    Register : 'Register',
    Welcome : 'Welcome',
    Notifications : 'Notifications',
 
    See_my_profile : 'View profile',
    Edit_profile : 'Edit profile',
    All_Topics : 'My topics',
    All_Messages : 'My posts',
    js_topics_followed : 'Watched topics',
    Admin_panel : 'Administration Panel',
    Logout : 'Log out',
 
    Notif_see_all : 'See all the notifications',
    Notif_priv_msg : 'You have received a <a href="/privmsg?folder=inbox&amp;nid=%(nid)s">private message</a> from <a href="/u%(id)d">%(name)s</a>',
    Notif_report : '<a href="/u%(id)d">%(name)s</a> has created a <a href="/report?nid=%(nid)s">message report</a>',
    Notif_friend_req : 'You have received a <a href="/profile?mode=editprofile&amp;nid=%(nid)s&amp;page_profil=friendsfoes">friend request</a> from <a href="/u%(id)d">%(name)s</a>',
    Notif_group_req : '<a href="/u%(id)d">%(name)s</a> has made a request to join the group <a href="/g%(group_id)d-%(group_url_name)s?nid=%(nid)s">%(group_name)s</a>',
    Notif_friend_con : '<a href="/u%(id)d">%(name)s</a> has connected',
    Notif_wall_msg : '<a href="/u%(id)d">%(name)s</a> has just written a message on <a href="/u%(self)dwall?nid=%(nid)s">your wall</a>',
    Notif_abuse : '<a href="/admin/index.forum?mode=active&amp;nid=%(nid)s&amp;part=misc&amp;sub=support">An abuse</a> was reported',
    Notif_topic_watch : '<a href="/u%(id)d">%(name)s</a> wrote a message <a href="/t%(topic_id)d-%(topic_name)s?nid=%(nid)s#%(post_id)d">in a watched topic</a>',
    Notif_topic_watch_p : '<a href="/u%(id)d">%(name)s</a> wrote a message <a href="/t%(topic_id)dp%(start)d-%(topic_name)s?nid=%(nid)s#%(post_id)d">in a watched topic</a>',
    Notif_topic_watch_guest : 'A guest wrote a message in <a href="/t%(topic_id)d-%(topic_name)s?nid=%(nid)s#%(post_id)d">a topic you watch</a>',
    Notif_topic_watch_p_guest : 'A guest wrote a message in <a href="/t%(topic_id)dp%(start)d-%(topic_name)s?nid=%(nid)s#%(post_id)d">a topic you watch</a>',
    Notif_mention : '<a href="/u%(id)d">%(name)s</a> tagged you in <a href="/t%(topic_id)dp%(start)d-%(topic_name)s?nid=%(nid)s#%(post_id)d">a topic</a>',
    Notif_hashtag : 'The keyword <a href="/tags/%(tag)s">#%(tag)s</a> has been tagged in <a href="/t%(topic_id)dp%(start)d-%(topic_name)s?nid=%(nid)s#%(post_id)d">a topic</a>.',
 
    All_PMs : 'My private messages',
    No_assigned_rank : 'No special rank assigned',
    Posts : 'Posts',
    PMs : 'PMs',
    Reputation : 'Reputation'
 
  },i;
 
  if (window._lang) for (i in toolbar_alias) window._lang[i] = toolbar_alias[i];
});
